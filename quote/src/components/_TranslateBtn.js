import { IconButton } from '@material-ui/core';
import TranslateIcon from '@material-ui/icons/Translate';

const TranslateBtn = ({poetry, translateClick}) => {
    if (poetry.textde && poetry.textor) {
        return(
            <IconButton onClick={translateClick}><TranslateIcon color="primary"/></IconButton>
        );    
    } else {
        return null;
    }
}

export default TranslateBtn;