import React, { useState } from "react";
import "./createNote.css";
import "../../styles/buttons.css";

const CreateNote = ({ handleAddNote, handleClose }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    return (
        <div>
            <div className="top-note">
                <h1>Create note</h1>
                <button
                    className="button green"
                    onClick={() => {
                        handleAddNote(title, content);
                        setTitle("");
                        setContent("");
                    }}
                >
                    Save
                </button>
                <button className="button red" onClick={handleClose}>
                    Cancel
                </button>
            </div>
            <form className="form-container">
                <textarea
                    className="user-input title"
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title of the note..."
                />
                <textarea
                    className="user-input content"
                    type="text"
                    name="content"
                    value={content}
                    placeholder="Content of the note..."
                    onChange={(e) => setContent(e.target.value)}
                />
            </form>
            <div className="buttons-footer"></div>
        </div>
    );
};

export default CreateNote;
