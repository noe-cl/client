import {Component, OnInit} from '@angular/core';
import {XivdbService} from '../service/lodestone/xivdb.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    public login = false;

    profile: any;

    jobs: any[] = [];

    constructor(private lodestone: XivdbService) {
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

    public ngOnInit(): void {
        this.lodestone
            .getProfile(2895940)
            .do(p => {
                for (const job in p.data.classjobs) {
                    if (p.data.classjobs.hasOwnProperty(job)) {
                        this.jobs.push(p.data.classjobs[job]);
                    }
                }
            })
            .subscribe(profile => this.profile = profile);
    }

}
