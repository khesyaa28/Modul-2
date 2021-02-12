import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import Beranda from '../Components/beranda';
import TentangSaya from '../Components/tentangsaya';
import Karya from '../Components/karya';
import Kontak from '../Components/kontak';

const Utama = () => (
    <Switch>
        <Route exact path="/beranda" component={Beranda} />
        <Route path="/tentangsaya" component={TentangSaya} />
        <Route path="/karya" component={Karya} /> 
        <Route path="/kontak" component={Kontak} /> 
    </Switch>
)

export default Utama;
