import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';

ReactDOM.render(<App />, document.getElementById('app'));

const Button = () => {
    const [name, setName] = useState('hi');
    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}
