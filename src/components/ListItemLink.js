import React from 'react';
import { Route, Link } from 'react-router-dom';

function ListItemLink({ to, name, ...rest }) {
  return (
    <Route
      path={to}
      children={({ match }) => (
        <li className={match ? 'active' : ''}>
          <Link to={to} {...rest}>{name}</Link>
        </li>
      )}
    />
  )
}

export default ListItemLink;
