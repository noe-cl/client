import {Member} from './member';
export interface Channel {
    position: number;
    id: string;
    name: string;
    members: Member[];
}
