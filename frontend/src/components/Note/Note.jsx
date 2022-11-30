import React, { useState } from "react";
import Modal from "react-modal";
import { RiDeleteBin5Fill, RiEdit2Fill, RiArchiveFill } from "react-icons/ri";
import "./note.css";
import "../../styles/app.css";
import "../../styles/buttons.css";
import NoteExpanded from "../NoteExpanded/NoteExpanded";
import CreateTemplate from "../CreateNote/CreateTemplate";
import formatDate from "@bitty/format-date";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const Note = ({
    note,
    handleDeleteNote,
    handleArchiveNote,
    handleUpdateNote,
}) => {
    const date = formatDate(new Date(note.date), "DD/MM/YYYY HH:mm");

    const [open, setOpen] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const deleteItem = () => {
        confirmAlert({
            title: "Delete: " + note.title,
            message: "Are you sure to do this.",
            buttons: [
                {
                    label: "Yes",
                    onClick: () => handleDeleteNote(note.id),
                },
                {
                    label: "No",
                },
            ],
        });
    };

    return (
        <div className="note">
            <div onClickCapture={handleOpen}>
                <span> {note.title} </span>
            </div>

            <div className="note-footer">
                <small>Last edited: {date}</small>
                {!note.archived && (
                    <RiDeleteBin5Fill
                        size="1.4em"
                        color="#e58c8a"
                        onClick={deleteItem}
                    />
                )}
                <RiArchiveFill
                    size="1.4em"
                    onClick={() => handleArchiveNote(note.id, note.archived)}
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
