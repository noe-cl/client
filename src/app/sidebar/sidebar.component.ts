import {Component, OnInit} from '@angular/core';
import {XivdbService} from '../service/xivdb.service';
import {AuthService} from '../service/auth.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    public login = true;

    profile: any;

    jobs: any[] = [];

    constructor(private lodestone: XivdbService, private auth: AuthService) {
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
            this.lodestone
                .getProfile(+this.auth.user.lodestoneId)
                .map(p => {
                    for (const job in p.data.classjobs) {
                        if (p.data.classjobs.hasOwnProperty(job)) {
                            this.jobs.push(p.data.classjobs[job]);
                        }
                    }
                    p.url_lodestone = p.url_lodestone.replace('https', 'http');
                    return p;
                })
                .subscribe(profile => this.profile = profile);
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
