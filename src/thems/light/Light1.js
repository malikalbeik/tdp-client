import React from 'react';
import menu1 from '../../images/menu-1.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'


// Light Theme 1
const Light1 = {
    id: 1,
    style: 'light',
    colors: {
        background: '#FFFEFB',
        inner_background: '#F6F6F6',
        scroll: 'white',
        primary: '#003847',
        inner_primary: '#212121',
        selected: '#B30000',
        highlighted: '#FF0505'
    },
    icons: {
        menu: menu1
    },
    social_icons: {
        twitter: <FontAwesomeIcon icon={faTwitter}/>,
        instagram: <FontAwesomeIcon icon={faInstagram}/>,
        linkedin: <FontAwesomeIcon icon={faLinkedin}/>,
        youtube: <FontAwesomeIcon icon={faYoutube} />
    },
    fonts: {
        title: 'Merriweather',
        body: 'Open Sans',
        mono: 'Inconsolata, monospace'
    }
};

export default Light1;
