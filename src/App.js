import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import CharactersPage from './CharactersPage';
import FilmsPage from './FilmsPage';
import SpeciesPage from './SpeciesPage';
import StarshipsPage from './StarshipsPage';
import VehiclesPage from './VehiclesPage';
import PlanetsPage from './PlanetsPage';
import './App.css';
import CardDetails from './components/CardDetails';

class App extends Component {

  render() {
    return (
      <div className="App">
      <div className="stars"></div>
      <div className="twinkling"></div>
    <header>
      <div>
        <NavLink to="/" className="logo">
        <div className="title title-color">Star</div>
        <div className="subtitle">A VISUAL GUIDE</div>
        <div className="title title-color">Wars</div>
        </NavLink>
      </div>
    </header>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/people" component={CharactersPage} />
            <Route exact path="/films" component={FilmsPage} />
            <Route exact path="/species" component={SpeciesPage} />
            <Route exact path="/starships" component={StarshipsPage} />
            <Route exact path="/vehicles" component={VehiclesPage} />
            <Route exact path="/planets" component={PlanetsPage} />
            <Route exact path="/people/:id" component={CardDetails} />
          </Switch>
      </div>
    );
  }
}

export default App;
