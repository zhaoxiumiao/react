import { GlobalStyle } from './style.js';
import { GlobalIcon } from './statics/iconfont/iconfont'
import {Fragment} from 'react';
import Header from './common/header/index'
import store from './store/index'
import {Provider} from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Detail from './pages/detail/loadable'
import Home from './pages/home'
import Login from './pages/login'
import Write from './pages/write'

function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Route path='/' exact component={Home}></Route>
          <Route path='/login' exact component={Login}></Route>
          <Route path='/write' exact component={Write}></Route>
          <Route path='/detail/:id' exact component={Detail}></Route>
        </BrowserRouter>
      </Provider>
      <GlobalStyle />
      <GlobalIcon />
    </Fragment>
  );
}

export default App;
