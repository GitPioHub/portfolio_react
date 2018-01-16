import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './home/home';
import VeilleTechnologique from './veille-technologique/veilleTechnologique';
import SkillsE6 from "./SkillsE6/SkillsE6";

const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route  path="/veille-technologique" component={VeilleTechnologique}/>
            <Route  path="/competenceE6" component={SkillsE6}/>
        </Switch>
    </main>
);
export default Main


