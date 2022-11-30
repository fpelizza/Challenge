import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import "../../styles/app.css";
import NoteList from "../NoteList/NoteList";
import Modal from "react-modal";
import CreateNote from "../CreateNote/CreateNote";
import { Link } from "react-router-dom";

const Home = ({
    notes,
    handleAddNote,
    handleUpdateNote,
    handleDeleteNote,
    handleArchiveNote,
}) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="container">
            <div className="top-bar">
                <h1>My notes</h1>
                <button className="button lightblue" onClick={handleOpen}>
                    Create note
                </button>
                <Modal
                    isOpen={open}
                    onRequestClose={handleClose}
                    ariaHideApp={false}
                >
                    <CreateNote
                        notes={notes}
                        handleAddNote={handleAddNote}
                        handleClose={handleClose}
                    />
                </Modal>
                <Link to="archive">
                    <button className="button yellow">Archived notes</button>
                </Link>
            </div>
            <NoteList
                notes={notes}
                handleUpdateNote={handleUpdateNote}
                handleDeleteNote={handleDeleteNote}
                handleArchiveNote={handleArchiveNote}
            />
        </div>
    );
};

export default Home;
