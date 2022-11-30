import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { createNoteDto } from './dto/createNote.dto';
import { updateNoteDto } from './dto/updateNote.dto';
import { Note } from './note.entity';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private noteService: NotesService) {}

  @Get()
  getNotes(): Promise<Note[]> {
    return this.noteService.getNotes();
  }

  @Get('/archived')
  getArchivedNotes(): Promise<Note[]> {
    return this.noteService.getArchivedNotes();
  }

  @Post()
  createNote(@Body() newNote: createNoteDto): Promise<Note> {
    return this.noteService.createNote(newNote);
  }

  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.noteService.deleteNote(id);
  }

  @Patch(':id')
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() note: updateNoteDto,
  ) {
    return this.noteService.updateNote(id, note);
  }
}
