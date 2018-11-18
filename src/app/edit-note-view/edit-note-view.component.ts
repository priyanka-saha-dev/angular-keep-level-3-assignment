import { Component, Inject, OnInit } from '@angular/core';
import { Note } from '../note';
import { NotesService } from '../services/notes.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-note-view',
  templateUrl: './edit-note-view.component.html',
  styleUrls: ['./edit-note-view.component.css']
})
export class EditNoteViewComponent implements OnInit {
  note: Note;
  states: Array<string> = ['not-started', 'started', 'completed'];
  errMessage: string;

  constructor(private noteService: NotesService,
    private dialogRef: MatDialogRef<EditNoteViewComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit() {
    const noteId = this.data['noteId'];
    console.log('oninit of EditNoteViewComponent for:',noteId);
    this.note = this.noteService.getNoteById(noteId);
    console.log('note is',this.note);
  }

  onSave() {

    const editNoteObs = this.noteService.editNote(this.note);

    editNoteObs.subscribe(
      (response) => {
        console.log('Note Edit saved - closing dialog');
        
        this.dialogRef.close();
      },
      (err) => {
        console.log('Error in Note Edit save');
        if (err.error) {
          this.errMessage = err.error.message;
        } else {
          this.errMessage = err.message;
        }
      }
    );

  }
}
