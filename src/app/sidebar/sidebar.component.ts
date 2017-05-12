import {Component, OnInit} from '@angular/core';
import {XivdbService} from '../service/xivdb.service';
import {AuthService} from '../service/auth.service';
import {MdSnackBar} from '@angular/material';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    public error = false;

    public login = true;

    profile: any;

    jobs: any[] = [];

    constructor(private lodestone: XivdbService, private auth: AuthService, private snack: MdSnackBar) {
    }

    public identified() {
        this.login = false;
        this.getProfile();
    }

    public getDoW(): any[] {
        return this.jobs.filter(job => {
            return [1, 2, 3, 4, 5, 29, 6, 7, 26, 32, 31, 33].indexOf(job.id) > -1;
        });
    }

    public getDoH(): any[] {
        return this.jobs.filter(job => {
            return [8, 9, 10, 11, 12, 13, 14, 15].indexOf(job.id) > -1;
        });
    }

    public getDoL(): any[] {
        return this.jobs.filter(job => {
            return [16, 17, 18].indexOf(job.id) > -1;
        });
    }

    public getProfile(): void {
        if (!this.login) {
            this.error = false;
            this.lodestone
                .getProfile(+this.auth.user.lodestoneId)
                .map(p => {
                    this.jobs = [];
                    for (const job in p.data.classjobs) {
                        if (p.data.classjobs.hasOwnProperty(job)) {
                            this.jobs.push(p.data.classjobs[job]);
                        }
                    }
                    p.url_lodestone = p.url_lodestone.replace('https', 'http');
                    return p;
                })
                .subscribe(profile => this.profile = profile, () => {
                    this.auth.logout();
                    this.login = true;
                    this.snack.open('LodestoneId invalide, tu as été automatiquement déconnecté.');
                });
        }
    }

    public disconnect(): void {
        this.auth.logout();
        this.profile = null;
        this.login = true;
    }

    public ngOnInit(): void {
        this.login = !this.auth.isIdentified();
        this.getProfile();
    }

}
