import Note from "../Note/Note";
import "../NoteList/noteList.css";

const ArchiveNoteList = ({ notes, handleArchiveNote, handleUpdateNote }) => {
    return (
        <div className="note-list">
            {notes
                .filter((note) => note.archived === true)
                .map((note) => (
                    <li key={note.id}>
                        <Note
                            note={note}
                            archived={note.archived}
                            handleArchiveNote={handleArchiveNote}
                            handleUpdateNote={handleUpdateNote}
                        />
                    </li>
                ))}
        </div>
    );
};

export default ArchiveNoteList;
