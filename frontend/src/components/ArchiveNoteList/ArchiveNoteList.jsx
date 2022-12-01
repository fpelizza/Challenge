import Note from "../Note/Note";
import "../NoteList/noteList.css";

const ArchiveNoteList = ({ notes, handleArchiveNote }) => {
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
                        />
                    </li>
                ))}
        </div>
    );
};

export default ArchiveNoteList;
