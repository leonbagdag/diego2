import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Context } from "../store/appContext";

/*armar barra de busqueda cuando existan datos, queda estructura básica para desarrollar*/

const SearchBar = () => {
    const { store, actions } = useContext(Context);
    return <h1>hi there</h1>
};

export default SearchBar;
