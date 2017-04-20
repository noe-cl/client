import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-status',
    templateUrl: './status.component.html',
    styleUrls: ['./status.component.css']
})
export class StatusComponent {

    @Input() public name: string;
    @Input() public value: string;
    @Input() public max: string;

    constructor() {
    }
}
