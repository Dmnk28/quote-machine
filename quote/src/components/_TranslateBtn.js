import { IconButton } from '@material-ui/core';
import TranslateIcon from '@material-ui/icons/Translate';

const TranslateBtn = ({translateClick}) => {
    
    return(
        <IconButton onClick={translateClick}><TranslateIcon color="primary"/></IconButton>
    );
}

export default TranslateBtn;