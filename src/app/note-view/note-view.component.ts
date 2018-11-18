import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent implements OnInit {

  notes: Array<Note>;
  errMessage: string;

  constructor(private noteSvc: NotesService) {
    this.errMessage = '';
  }

  ngOnInit() {
    const noteObs = this.noteSvc.getNotes();

    noteObs.subscribe(
      (response) => {
        console.log('All the notes fetched');
        this.notes = response;
      },
      (error) => {
        console.log('Error in Getting All the notes');
        this.errMessage = error.message;
      }
    );
  }
}
