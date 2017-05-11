import {Component, EventEmitter, Output} from '@angular/core';
import {ApiService} from '../service/api.service';
import {AuthService} from '../service/auth.service';
import {MdDialogRef, MdSnackBar} from '@angular/material';

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

    constructor(private api: ApiService,
                private dialogRef: MdDialogRef<RegisterComponent>,
                private snack: MdSnackBar) {
    }

    public register(): void {
        if (this.password === this.password_check) {
            this.api.post('/users', {
                login: this.login,
                password: this.password,
                lodestoneId: this.lodestoneId
            }).subscribe(() => {
                this.snack.open('Inscription réussie');
                setTimeout(() => {
                    this.snack.dismiss();
                }, 2000);
                this.dialogRef.close();
            });
        } else {
            this.snack.open('Mots de passe différents');
            setTimeout(() => {
                this.snack.dismiss();
            }, 2000);
        }
    }
}
