import React from 'react';

import TwitterIcon from '@material-ui/icons/Twitter'
import { IconButton } from '@material-ui/core';

const TwitterLink = (props) => {
    
    const deleteReg = /^<p>/g
    const spaceReg = /<p>/g
    const verseReg = /<br\/>/g
    const stropheReg = /<\/p>/g
    const htmlFreeTweet = props.text.replace(deleteReg, '').replace(spaceReg, ' ').replace(verseReg , ' ¦ ').replace(stropheReg, ' ¦¦ ');
 
    function addQuerriesToUrl(poem, poet) {
        return (`https://twitter.com/intent/tweet?text=` + poem + '— ' + poet);
    }
    
    const handleClick = (event) => {
        event.preventDefault();
        window.open(addQuerriesToUrl(htmlFreeTweet, props.author), '_blank');
    };
    return(
            <a id="tweet-quote" href="twitter.com/intent/tweet" onClick={handleClick}>
                <IconButton color="primary"><TwitterIcon /></IconButton>
            </a>
        );
    };

export default TwitterLink;