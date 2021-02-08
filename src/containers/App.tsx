import React from 'react'
import SQLiteComponent from '../components/SQLiteComponent';

function App() {
    return (
        <div className="App">
        <header className="App-header">
            <img src="./assets/logo.svg" className="App-logo" alt="logo" />
            <h2>Standalone Desktop App Boilerplate</h2>
            <SQLiteComponent />
        </header>
        </div>
    );
}

export default App;
