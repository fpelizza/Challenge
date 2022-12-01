import Note from "../Note/Note";
import "./noteList.css";

const NoteList = ({
    notes,
    handleDeleteNote,
    handleArchiveNote,
    handleUpdateNote,
}) => {
    return (
        <div className="note-list">
            {notes
                .filter((note) => note.archived === false)
                .sort((a, b) => a.date > b.date)
                .map((note) => (
                    <li key={note.id}>
                        <Note
                            note={note}
                            handleUpdateNote={handleUpdateNote}
                            handleDeleteNote={handleDeleteNote}
                            handleArchiveNote={handleArchiveNote}
                        />
                    </li>
                ))}
        </div>
    );
};

export default NoteList;
