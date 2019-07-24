import React, { useEffect, useReducer } from 'react';
import API from './api/comingSoon';
import AppContext from './state/AppContext';
import { Reducer } from './state/reducers/Main';
import Main from './components/main/Main';

const App = () => {
    const initialState = {
        currentPage: 'Web Graphics Atlanta',
        content: 'Loading...',
    };

    const [ state, dispatch ] = useReducer(Reducer, initialState);

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await API.loadPageData();

                dispatch({ type: 'SUCCESS', payload: response });
            } catch (error) {
                dispatch({ type: 'FAILURE' });
            }
        };

        fetchData();
    }, []);

    return (
        <AppContext.Provider value={ state }>
            <Main />
        </AppContext.Provider>
    );
};

export default App;
