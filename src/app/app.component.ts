import {Component} from '@angular/core';
import {AuthService} from './service/auth.service';

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
        {link: '/websites', label: 'Sites utiles'},
        {link: '/join-us', label: 'Nous rejoindre'},
    ];

    constructor(public auth: AuthService) {
    }
}
