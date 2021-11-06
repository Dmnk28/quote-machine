import React from 'react';

import './styles/main.css';
import { Button, Card, CardActions, CardContent, Typography, ThemeProvider} from '@material-ui/core';

import poems from './data/_poems';
import TwitterLink from './components/_TwitterLink';
import TranslateBtn from './components/_TranslateBtn';
import ProjectBar from './components/ProjectBar/ProjectBar';
import theme from './components/PoemTheme';


class App extends React.Component {
  constructor (props) {
    super(props);
    this.randomIndex            =   this.randomIndex.bind(this);
    this.poemSwitch             =   this.poemSwitch.bind(this);
    this.handleTranslateClick   =   this.handleTranslateClick.bind(this);

    this.state = {
      poetry: poems[this.randomIndex()],
      translated: false,
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
    if (this.state.poetry.textor && this.state.poetry.textde) this.setState({translated: !this.state.translated});
  }
  
  render() {
    return (
      <ThemeProvider theme={theme}>
      <ProjectBar 
          title       =   'Build a Random Quote Machine'
          institute   =   'FreeCodeCamp'
          instURL     =   'https://www.freecodecamp.org/'
          course      =   'Front End Development Libraries Certification'
          courseURL   =   'https://www.freecodecamp.org/learn/front-end-development-libraries/'
          userStory   =   'https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-random-quote-machine'
          repository  =   'https://github.com/Dmnk28/quote-machine'
          readme      =   'https://github.com/Dmnk28/quote-machine/blob/main/README.md'
          next        =   'https://do-webdev.de/projects/markdown'
          previous    =   ''
      />
      <main className="App">
          <Card id="quote-box">
            <CardContent>          
              <Typography sx={{ fontSize: 14 }} color="textSecondary" gutterBottom>
                Arabische, Persische und Deutsche Zufallsgedichte
              </Typography>
              <Typography id="poemtitle">{this.state.poetry.title}</Typography>
              <Typography id="text"><span dangerouslySetInnerHTML={(this.state.translated||!this.state.poetry.textor) ? {__html:this.state.poetry.textde} : {__html:this.state.poetry.textor}} /></Typography>
              <Typography color="textSecondary" id="author">{this.state.poetry.author}</Typography>
              <Typography color="textSecondary" id="source">{this.state.poetry.source}</Typography>
            </CardContent>
            <CardActions id="card-actions">
              <div>
                {(this.state.poetry.textor) ? <TranslateBtn translateClick={this.handleTranslateClick}></TranslateBtn>:''}
                <TwitterLink poetry={this.state.poetry} translated={this.state.translated}/>
              </div>
              <Button onClick={this.poemSwitch} id="new-quote" variant="contained" color="primary">Neues Gedicht</Button>
            </CardActions>
          </Card>
      </main>
      </ThemeProvider>
    )
  };
}

export default App;
