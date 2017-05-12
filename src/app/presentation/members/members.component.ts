import {Component} from '@angular/core';
import {ApiService} from '../../service/api.service';
import {Observable} from 'rxjs';
import {User} from '../../model/user';
import {XivdbService} from '../../service/xivdb.service';
import {Role} from '../../model/role';

@Component({
    selector: 'app-members',
    templateUrl: './members.component.html',
    styleUrls: ['./members.component.scss']
})
export class MembersComponent {

    public members: Observable<User[]>;

    constructor(private api: ApiService, private lodestone: XivdbService) {
        this.members = this.api.get<User[]>('/users').mergeMap(users => {
            const profiles = [];
            users.forEach(user => {
                if (user.id_role < 5) {
                    profiles.push(this.lodestone.getProfile(user.lodestoneId)
                        .map(profile => {
                            const result = user;
                            result.profile = profile;
                            return result;
                        }));
                }
            });
            return Observable.combineLatest(profiles).map(data => {
                return data.sort((a, b) => a.id_role - b.id_role);
            });
        }).share();
    }

    public getRoleName(id: number): string {
        const role = Role.forId(id);
        return role !== null ? role.name : null;
    }
}
