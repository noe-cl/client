import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-job-icon',
    templateUrl: './job-icon.component.html',
    styleUrls: ['./job-icon.component.scss']
})
export class JobIconComponent {

    @Input() icon: string;

    @Input() level: number;

}
