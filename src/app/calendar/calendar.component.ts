import {Component, ChangeDetectionStrategy} from '@angular/core';
import {Subject} from 'rxjs';
import {CalendarEvent} from 'angular-calendar';


const colors: any = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarComponent {

    view = 'month';

    viewDate: Date = new Date();

    events: CalendarEvent[] = [{
        title: 'Draggable event',
        color: colors.yellow,
        start: new Date(),
        draggable: true
    }, {
        title: 'A non draggable event',
        color: colors.red,
        start: new Date()
    }];

    refresh: Subject<any> = new Subject();
}
