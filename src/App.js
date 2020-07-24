import React from 'react';
import { Route } from 'react-router-dom'

import Average from "./component/Average.js";
import Counter from "./component/Counter.js";
import Landing from "./component/Landing.js";
import Lists from "./component/Lists.js";
import List from "./component/List.js";


const App = () => {
  return (
    <div>
    <Route path= "/" component={Landing} exact={true} />
    <Route path= "/average" component={() => <Average initialList={[]} initialNumber={0}/>} />
    <Route path ="/counter" component={Counter} />
    <Route path ="/lists" component={Lists} />
    <Route path="/list/:_id" component={List} />
    </div>
  );
}

export default App;
//<Route path="/list/:username" component={List} />