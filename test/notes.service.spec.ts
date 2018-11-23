
import { TestBed } from "@angular/core/testing";
import { HttpClientModule } from "@angular/common/http";
import { NotesService } from "../src/app/services/notes.service";

describe('AuthenticationService', () => {
    let noteService: NotesService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientModule
            ],
            providers: [
                NotesService
            ]
        });
        noteService = TestBed.get(NotesService);
    });

    it('should create', () => {
        noteService = TestBed.get(NotesService);
        console.log(noteService);
        expect(noteService).toBeDefined();
    });

});