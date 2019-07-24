export const pageTitles = {
    login: 'Login to Web Graphics Atlanta',
    main: 'Welcome to Web Graphics Atlanta',
};

export const Reducer = (state, action) => {
    switch (action.type) {
        case 'LOADING': {
            const response = state.content !== 'Loading...'
                ? { ...state, content: 'Loading...' }
                : { ...state };

            return response;
        }
        case 'SUCCESS':
            return {
                ...state,
                content: action.payload,
            };
        case 'FAILURE':
            return {
                ...state,
                content: 'Error loading content...',
            };
        default:
            throw new Error('Invalid Action Type');
    }
};
