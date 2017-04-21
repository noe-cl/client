import {Component, OnInit, Input} from '@angular/core';
import {Http} from '@angular/http';
import {Guild} from './model/guild';
import {Observable} from 'rxjs/observable';

@Component({
    selector: 'app-discord-widget',
    templateUrl: './discord-widget.component.html',
    styleUrls: ['./discord-widget.component.scss']
})
export class DiscordWidgetComponent implements OnInit {

    public guild: Observable<Guild>;

    @Input() serverid: number;

    constructor(private http: Http) {
    }

    ngOnInit() {
        this.guild = this.http.get('https://discordapp.com/api/guilds/' + this.serverid + '/widget.json')
            .map(res => {
                const data = <Guild>res.json();
                // We sort channels.
                data.channels.sort((a, b) => a.position - b.position);
                // Then we remove bots from members, as we don't want them in the connected users.
                data.members = data.members.filter(member => member.bot !== true);

                data.members.forEach(member => {
                    if (member.channel_id !== null) {
                        data.channels
                            .forEach(channel => {
                                if (channel.id === member.channel_id) {
                                    if (channel.members === undefined) {
                                        channel.members = [];
                                    }
                                    channel.members.push(member);
                                }
                            });
                    }
                });
                return data;
            })
            .share();
    }
}
