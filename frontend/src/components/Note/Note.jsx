import React, { useState } from "react";
import Modal from "react-modal";
import { RiDeleteBin5Fill, RiArchiveFill } from "react-icons/ri";
import "./note.css";
import "../../styles/app.css";
import "../../styles/buttons.css";
import NoteExpanded from "../NoteExpanded/NoteExpanded";
import formatDate from "@bitty/format-date";
import "react-confirm-alert/src/react-confirm-alert.css";

const Note = ({
    note,
    handleDeleteNote,
    handleArchiveNote,
    handleUpdateNote,
}) => {
    const date = formatDate(new Date(note.date), "DD/MM/YYYY HH:mm");

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="note" onClickCapture={(e) => handleOpen(e)}>
            <div>
                <span> {note.title} </span>
            </div>
            <div className="note-footer">
                <small>Last edited: {date}</small>
                {!note.archived && (
                    <RiDeleteBin5Fill
                        size="1.4em"
                        color="#e58c8a"
                        onClick={(e) => handleDeleteNote(note.id, e)}
                    />
                )}
                <RiArchiveFill
                    size="1.4em"
                    onClick={(e) =>
                        handleArchiveNote(note.id, note.archived, e)
                    }
                />
            </div>
            <Modal
                className="note modal-content"
                isOpen={open}
                onRequestClose={handleClose}
                ariaHideApp={false}
            >
                <NoteExpanded
                    note={note}
                    date={date}
                    handleUpdateNote={handleUpdateNote}
                />
            </Modal>
        </div>
    );
};

export default Note;
