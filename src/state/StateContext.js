import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

export const StateContext = createContext(null);

export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={ useReducer(reducer, initialState) }>
        { children }
    </StateContext.Provider>
);

export const UseStateContext = () => useContext(StateContext);

StateProvider.propTypes = {
    children: PropTypes.node.isRequired,
    initialState: PropTypes.shape({}).isRequired,
    reducer: PropTypes.func.isRequired,
};
