import React, {Component} from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (props:any) => {
    const { Component, ...rest} = props;
    const token = localStorage.getItem("token");
    return (
        <Route
            render={rest => {
                if (token) {
                    return <Component {...rest} />;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/login"
                            }}
                        />
                    );
                }
            }}
        />
    );
};

export default PrivateRoute;