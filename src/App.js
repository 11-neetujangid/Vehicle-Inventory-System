import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Component/Home'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './Reducers/reducer';
import ViewList from './Component/ViewList'
import { Link } from 'react-router-dom';
import AddTrip from './Component/AddTrip';
import ViewRecords from './Component/ViewTripRecords';

const store = createStore(reducer);
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <header>
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <Link class="nav-link active" to="/">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/viewlist">View List</Link>
              </li>
            </ul>
          </header>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/viewlist" component={ViewList} />
            <Route exact path="/addtrip/:id" component={AddTrip} />
            <Route exact path="/viewRecords/:id" component={ViewRecords} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
