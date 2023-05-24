import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CountryInterface } from '../../models/interfaces/country.interface';

@Component({
    selector: 'app-country-info',
    templateUrl: './country-info.component.html',
    styleUrls: ['./country-info.component.scss'],
})
export class CountryInfoComponent implements OnChanges, OnInit {
    @Input() country: CountryInterface;
    images: { path: string }[] = [];
    cellsToShow: number = 2;

    constructor() {
    }

    ngOnChanges(): void {
        if (!this.country) {
            return;
        }
        this.images = this.country.images.map(image => ({ path: image }));
    }

    ngOnInit(): void {
        this.cellsToShow = window.innerWidth <= 768 ? 1 : 2;
    }

}
