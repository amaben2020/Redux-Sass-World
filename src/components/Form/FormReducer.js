const FormReducer = (state, action) => {
  switch (action.type) {
    case 'HANDLE_INPUT_TEXT': {
      return {
        ...state,
        [action.field]: action.payload,
      };
    }
    case 'HANDLE_EMAIL_INPUT': {
      return {
        ...state,
        [action.field]: action.payload,
      };
    }
    case 'TOGGLE_HAS_CONSENTED':
      return {
        ...state,
        hasConsented: !state.hasConsented,
      };
    default:
      return state;
  }
};

export default FormReducer;
