import { CountryTitleInterface } from './country-title.interface';

export interface CountryInterface extends CountryTitleInterface {
    facts: string[];
    images?: string[];
    flag?: string;
}
