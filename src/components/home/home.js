import React, { Component } from 'react';
import Download from '../home/../../../node_modules/@axetroy/react-download';

import CV from '../home/../../resources/images/CV_PierreDeffay.png';
import'./home.css';

export default class Home extends Component {
    render() {
        return (
            <div>
                <img className="Cv" src={CV} alt="cv"/>
                <Download file="test.md" content="hello wolrd!"  >
                    <button type="button">Télécharger le CV</button>
                </Download>
            </div>
        );
    }
}
