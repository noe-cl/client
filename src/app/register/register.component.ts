import {Component, Inject} from '@angular/core';
import {ApiService} from '../service/api.service';
import {MdDialogRef, MdSnackBar} from '@angular/material';
import {XivdbService} from '../service/xivdb.service';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

    form: FormGroup;

    constructor(@Inject(FormBuilder) fb: FormBuilder,
                private api: ApiService,
                private dialogRef: MdDialogRef<RegisterComponent>,
                private snack: MdSnackBar,
                private xivdb: XivdbService) {


        this.form = fb.group({
            login: ['', Validators.required],
            lodestone_id: ['', Validators.required, this.validateLodestoneId.bind(this)],
            passwords: fb.group({
                password: ['', Validators.required],
                password_check: ['', Validators.required]
            }, {validator: this.matchPassword})
        });
    }

    validateLodestoneId(control: FormControl) {
        return this.xivdb.getProfile(+control.value)
            .catch(() => {
                return Observable.of(null);
            }).map(result => {
                if (result !== null) {
                    return null;
                } else {
                    return {invalid: true};
                }
            });
    }

    matchPassword(group): any {
        const password = group.controls.password;
        const confirm = group.controls.password_check;

        // Don't kick in until user touches both fields
        if (password.pristine || confirm.pristine) {
            return null;
        }

        // Mark group as touched so we can add invalid class easily
        group.markAsTouched();

        if (password.value === confirm.value) {
            return null;
        }

        return {
            isValid: false
        };
    }

    public register(): void {
        this.api.post('/users', {
            login: this.form.value.login,
            password: this.form.value.passwords.password,
            lodestoneId: this.form.value.lodestone_id
        }).subscribe(() => {
            this.snack.open('Inscription réussie');
            setTimeout(() => {
                this.snack.dismiss();
            }, 2000);
            this.dialogRef.close();
        });
    }
}
