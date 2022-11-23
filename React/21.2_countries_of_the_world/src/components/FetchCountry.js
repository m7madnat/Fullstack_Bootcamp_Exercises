import {API} from "../API";
import React from "react";
   

class FetchCountry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            term: ""
        };
    }
    componentDidMount() {
        const getCountries = async () => {
            try {
                const { data } = await API.get("/all");
                this.setState({
                    countries: data.map((country) => {
                        return country.name.common;
                    })
                });
            } catch (err) {
                console.log(err);
            }
        };
        getCountries();
    }
    getFiltered() {
        const filtered = this.state.countries.filter((country) => {
            return country.toLowerCase().includes(this.state.term.toLowerCase());
        });
        return this.getCountriesJS(filtered);
    }
    getCountriesJS(filtered) {
        return (
            <ul>
                {filtered.map((country) => {
                    return <li key={country}>{country}</li>;
                })}
            </ul>
        );
    }
    render() {
        return (
            <div className="App">
                <input
                    type="text"
                    placeholder="Search for a country"
                    onChange={(e) => this.setState({ term: e.target.value })}
                />
                {this.state.term ? this.getFiltered() : this.getCountriesJS(this.state.countries)}
            </div>
        );
    }
}
export default FetchCountry;

