import React from 'react';

import Header from './components/header'
import Main from './components/main'



const user = {
    firstName: 'Pierre',
    lastName: 'Deffay'
};

function formatName(user) {
    return `${user.firstName} ${user.lastName}`;
}

const App = () => (
        <div>
            <Header name={` Portfolio ${formatName(user)}`} />
                <hr/>
                    <div className="containerMain">
                        <Main />
                    </div>
        </div>
);
export default App