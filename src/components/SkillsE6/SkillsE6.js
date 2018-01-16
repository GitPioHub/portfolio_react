import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';

import './SkillsE6.css';
import 'font-awesome/css/font-awesome.min.css';


const Skills = [
    {
        id: 1,
        name: 'Participation à un projet',
        description: 'Participation à un projet',
        optionnel: false
    },
    {
        id: 2,
        name: 'Proposition d\'une solution applicative',
        description: 'Proposition d\'une solution applicative,Proposition d\'une solution applicativeProposition d\'une solution applicativeProposition d\'une solution applicativeProposition d\'une solution',
        optionnel: true
    },
    {
        id: 3,
        name: 'Prototypage de composants logiciels',
        description: 'Prototypage de composants logiciels',
        optionnel: true
    },
];


export default class SkillsE6 extends Component {

    render() {
        let {match} = this.props;

        return (
            <div>
                <h1 className="HeaderSkills">Compétences</h1>
                <ul className="MenuSkills">
                    <li>
                        <Link to={`${match.url}/Principales`}>
                            Compétences principales
                        </Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/Optionnelles`}>
                            Compétences optionnelles
                        </Link>
                    </li>
                </ul>
                <Route path={`${match.url}/:SkillId`} component={Skill}/>
                <Route exact path={match.url} render={() => (
                    <h3>Veuillez selectionner une catégorie</h3>
                )}/>
            </div>
        );
    }
}


class ListSkills extends Component {
    constructor(props, context) {
        super(props, context);


        this.state = {
            visible: false
        };

        this.onClick = this.onClick.bind(this);
    }


    onClick() {
        this.setState({
            visible: !this.state.visible
        })
    }

    render() {

        let visibleComponent = null;
        let mappedObject = this.props.mappedObject;


        if (this.state.visible) {
            visibleComponent = (
                <div className="grow">{mappedObject.description}</div>
            )
        }
        else {
        }
        ;

        return (<li className="DescriptionArea" key={`${mappedObject.name}`}>
                {mappedObject.name}
                <i className="fa fa-plus" aria-hidden="false" onClick={this.onClick}></i>
                {visibleComponent}
            </li>
        )
    }
};


const Skill = ({match}) => {

    const ItemSkill = Skills.map((mappedObject) => {
            if (match.params.SkillId === 'Principales') {
                if (mappedObject.optionnel === false) {
                    return (
                        <ListSkills key={mappedObject.id} mappedObject={mappedObject}/>
                    )
                }
            }
            if (match.params.SkillId === 'Optionnelles') {
                if (mappedObject.optionnel === true) {
                    return (
                        <ListSkills key={mappedObject.id} mappedObject={mappedObject}/>
                    )
                }
            }
            return null;
        }

    );

    return (
        <div>
            <h3>{match.params.SkillId}</h3>
            {ItemSkill}
        </div>
    )
};