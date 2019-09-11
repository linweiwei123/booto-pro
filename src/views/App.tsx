import * as React from 'react';
import { connect } from 'booto';
import { Route, Switch } from 'react-router';
import { routes } from '../routers/routers';
import { ICounter } from '../index';
import 'antd/dist/antd.css';
import SiderDemo from './layouts/SideBar/SideBar';

const App = connect((counter:ICounter) => counter)((props:any) => (
    <div>
      <div className="main">
        <SiderDemo>
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
        </SiderDemo>
      </div>
    </div>
  )
);

export default App;