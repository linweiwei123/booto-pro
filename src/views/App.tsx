import * as React from 'react';
import { connect } from 'booto';
import { Route, Switch } from 'react-router';
import { routes } from '../routers/routers';
import { ICounter } from '../index';
import Layout from './layouts/Layout';

const App = connect((counter:ICounter) => counter)((props:any) => (
    <Layout>
      <Switch>
        {
          routes.map((item, index) =>
            <Route
              key={index}
              path={item.path}
              component={item.component}
              {...item.options}
            /> )
        }
      </Switch>
    </Layout>
  )
);

export default App;