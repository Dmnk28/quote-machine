import React from 'react';

import './styles/main.css';
import { Button, Card, CardActions, CardContent, IconButton, Typography } from '@material-ui/core';

import poems from './data/_poems';
import TwitterLink from './components/_TwitterLink';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = poems[this.randomIndex()];
  }

  randomIndex () {
    return Math.floor(Math.random()*poems.length);
  }


  poemSwitch () { 
    let randomPoem
    do {
      randomPoem = poems[this.randomIndex()];
    } while (randomPoem.title === this.state.title);

    this.setState(state => {
      return randomPoem;
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
              <Typography id="text"><span dangerouslySetInnerHTML={{__html:this.state.text}} /></Typography>
              <Typography color="text.secondary" id="author">{this.state.author}</Typography>
              <Typography color="text.secondary" id="source">{this.state.source}</Typography>
            </CardContent>
            <CardActions>
              <Button onClick={this.poemSwitch.bind(this)} id="new-quote" variant="contained" color="primary">New Poem, plz!</Button>
              <IconButton color="primary"><TwitterLink text={this.state.text} author={this.state.author}/></IconButton>
            </CardActions>
          </Card>
      </main>
    )
  };
}

export default App;
