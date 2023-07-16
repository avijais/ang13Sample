import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Component({
    selector: 'app-mat-main-layout',
    templateUrl: './mat-main-layout.component.html',
    styleUrls: ['./mat-main-layout.component.scss']
})
export class MatMainLayoutComponent implements OnInit {

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
    }

    hideRequiredControl = new FormControl(false);
    options = this.fb.group({
        hideRequired: this.hideRequiredControl,
    });


    selectFile(event: any) {
        console.log("event : ", event.target.files);
    }
}
