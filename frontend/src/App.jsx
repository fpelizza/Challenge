import React, { useCallback, useEffect, useState } from "react";
import Home from "../src/components/Home/Home";
import ArchivePage from "./components/ArchivePage/ArchivePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
    const [notes, setNotes] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:8080/notes");
            const data = await response.json();
            setNotes(data);
            console.log(data);
        } catch (error) {
            console.log("Error", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const addNote = (title, content) => {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: title,
                content: content,
                archived: false,
            }),
        };
        fetch("http://localhost:8080/notes", requestOptions).then((response) =>
            response.json().then((data) => {
                setNotes([...notes, data]);
            })
        );
    };

    const deleteNote = async (id) => {
        const requestOptions = {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        };
        const response = await fetch(
            `http://localhost:8080/notes/${id}`,
            requestOptions
        )
            .then((response) => response.json())
            .then(fetchData);
    };

    const deleteItem = useCallback((id, event) => {
        event.preventDefault();
        setNotes((currentNotes) =>
            currentNotes.filter((item) => item.id !== id)
        );
        deleteNote(id);
    }, []);

    const updateNote = async (id, value) => {
        const requestOptions = {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id: id,
                content: value,
                date: new Date(),
            }),
        };
        fetch(`http://localhost:8080/notes/${id}`, requestOptions)
            .then((response) => response.json())
            .then(fetchData);
    };

    const archiveNote = async (id, archived) => {
        const requestOptions = {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id: id,
                archived: !archived,
            }),
        };
        fetch(`http://localhost:8080/notes/${id}`, requestOptions)
            .then((response) => response.json())
            .then(fetchData);
    };

    const archiveItem = useCallback((id, archived, event) => {
        event.preventDefault();
        const newState = notes.map((note) => {
            if (note.id === id) {
                return { id: note.id, archived: !note.archived, ...note };
            }
            return note;
        });
        setNotes(newState);
        archiveNote(id, archived);
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            notes={notes}
                            handleAddNote={addNote}
                            handleUpdateNote={updateNote}
                            handleDeleteNote={deleteItem}
                            handleArchiveNote={archiveItem}
                        />
                    }
                />
                <Route
                    path="/archive"
                    element={
                        <ArchivePage
                            notes={notes}
                            handleArchiveNote={archiveItem}
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
