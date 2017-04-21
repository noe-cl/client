export interface Member {
    username: string;
    status: string;
    mute: boolean;
    suppress: boolean;
    deaf: boolean;
    channel_id: string;
    nick: string;
    avatar_url: string;
    avatar: string;
    self_deaf: boolean;
    discriminator: string;
    self_mute: string;
    id: string;
    bot: boolean;
}
