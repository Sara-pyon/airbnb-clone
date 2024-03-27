import countryCodes from 'country-codes-list'

const myCountryCodesObject = countryCodes.customList(undefined, '{countryNameEn}: (+{countryCallingCode})');

interface Country {
    code: string;
    title: string;
}

let countries: Country[] = [];

Object.keys(myCountryCodesObject).forEach(key => {
    countries.push({ code: key.toLowerCase(), title: ''});
});
Object.values(myCountryCodesObject).forEach((value,index) => {
    countries[index].title = value;
});

export default countries;
