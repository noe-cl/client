import {Component} from '@angular/core';
import {MdDialog} from '@angular/material';
import {LoginComponent} from './login/login.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    tabs: {link: string, label: string}[] = [
        {link: '/home', label: 'Accueil'},
        {link: '/presentation', label: 'Présentation CL'},
        {link: '/news', label: 'News'},
        {link: '/forum', label: 'Forum'},
        {link: '/join-us', label: 'Nous rejoindre'},
    ];

    constructor(private dialog: MdDialog) {
    }

    public login(): void {
        this.dialog.open(LoginComponent);
    }

}
