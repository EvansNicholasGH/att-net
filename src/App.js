import React, { Component } from 'react';
import Header from './Components/Header/Header';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import { MuiThemeProvider } from '@material-ui/core/styles';

import routes from './routes';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Home from './Components/Home';


const styles = theme => ({

});

class App extends Component {

  render() {

    return (
      <React.Fragment>
        <BrowserRouter>
          <MuiThemeProvider >
            <div className="App">
              <Header />
              <Route exact path={routes.HOME()} component={Home} />
            </div>
          </MuiThemeProvider>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    
  };
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(withStyles(styles)(App));
