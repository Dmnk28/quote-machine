import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter'

const TwitterLink = (text, author) => {
    const querriesToUrl = (text, author) => {
        return (`https://twitter.com/intent/tweet?text=` + text + author);
    }
    
    const handleClick = (event) => {
        event.preventDefault();
        window.open(querriesToUrl(text, author), '_blank');
        alert('twitter clicked');
    };
    return(
            <a href='#' onClick={handleClick}>
                <TwitterIcon />
            </a>
        );
    };

export default TwitterLink;