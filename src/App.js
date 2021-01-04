import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Layout from './components/Layout';
import Home from './pages/Home';
import Action from './pages/Action';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/action" component={Action} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
