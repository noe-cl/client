import {Component, OnInit} from '@angular/core';
import {MdDialog} from '@angular/material';
import {LodestoneService} from '../service/lodestone/lodestone.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{

    profile: any;

    constructor(private dialog: MdDialog, private lodestone: LodestoneService) {
    }

    public ngOnInit(): void {
        this.lodestone
            .getProfile(2895940)
            .subscribe(profile => this.profile = profile);
    }

}
