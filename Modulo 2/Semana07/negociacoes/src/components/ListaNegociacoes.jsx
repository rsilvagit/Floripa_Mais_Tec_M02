import React from "react";
import propTypes from 'prop-types';
import { Negociacao } from "../models/negociacoes";

function listaNegociacoes({ negociacoes }) {
    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Data</th>
                    <th>Quantidade</th>
                    <th>Valor</th>
                </tr>
            </thead>
            <tbody>
                {
                    negociacoes.map(n => {
                        <tr>
                            <td>{n.data}</td>
                            <td>{n.quantidade}</td>
                            <td>{n.valor}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    )
}
listaNegociacoes.PropTypes = {
    negociacoes: propTypes.arrayOf(propTypes.objectOf(Negociacao))
};

export default listaNegociacoes;