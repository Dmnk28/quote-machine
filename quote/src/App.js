import React from 'react';

import './styles/main.css';
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';

import poems from './data/_poems';
import TwitterLink from './components/_TwitterLink';
import TranslateBtn from './components/_TranslateBtn';



class App extends React.Component {
  constructor (props) {
    super(props);
    this.randomIndex            =   this.randomIndex.bind(this);
    this.poemSwitch             =   this.poemSwitch.bind(this);
    this.handleTranslateClick   =   this.handleTranslateClick.bind(this);

    this.state = {
      poetry: poems[this.randomIndex()],
      translate: false
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

    this.setState({poetry: randomPoem,}); 
  }

  handleTranslateClick = () => {      
    this.setState({translate: !this.state.translate});
  }
  
  render() {
    return (
      <main className="App">
          <Card id="quote-box">
            <CardContent>          
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Arabische, Persische und Deutsche Zufallsgedichte
              </Typography>
              <Typography id="poemtitle">{this.state.poetry.title}</Typography>
              <Typography id="text"><span dangerouslySetInnerHTML={(this.state.translate && this.state.poetry.trans) ? {__html:this.state.poetry.trans} :{__html:this.state.poetry.text}} /></Typography>
              <Typography color="text.secondary" id="author">{this.state.poetry.author}</Typography>
              <Typography color="text.secondary" id="source">{this.state.poetry.source}</Typography>
            </CardContent>
            <CardActions id="card-actions">
              <TwitterLink text={this.state.poetry.text} author={this.state.poetry.author}/>
              <TranslateBtn translate={this.state.translate} translateClick={this.handleTranslateClick}></TranslateBtn>
              <Button onClick={this.poemSwitch} id="new-quote" variant="contained" color="primary">Neues Gedicht</Button>
            </CardActions>
          </Card>
      </main>
    )
  };
}

export default App;
