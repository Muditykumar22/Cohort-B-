import React, { createContext, useContext, useReduer, useEffect} from 'react';
import { useLocalStorage} from '../hooks/useLocalStorage';
const AuthContext = createContext();
const authReducer = (state, action)=> {
    switch (action.type){
        case 'LOGIN':
        return { ...state, isAuthenticated: true , user: action.payload};
        case 'LOGOUT':
            return { ...state, isAuthenticated: false, user: null};
        case 'UPDATE_USER':
            return { ...state, user:{ ...state.user, ...action.payload}};
        default:
            return state;

    }
};
