import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountriesEnum } from '../../models/enum/countries.enum';
import { CountryTitleInterface } from '../../models/interfaces/country-title.interface';
import { CountryInterface } from '../../models/interfaces/country.interface';

@Component({
    selector: 'app-countries-list',
    templateUrl: './countries-list.component.html',
    styleUrls: ['./countries-list.component.scss'],
})
export class CountriesListComponent implements OnInit {
    countriesList: CountryTitleInterface[] = [];
    countriesInfo: CountryInterface[];
    activeCountryInfo: CountryInterface;
    menuOpen: boolean;

    constructor(private httpClient: HttpClient) {
    }

    ngOnInit(): void {
        this.menuOpen = window.innerWidth >= 768;

        this.httpClient.get<{ countries: CountryInterface[] }>('assets/countries.json').subscribe(({ countries }) => {
            this.countriesList = countries.map(({ id, title }) => {
                return {
                    id,
                    title,
                };
            });
            this.countriesInfo = countries;
            this.activeCountryInfo = countries[0];
        });
    }

    changeActiveCountry(id: CountriesEnum): void {
        this.menuOpen = false;
        this.activeCountryInfo = this.countriesInfo.find(country => country.id === id);
    }

    openMenu(): void {
        this.menuOpen = true;
    }

}
