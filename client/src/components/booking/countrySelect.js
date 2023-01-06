import { useState, useEffect, useMemo } from "react";
import countryList from "react-select-country-list";

const CountrySelection = (props) => {
    const excludeCountries = [
        "Western Sahara",
        "United States Minor Outlying Islands",
        "Svalbard and Jan Mayen",
        "South Georgia and the South Sandwich Islands",
        "Sint Maarten (Dutch part)",
        "Pitcairn",
        "Montserrat",
        "Montenegro",
        "Micronesia, Federated States of",
        "Moldova, Republic of",
        "Mayotte",
        "Mauritius",
        "Mauritania",
        "Martinique",
        "Isle of Man",
        "Åland Islands",
        "Bonaire, Sint Eustatius and Saba",
        "Bosnia and Herzegovina",
        "British Indian Ocean Territory",
        "Antarctica",
        "Bouvet Island",
        "Christmas Island",
        "Cocos (Keeling) Islands",
        "French Southern Territories",
        "French Polynesia",
        "Guernsey",
        "Heard Island and McDonald Islands",
        "Jersey",
      ];

  const countries = useMemo(
    () =>
      countryList()
        .getData()
        .map((r) => r.label)
        .filter((x) => !excludeCountries.includes(x)),
    []
  );

  const countryCodes = useMemo(
    () =>
      countryList()
        .getData()
        .map((r) => [r.label, r.value]),
    []
  );

  useEffect(() => {
    handleChange({ target: { value: props.value } });
  }, [props.value]);

  const handleChange = (event) => {
    let code = countryCodes.filter((r) => r[0] == event.target.value)[0][1];
    props.setForm({ ...props.form, country: event.target.value, countryCode: code });
  };

  return (
    <>
    {props.value}
    <select
      className="form-select"
      id="selected-country"
      value={props.value}
      onChange={handleChange}
      disabled={props.disabled}
    >
      {countries.map((country) => (
        <option key={country} value={country}>
          {country}
        </option>
      ))}
    </select>
    </>
  );
};

export default CountrySelection;
