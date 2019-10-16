import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import chart from './lifecyclechart.jpeg';
import Name from './name';
import Lang from './lang';
import RecursiveColor from './components/recursiveColor';
import Triangle from './components/triangle';
import ImRecursive from './components/imRecursive';
import Pizza from './containers/pizza';


class App extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Joey'
    }
  }

  render() {
    return (
      <div className="App">
        {/*
          <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Learn React LifeCycle</p>
          </header>
          */}
        <h3>Opacity Test 1</h3>
        <div className={'opacitytest'} style={{opacity: 1}}>Opacity is 1</div>
        <div className={'opacitytest'} style={{opacity: 0.5}}>Opacity is 0.5</div>
        <h3>Opacity Test 2</h3>
        <h2 className="ontop">the element free of the transparent division.</h2>
        <div className="bar">
          <h2>Some mild-mannered text trapped inside a bar.</h2>
        </div>
        <h3>Opacity Test 3</h3>
          <div class="container">
            <h3>cannot make a child element less transparent than the parent</h3>
            <div class="opacity70">opacity: 0.7</div>
            <div class="opacity60">opacity: 0.6</div>
            <div class="opacity50">opacity: 0.5</div>
          </div>

        <br/>

        <h3>Recursive Opacity Boxes Components</h3>
        <RecursiveColor opacity={0.5}/>
        <h3>Recursive Triangle Components</h3>
        <Triangle n={10}/>
        <h3>Recursive Component Inside Itself</h3>
        <ImRecursive child={true} />
        <h3>Recursive Pizza Topping Component</h3>
        <Pizza />

        <Lang />
        <br/>
        <img id='chart1' src={chart} alt="LifeCycle Chart" />
        <br />
        <Name firstName={this.state.name} />

      </div>
    );
  }
}

export default App;
