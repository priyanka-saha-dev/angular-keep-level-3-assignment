import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { RouterService } from '../services/router.service';
import { EditNoteViewComponent } from '../edit-note-view/edit-note-view.component';

@Component({
  selector: 'app-edit-note-opener',
  templateUrl: './edit-note-opener.component.html',
  styleUrls: ['./edit-note-opener.component.css']
})
export class EditNoteOpenerComponent {


  constructor(private routerService: RouterService,
    private dialog: MatDialog,
    private activatedRoute: ActivatedRoute) {

      console.log('Inside EditNoteOpenerComponent');
    const noteId = +this.activatedRoute.snapshot.paramMap.get('noteId');
      console.log('noteid:',noteId);
    this.dialog.open(EditNoteViewComponent, {
      data: {
        noteId: noteId
      }

    })
    .afterClosed().subscribe(result => {
      console.log('Dislog is closed');      
      this.routerService.routeBack();
    });
  }

}
