import {Component, EventEmitter} from '@angular/core';
import {ApiService} from '../service/api.service';
import {AuthService} from '../service/auth.service';
import {MdSnackBar, MdDialog} from '@angular/material';
import {RegisterComponent} from '../register/register.component';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    public login: string;

    public password: string;

    public loggedIn: EventEmitter<void> = new EventEmitter<void>();

    constructor(private api: ApiService, private authService: AuthService,
                private snack: MdSnackBar, public dialog: MdDialog) {
    }

    auth(): void {
        this.api.post<{token: string}>('/auth', {login: this.login, password: this.password}).subscribe(res => {
            this.authService.token = res.token;
            this.loggedIn.emit();
        }, () => {
            this.snack.open('Mauvais identifiant ou mot de passe.');
        });
    }

    public register(): void {
        this.dialog.open(RegisterComponent);
    }
}
