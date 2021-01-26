// @flow

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuth } from 'services/security/isAuth';
import { hasRoles } from 'services/security/hasRoles';

type Props = {
    component: any,
    roles: Array<string>,
    path: string,
};

const MyRoute = ({ component: Component, roles, path } : Props) => {
    return (
        <Route
        path={path}
        exact={true}
        render={(props) => 
            (roles === undefined || (isAuth() && hasRoles(roles))) ? (
                <Component {...props} />
            ) : (
                isAuth() ? (
                    <Redirect to="/" />
                ) : (
                    <Redirect to="/login" />
                )
            )
        }
        />
    );
}

export default MyRoute;