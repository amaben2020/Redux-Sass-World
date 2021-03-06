import React, { useState, useEffect, useCallback } from 'react';
import Card from '../components/Card';
import { Row, Col, Container, ToastBody } from 'react-bootstrap';
import axios from 'axios';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { postFetch } from '../Redux/PostActions.js';
import Loading from './../components/messages/Loading';
import SearchBar from './../components/SearchBar';
import Hero from '../components/Hero';
import Category from '../components/Category';
import Jewelry from '../components/Jewelry';
import Footer from '../components/Footer';
import './../SASS/components/pagination/pagination.scss';
import ReactPaginate from 'react-paginate';
import Form from './../components/Form/Form';
// import Checkboxes from '../utils/Checkboxes'

const Home = () => {
  const [query, setQuery] = useState('');
  const [sortBy, setSortBy] = useState('price');
  const [sortItemsBy, setSortItemsBy] = useState('title');
  const [orderBy, setOrderBy] = useState('asc');

  const [movies, setMovies] = useState([]);

  const categoryData = movies.map((m) => m.category);
  const priceData = movies.map((m) => m.price);

  const [selected, setSelected] = useState({
    price: [priceData],
    category: [categoryData],
  });

  const fetchData = useCallback(() => {
    window
      .fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleFilters = (checkboxState, key) => {
    const logic = 'AND';
    const newFilters = { ...selected };
    newFilters[key] = checkboxState;
    const hasRatings = newFilters.rating.length > 0;
    const hasGenres = newFilters.genre.length > 0;
    const hasFilters = hasRatings || hasGenres;
    const filterRating = (module) =>
      newFilters.rating.includes(0) ||
      newFilters.rating.includes(module.rating);
    const filterGenre = (module) =>
      newFilters.genre.includes('') || newFilters.genre.includes(module.genre);

    const filteredMovies = movies.filter(
      logic === 'OR'
        ? (m) => !hasFilters || filterRating(m) || filterGenre(m) // OR
        : (m) =>
            !hasFilters ||
            ((!hasRatings || filterRating(m)) && (!hasGenres || filterGenre(m))) // AND
    );
    setMovies(filteredMovies);
    setSelected(newFilters);
  };

  const getPosts = () =>
    axios.get('https://fakestoreapi.com/products').then((res) => res.data);

  const { data: products, isLoading, isSuccess } = useQuery('posts', getPosts);

  /// PAGINATION LOGIC VERY EASY
  //The pagination state
  const [pageNumber, setPageNumber] = React.useState(0);
  //The pagination state appointmentData per page
  const productsPerPage = 4;
  // i.e 0 * 5; how many list items to display //5 items per page
  const pagesVisited = pageNumber * productsPerPage;

  if (isLoading) {
    return <Loading />;
  }

  const filteredProductData = Object.values(products)
    .slice()
    .filter((product) => {
      return (
        product.category.toLowerCase().includes(query.toLowerCase()) ||
        product.title.toLowerCase().includes(query.toLowerCase())
      );
    })
    .sort((a, b) => {
      //order is a variable that ordersBy higher first value
      let order = orderBy === 'asc' ? 1 : -1;
      console.log(order);
      console.log(sortBy);
      return a[sortBy] < b[sortBy] ? -1 * order : 1 * order;
    })
    .slice(pagesVisited, pagesVisited + productsPerPage);

  console.log(filteredProductData);

  //if you put above the filteredData, the products length would hve changed
  const pageCount = Math.ceil(products.length / productsPerPage);
  console.log(products.length / 4);

  // // This function simply sets the pageNumber value to the selected button
  // //i.e setPageNumber = 5; if there is 5 pageCount
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Container style={{ paddingTop: '50px' }} fluid className="section">
      <h1 className="section__header">Top Products</h1>{' '}
      <Row style={{ position: 'relative' }}>
        <Col lg={9} xs={12} md={10} sm={12} className="section__card">
          {filteredProductData &&
            filteredProductData?.map((product) => (
              <Card key={product.id} products={product} />
            ))}
        </Col>{' '}
        <Col
          // className="section__sidebar  d-none d-md-block"
          lg={3}
          xs={12}
          md={2}
        >
          <SearchBar
            orderBy={orderBy}
            onSortByChange={(mySort) => setSortBy(mySort)}
            onSortItemsByChange={(mySort) => setSortItemsBy(mySort)}
            onOrderByChange={(mySort) => setOrderBy(mySort)}
            sortBy={sortBy}
            sort={products}
            query={query}
            sortItemsBy={sortItemsBy}
            onQueryChange={(myQuery) => setQuery(myQuery)}
          />
        </Col>
      </Row>
      {/* <Checkboxes/> */}
      <div className="section__paginate">
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={'paginationBtns'}
          previousLinkClassName={'previousBtns'}
          nextLinkClassName={'nextBtns'}
          disabledClassName={'paginationDisabled'}
          activeClassName={'paginationActive'}
        />
      </div>
      <Form title='Amaben202phantom' />
      {/* <Row lg={12}>
				<Category />
				<Jewelry />
			</Row> */}
      <Footer />
    </Container>
  );
};

export default Home;
