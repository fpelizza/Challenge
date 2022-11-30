import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

import "./noteExpanded.css";
import "../../styles/buttons.css";

const NoteExpanded = ({ note, date, handleUpdateNote }) => {
    const [value, setValue] = useState(note.content);

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = () => {
        handleUpdateNote(note.id, value);
    };

    return (
        <div>
            <div className="head-note">
                <h1>{note.title}</h1>
                <input
                    type="submit"
                    value="Save"
                    onClick={handleSubmit}
                    className="button green"
                />
            </div>
            <TextareaAutosize value={value} onChange={handleChange} />
            <footer>{date}</footer>
        </div>
    );
};

export default NoteExpanded;
