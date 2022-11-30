import React, { useState } from "react";
import "./createNote.css";
import "../../styles/buttons.css";

const CreateNote = ({ notes, handleAddNote, handleClose }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = () => {
        console.log("title" + title + " content " + content);
    };

    return (
        <div>
            <div className="top-note">
                <h1>Create/Edit note</h1>
                <button
                    className="button green"
                    onClick={() => {
                        handleAddNote(title, content);
                        setTitle('');
                        setContent('');
                    }}
                >
                    Save
                </button>
                <button className="button red" onClick={handleClose}>
                    Cancel
                </button>
            </div>
            <form onSubmit={handleSubmit} className="form-container">
                <textarea
                    className="user-input title"
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="title"
                />
                <textarea
                    className="user-input content"
                    type="text"
                    name="content"
                    value={content}
                    placeholder="content"
                    onChange={(e) => setContent(e.target.value)}
                />
            </form>
            <div className="buttons-footer"></div>
        </div>
    );
};

export default CreateNote;
