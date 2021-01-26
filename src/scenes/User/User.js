// @flow

import React from 'react';

type Props = {
    match: { 
        params: {
            id: number
        }
    }
};

const User = (props : Props) => {
    return (
        <h1>User {props.match.params.id}</h1>
    )
}

export default User;