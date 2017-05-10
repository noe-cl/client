import {Injectable} from '@angular/core';
import * as jwt_decode from 'jwt-decode';

@Injectable()
export class AuthService {

    private _token: string;

    private _user: AuthToken;

    constructor() {
        this._token = localStorage.getItem('noe.jwt');
    }

    public isIdentified(): boolean {
        return this._token === null;
    }

    public get user(): AuthToken {
        return this._user;
    }

    public get token(): string {
        return this._token;
    }

    public set token(token: string) {
        localStorage.setItem('noe.jwt', token);
        this._user = jwt_decode(token);
        this._token = token;
    }

    public logout(): void {
        localStorage.removeItem('noe.jwt');
        this._token = null;
    }
}

export interface AuthToken {
    nickname: string;
    lodestoneId: string;
    role: number;
}
