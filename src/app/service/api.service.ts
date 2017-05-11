import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs, RequestMethod, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class ApiService {

    private static baseUrl = 'http://api.cerberus-noe.fr';

    constructor(private http: Http, private auth: AuthService) {
    }

    public get<T>(uri: string, params: RequestOptionsArgs = {}): Observable<T> {
        params.method = RequestMethod.Get;
        return this.request<T>(uri, params);
    }

    public post<T>(uri: string, body: any, params: RequestOptionsArgs = {}): Observable<T> {
        params.body = JSON.stringify(body);
        params.method = RequestMethod.Post;
        return this.request<T>(uri, params);
    }

    public put<T>(uri: string, body: any, params: RequestOptionsArgs = {}): Observable<T> {
        params.body = JSON.stringify(body);
        params.method = RequestMethod.Put;
        return this.request<T>(uri, params);
    }

    public delete<T>(uri: string, params: RequestOptionsArgs = {}): Observable<T> {
        params.method = RequestMethod.Delete;
        return this.request<T>(uri, params);
    }

    public request<T>(uri: string, options: RequestOptionsArgs): Observable<T> {
        options.headers = options.headers || new Headers();
        if (this.auth.isIdentified()) {
            options.headers.append('Authorization', 'Bearer ' + this.auth.token);
        }
        options.headers.append('Content-Type', 'application/json');
        return this.http.request(ApiService.baseUrl + uri, options).map(res => res.json() as T);
    }
}
