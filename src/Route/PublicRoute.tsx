import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = (props:any) => {
    const { Component, restricted, ...rest} = props;
    const token = localStorage.getItem("token")
    return (
        <Route {...rest} render={props => (
           token && restricted ?
                <Redirect to="/user" />
                : <Component {...props} />
        )} />

    );
};

export default PublicRoute;