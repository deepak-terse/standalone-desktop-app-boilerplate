import React from "react";

function SQLiteComponent() {

    const createDB = () => {
        console.log("Create DB called");
    }

    const insertData = () => {
        console.log("Insert Data called");
    }

    const fetchData = () => {
        console.log("Fetch Data called");
    }

    return (
        <div>
            <p>Database operations</p>
            <button onClick={() => createDB()}>Create Database</button>
            <button onClick={() => insertData()}>Insert Data</button>
            <button onClick={() => fetchData()}>Fetch Data</button>
        </div>
    );
}

export default SQLiteComponent;
