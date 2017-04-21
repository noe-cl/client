import {Channel} from './channel';
import {Member} from './member';
export interface Guild {
    channels: Channel[];
    instant_invite: string;
    members: Member[];
    name: string;
}
