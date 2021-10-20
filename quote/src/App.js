import React from 'react';

import './styles/main.css';
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';

import poems from './data/_poems';
import TwitterLink from './components/_TwitterLink';



class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      poetry: poems[this.randomIndex()]
    }
  }
  
  randomIndex () {
    return Math.floor(Math.random()*poems.length);
  }


  poemSwitch () { 
    let randomPoem
    do {
      randomPoem = poems[this.randomIndex()];
    } while (randomPoem.title === this.state.poetry.title);

    this.setState({
        poetry: randomPoem
    }); 
  }
  
  render() {
    return (
      <main className="App">
          <Card id="quote-box">
            <CardContent>          
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Arabische - Persische - Deutsche Zufallsgedichte
              </Typography>
              <Typography id="poemtitle">{this.state.poetry.title}</Typography>
              <Typography id="text"><span dangerouslySetInnerHTML={{__html:this.state.poetry.text}} /></Typography>
              <Typography color="text.secondary" id="author">{this.state.poetry.author}</Typography>
              <Typography color="text.secondary" id="source">{this.state.poetry.source}</Typography>
            </CardContent>
            <CardActions id="card-actions">
              <TwitterLink text={this.state.poetry.text} author={this.state.poetry.author}/>
              <Button onClick={this.poemSwitch.bind(this)} id="new-quote" variant="contained" color="primary">Neues Gedicht</Button>
            </CardActions>
          </Card>
      </main>
    )
  };
}

export default App;
