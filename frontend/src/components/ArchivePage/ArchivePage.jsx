import React from "react";
import ArchiveNoteList from "../ArchiveNoteList/ArchiveNoteList";
import "../NoteList/noteList.css";
import "../../styles/app.css";
import { Link } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";

const ArchivePage = ({ notes, handleArchiveNote }) => {
    var notesToShow = notes.filter((note) => note.archive === true);

    return (
        <div className="container">
            <div className="top-bar">
                <h1>Archived notes</h1>
                <Link to="/">
                    <RiArrowGoBackFill
                        className="icon"
                        color="black"
                        size="1.6em"
                    />
                </Link>
            </div>
            <div>
                <ArchiveNoteList
                    notes={notes}
                    handleArchiveNote={handleArchiveNote}
                />
            </div>
        </div>
    );
};

export default ArchivePage;