import React from "react";
import sqlite3 from "sqlite3";

function SQLiteComponent() {

    const sqlite3 = require('sqlite3').verbose();
    const db = new sqlite3.Database('./db/sample.db');

    const createDB = () => {
        console.log("Create DB called");
        db.serialize(function() {
            db.run("CREATE TABLE word (label TEXT)");
            console.log('Table created');
        });
    }

    const insertData = () => {
        console.log("Insert Data called");
        db.serialize(function() {
            var stmt = db.prepare("INSERT INTO word VALUES (?)");
            for (var i = 0; i < 10; i++) {
                stmt.run("label " + i);
            }
            stmt.finalize();
            console.log('Data inserted');
        });
    }

    const fetchData = () => {
        console.log("Fetch Data called");
        db.serialize(function() {
            db.each("SELECT rowid AS id, label FROM word", function(err, row) {
                console.log('err : ', err);
                console.log('row : ', row);

                console.log(row.id + ": " + row.label);
            });
        });
    }

    const closeDB = () => {
        console.log("Close DB called");
        db.close();
    }

    return (
        <div>
            <p>Database operations</p>
            <button onClick={() => createDB()}>Create Database</button>
            <button onClick={() => insertData()}>Insert Data</button>
            <button onClick={() => fetchData()}>Fetch Data</button>
            <button onClick={() => closeDB()}>Close Database</button>
        </div>
    );
}

export default SQLiteComponent;
