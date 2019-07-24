import React from 'react';

const pageTitles = {
    login: 'Login to Web Graphics Atlanta',
    main: 'Welcome to Web Graphics Atlanta',
};

const Ctx = React.createContext({
    currentPage: '',
    togglePageTitle: () => {},
});

export default {
    Ctx,
    pageTitles,
};
