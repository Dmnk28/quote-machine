import React from 'react';

import TwitterIcon from '@material-ui/icons/Twitter'
import { IconButton } from '@material-ui/core';

const TwitterLink = ({poetry, translated}) => {
    // Getting rid from HTML in German Translations/Poems
    const deleteReg_De = /^<p>/g
    const spaceReg_De = /<p>/g
    const verseReg_De = /<br\/>/g
    const stropheReg_De = /<\/p>/g
    
    // Getting rid from HTML in Arab and Persian Poems
    const deleteReg_Or = /^<div class="qasida"><div class="sadr">/g
    const spaceReg_Or = /<\/div>/g
    const verseReg_Or = /<div class="ajuz">/g
    const stropheReg_Or = /<div class="sadr">/g
     
    function addQuerriesToUrl(poem, poet) {
        return (`https://twitter.com/intent/tweet?text=` + poem + '— ' + poet);
    }
    
    const handleClick = (event) => {
        event.preventDefault();

        // htmlFree-Constants are inside if-statement to avoid unnecessary computing and bypass potential errors [case: poetry.textor doesn't exist and htmlFreeTweet_Or declared]
        if(translated||!poetry.textor) {
            const htmlFreeTweet_De = poetry.textde.replace(deleteReg_De, '').replace(spaceReg_De, ' ').replace(verseReg_De , ' ¦ ').replace(stropheReg_De, ' ¦¦ ');
            window.open(addQuerriesToUrl(htmlFreeTweet_De, poetry.author), '_blank');
        } else {
            const htmlFreeTweet_Or = poetry.textor.replace(deleteReg_Or, '').replace(spaceReg_Or, ' ').replace(verseReg_Or , ' ¦ ').replace(stropheReg_Or, ' ¦¦ ');
            window.open(addQuerriesToUrl(htmlFreeTweet_Or, poetry.author), '_blank');
        }
    };

    return(
            <a id="tweet-quote" href="twitter.com/intent/tweet" onClick={handleClick}>{/* The a-tag is purely for fullfilling the FreeCodeCamp-Userstory (Quote-Machine)*/} 
                <IconButton color="primary"><TwitterIcon /></IconButton>
            </a>
        );
    };

export default TwitterLink;