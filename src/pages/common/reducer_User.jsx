
const error_display = (state, action) => {
    switch (action.type) {
        case 'display_error':
            return {
                ...state,
                [action.name]: action.value,
            }
        default:
            return state;
    }
}

const validate = (state, action) => {
    console.log('Validate:', state, action);
    switch (action.type) {
        case 'set_value':
            if (state.receive_agree && action.name in state.receive_agree) {
                return {
                    ...state,
                    receive_agree: {
                        ...state.receive_agree,
                        [action.name]: action.value,
                    }
                }
            } else {
                return {
                    ...state,
                    [action.name]: action.value,
                }
            }
        case 'check_pattern':
            break;
        default:
            return state;

    }
}

export { error_display, validate };