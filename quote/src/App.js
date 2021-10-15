import React from 'react';

import './styles/main.css';
import { Button, Card, CardActions, CardContent, CardHeader, IconButton, Typography } from '@material-ui/core';
import TwitterIcon from '../node_modules/@material-ui/icons/Twitter';

import poems from './data/_poems';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = poems[0];
  }

  poemSwitch () {
    const randomPoem = Math.floor(Math.random()*poems.length); 
    this.setState(state => {
      return poems[randomPoem]
    }) 
  }

  render() {
    return (
      <main className="App">
          <Card id="quote-box">
            <CardContent>          
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Random Poems
              </Typography>
              <Typography id="poemtitle">{this.state.title}</Typography>
              <Typography id="text"><div dangerouslySetInnerHTML={{__html:this.state.text}} /></Typography>
              <Typography color="text.secondary" id="author"><div dangerouslySetInnerHTML={{__html:this.state.author}} /></Typography>
              <Typography color="text.secondary" id="source"><div dangerouslySetInnerHTML={{__html:this.state.source}} /></Typography>
            </CardContent>
            <CardActions>
              <Button onClick={this.poemSwitch.bind(this)} id="new-quote" variant="contained" color="primary">New Poem, plz!</Button>
              <IconButton color="primary"><TwitterIcon/></IconButton>
            </CardActions>
          </Card>
      </main>
    )
  };
}

export default App;
