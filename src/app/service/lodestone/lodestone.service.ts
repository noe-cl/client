import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';

@Injectable()
export class LodestoneService {

    constructor(private http: Http) {
    }

    /**
     * GetProfile returns an observable<any> because the model interface is too long to create.
     * @param lodestoneId
     */
    public getProfile(lodestoneId: number): Observable<any> {
        return this.http
            .get('https://api.xivdb.com/character/' + lodestoneId)
            .share()
            .map(res => res.json());
    }
}
