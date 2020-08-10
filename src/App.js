import React from 'react';
import './App.css';
import MainHeader from './Component/Header/MainHeader';
import { HashRouter, Route, Switch } from 'react-router-dom';
import About from './Component/Pages/About';
import Experience from './Component/Pages/Experience';
import Education from './Component/Pages/Education';
import Skill from './Component/Pages/Skill';
import Interests from './Component/Pages/Interests/Index';
import Award from './Component/Pages/Award';

const HomePages = React.lazy(() => import("../src/Component/Pages/HomePage/index"))


function App() {
  return (
    <HashRouter>
      <React.Suspense fallback="Loading">
        <Switch>
          <Route path="/" exact component={HomePages} />
          <Route path="/about " component={About} />
          <Route path="/experience" component={Experience} />
          <Route path="/education" component={Education} />
          <Route path="/skill" component={Skill} />
          <Route path="/interests" component={Interests} />
          <Route path="/awards" component={Award} />

        </Switch>
        <div className="App">
          <MainHeader BrandName="Saraswati Timsina" BrandImage="saraswati.png" />
          <HomePages />
        </div>
      </React.Suspense>
    </HashRouter>
  );
}

export default App;
