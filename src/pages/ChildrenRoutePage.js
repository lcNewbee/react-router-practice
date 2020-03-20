import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import ListItemLink from '../components/ListItemLink';

export default function ChildrenRoutePage() {
  return (
    <div>
      <h3>ChildrenRoutePage</h3>
      <Router>
        <ul>
          <ListItemLink to="/somewhere" name="somewhere" />
          <ListItemLink to="/somewhere-else" name="somewhere-else" />
        </ul>
      </Router>
    </div>
  )
}