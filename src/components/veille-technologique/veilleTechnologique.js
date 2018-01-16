import React, {Component}  from 'react';
import './veilleTechnologique.css';




export default class VeilleTechnologique extends Component {

    render() {
        const UrlObjet = URLs.map((mappedObject) => {
                return (
                    <TableUrl ref="TablezzzzzUrl" key={mappedObject.id} mappedObject={mappedObject}/>
                )
            }
        );

        return (
            <div>
                <h1 className="HeaderSkills">Veille technologique</h1>
                {UrlObjet}
                <Form/>
            </div>
        );
    }
};


class Form extends Component {

    render(){
        return(
            <div>
                <h2>Ajouter un lien</h2>
                <AddUrlForm  addItem={this.add} />
            </div>
        )
    }
}

class AddUrlForm extends Component {

     add(url) {
        URLs.push({id: 4, name: 'article n° 4', url: url});
        console.log(URLs);
    }
     createItem(e) {
         e.preventDefault();

         let item = this.refs.urlName.value;
         if(typeof item === 'string' && item.length > 0){
             this.add(item);
             this.refs.urlForm.reset();

         }
    }
    render(){
         return(
             <form className="form-inline" ref="urlForm" onSubmit={this.createItem.bind(this)}>
                   <div className="form-group">
                    <label>
                        Nom de l'article :
                        <input type="text" id="urlItem" ref="urlName" className="form-control"/>

                    </label>
                 </div>
        <button type="submit" className="btn">Ajouter une URL</button>
        </form>
         )
    }
}


class TableUrl extends Component {
    render() {

        let mappedObject = this.props.mappedObject;

        return(<li className="DescriptionArea" key={`${mappedObject.name}`}>
                {mappedObject.name} :
                <a href={`${mappedObject.url}`}>  {mappedObject.url}</a>
            </li>
        )
    }
}

const URLs = [
    {id: 1, name: 'Article n°1', url: 'https://formations.mayenne.cci.fr/net-ypareo/index.php'},
    {id: 2, name: 'article n°2', url: 'https://reacttraining.com/react-router/web/example/basic'},
    {id: 3, name: 'article n°3', url: 'https://www.youtube.com/?hl=fr&gl=FR'},
];



