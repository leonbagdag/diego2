import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Context } from "../store/appContext";

/*armar barra de busqueda cuando existan datos, queda estructura básica para desarrollar*/

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: "" };
    }
    render() {
        return <input onChange={event => this.setState({ term: event.target.value})} />;
    }

    onImputChange(event) {
        console.log(event.target.value);
    }
}

export default SearchBar; 