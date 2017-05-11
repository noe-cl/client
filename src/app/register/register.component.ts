import { Component, OnInit } from '@angular/core';
import { ApiService } from "../service/api.service";
import { AuthService } from "../service/auth.service";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

    public login: string;

    public password: string;

    public password_check: string;

    public lodestoneId: number;

    constructor(private api: ApiService, private auth: AuthService) {
    }

    public register(): void {
        this.api.post('/users', {
            login: this.login,
            password: this.password,
            lodestoneId: this.lodestoneId
        })
    }
}
