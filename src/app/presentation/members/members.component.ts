import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../service/api.service';
import {Observable} from 'rxjs';
import {User} from '../../model/user';
import {XivdbService} from '../../service/xivdb.service';

@Component({
    selector: 'app-members',
    templateUrl: './members.component.html',
    styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

    public members: Observable<any[]>;

    constructor(private api: ApiService, private lodestone: XivdbService) {
    }

    ngOnInit() {
        this.members = this.api.get<User[]>('/users').mergeMap(users => {
            const profiles = [];
            users.forEach(user => {
                profiles.push(this.lodestone.getProfile(user.lodestoneId));
            });
            return Observable.combineLatest(profiles);
        });
    }

}
