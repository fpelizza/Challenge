import { Injectable } from '@nestjs/common';
import { Note } from './note.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { createNoteDto } from './dto/createNote.dto';
import { updateNoteDto } from './dto/updateNote.dto';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note) private noteRepository: Repository<Note>,
  ) {}

  createNote(note: createNoteDto) {
    const newNote = this.noteRepository.create(note);
    return this.noteRepository.save(newNote);
  }

  getNotes() {
    return this.noteRepository.find();
  }

  getArchivedNotes() {
    return this.noteRepository.find({ where: { archived: true } });
  }

  deleteNote(id: number) {
    return this.noteRepository.delete({ id });
  }

  updateNote(id: number, note: updateNoteDto) {
    return this.noteRepository.update({ id }, note);
  }
}
