import React, {Component}  from 'react';
import './veilleTechnologique.css';




export default class VeilleTechnologique extends Component {
   constructor(props){
       super(props);

       this.state =  {  URLs: [
               {id:1, url: 'https://formations.mayenne.cci.fr/net-ypareo/index.php'},
               {id:2,url: 'https://reacttraining.com/react-router/web/example/basic'},
               {id:3, url: 'https://www.youtube.com/?hl=fr&gl=FR'}
           ]}
   }

    addItem(e) {
        e.preventDefault();
        const count = this.state.URLs.length -1;
        const newItem = this.newItem.value;
        const newId = count +1;

        this.setState({
            URLs: [...this.state.URLs, {id: newId, url: newItem}]
        });
        this.addForm.reset()
    }
    render() {
        const {URLs} = this.state;
        return (
            <div>
                <header>
                    <h1>Veille Technologique</h1>
                    <form className="form-inline" ref={input => this.addForm = input} onSubmit={e =>(this.addItem(e))}>
                        <div className="form-group">
                            <label className="sr-only" htmlFor="newItemInput">Ajouter nouvel élément</label>
                            <input ref={input => this.newItem = input} type="text" placeholder="url" className="form-control" id="newItemInput"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Add</button>
                    </form>
                </header>
                <div className="content">
                    <table className="table table-dark">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Item</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            URLs.map(item => {
                                return (
                                    <tr key={item.url}>
                                        <th scope="row">{item.id}</th>
                                        <td><a href={item.url}>{item.url}</a></td>
                                        <td>Button</td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
};




