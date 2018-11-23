import { AuthenticationService } from "../src/app/services/authentication.service";
import { TestBed } from "@angular/core/testing";
import { HttpClientModule } from "@angular/common/http";

describe('AuthenticationService', () => {
    let authService: AuthenticationService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientModule
            ],
            providers: [
                AuthenticationService
            ]
        });
        authService = TestBed.get(AuthenticationService);
    });

    it('should create', () => {
        authService = TestBed.get(AuthenticationService);
        console.log(authService);
        expect(authService).toBeDefined();
    });

});