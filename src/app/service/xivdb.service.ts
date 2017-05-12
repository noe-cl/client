import {Injectable} from '@angular/core';
import {Http, RequestOptionsArgs} from '@angular/http';
import {Observable} from 'rxjs';

@Injectable()
export class XivdbService {

    private cache: {uri: string, data: any}[] = [];

    constructor(private http: Http) {
    }

    /**
     * GetProfile returns an observable<any> because the model interface is too long to create.
     * @param lodestoneId
     */
    public getProfile(lodestoneId: number): Observable<any> {
        return this
            .getFr('https://api.xivdb.com/character/' + lodestoneId)
            .map(res => res.json());
    }

    /**
     * Gets an fr version of the response.
     * @param uri
     * @returns {Observable<any>}
     */
    private getFr(uri: string): Observable<any> {
        const options: RequestOptionsArgs = {
            search: {'language': 'fr'}
        };
        return this.cachedRequest(uri, options);
    }

    private cachedRequest(uri: string, options: RequestOptionsArgs): Observable<any> {
        const cached = this.getCache(uri);
        if (cached !== null) {
            return Observable.of(cached);
        } else {
            return this.http.get(uri, options)
                .catch(() => {
                    this.http.get('https://xivsync.com/character/add/' + uri.split('/')[uri.length - 1]);
                    return Observable.of(null);
                })
                .do(data => this.cache.push({uri: uri, data: data}));
        }
    }

    private getCache(uri: string): any {
        for (const row of this.cache) {
            if (row.uri === uri) {
                return row.data;
            }
        }
        return null;
    }
}
