import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesListComponent } from './components/countries-list/countries-list.component';
import { CountryInfoComponent } from './components/country-info/country-info.component';
import { HttpClientModule } from '@angular/common/http';
import { IvyCarouselModule } from 'angular-responsive-carousel';


@NgModule({
    declarations: [
        AppComponent,
        CountriesListComponent,
        CountryInfoComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        IvyCarouselModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
