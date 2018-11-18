import { Component } from '@angular/core';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isNoteView = true;

  constructor(private routerSvc: RouterService) {
    console.log('Inside HeaderComponent constructor');

  }
  switchToListView() {
    console.log('Inside switchToListView');
    this.isNoteView = false;
    this.routerSvc.routeToListView();
  }

  switchToNoteView() {
    console.log('Inside switchToNoteView');
    this.isNoteView = true;
    this.routerSvc.routeToNoteView();
  }
}
