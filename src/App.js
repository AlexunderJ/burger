import React, { Component } from 'react';

import {Route, Switch} from 'react-router-dom';
import Layout from "./pages/Layout";
import BuilderBurger from "./pages/BurgerBuilder/BurgerBuilder";
import Checkout from "./pages/Checkout/Checkout";
import Orders from "./pages/Orders/Orders";


export default class App extends Component {
 

  render(){
  return (
    <div>
      <Layout>
        <Switch>
         <Route path='/checkout' component={Checkout} />
         <Route path='/orders' component={Orders} />
         <Route path='/' exact component={BuilderBurger} />
         </Switch>
          </Layout>
    </div>
  );
  }
}






