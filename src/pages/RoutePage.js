import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import LoginPage from './LoginPage';
import PrivateRoute from './PrivateRoute';
// 普通路由 动态路由 嵌套路由
class RoutePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: 0,
      category: 'math'
    }
  }
  render() {
    return (
      <div>
        <h3>RoutePage</h3>
        <Router>
          <ul>
            <li><Link to="/about">about</Link></li>
            <li><Link to={`/user/${this.state.userid}`}>user</Link></li>
            <li><Link to={`/articles/${this.state.category}`}>articles</Link></li>
          </ul>

          <Switch>
            {/* <Route path="/about" component={About} />
            <Route path="/user/:id" component={UserInfo} />
            <Route path="/articles/:category" component={ArticleCatePage} /> */}
            <PrivateRoute path="/about" component={About} />
            <PrivateRoute path="/user/:id" component={UserInfo} />
            <PrivateRoute path="/articles/:category" component={ArticleCatePage} />
            <Route path="/login" component={LoginPage} />
            <Route exact path="/" component={() => <h3>Index</h3>} />
            <Route render={() => <h3>404</h3>} />
          </Switch>
        </Router>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(
  mapStateToProps
)(RoutePage);


function About() {
  return (
    <h3>This is About Page</h3>
  )
}

function UserInfo({ match }) {
  const { id } = match.params;
  console.log('UserInfo:', match)
  return (
    <div>
      <h3>UserInfo Page. UserId: {`${id}`}</h3>
    </div>
  )
}

function ArticleCatePage({ match }) {
  const {category} = match.params;
  return (
    <div>
      <h3>ArticleCatePage: Article category: {`${category}`}</h3>

      <ul>
        <li><Link to={`/articles/${category}/detail/1`}>1</Link></li>
        <li><Link to={`/articles/${category}/detail/2`}>2</Link></li>
        <li><Link to={`/articles/${category}/detail/3`}>3</Link></li>
      </ul>

      <Route path="/articles/:category/detail/:id" render={({match}) => {
        const { category, id } = match.params;
        return (
          <h3>Article Detail. Category: {`${category}`}. Detail Id: {`${id}`} </h3>
        )
      }} />
    </div>
  )
}