import {Component} from '@angular/core';
import {LoginComponent} from '../login/login.component';
import {MdDialog} from '@angular/material';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

    constructor(private dialog: MdDialog) {
    }

    public login(): void {
        this.dialog.open(LoginComponent);
    }

}
