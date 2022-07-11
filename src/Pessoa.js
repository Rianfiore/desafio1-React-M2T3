import food from "./image/food.webp";
import React, { Component } from "react";

export class Pessoa extends Component {
  state = {
    nome: "Rian",
    idade: 22,
    comida_favorita: "Churrasco",
    musicas: [
      {
        nome: "Carry On",
        banda: "Angra",
      },
      {
        nome: "Tenho Medo",
        banda: "Zé Vaqueiro",
      },
      {
        nome: "I See Fire",
        banda: "Feuerschwanz",
      },
    ],
  };

  render() {
    return (
      <>
        <h1>{`Meu nome é ${this.state.nome}`}</h1>
        <h2>{`Eu tenho ${this.state.idade} anos de idade`}</h2>
        <h3>{`Minha comida favorita é ${this.state.comida_favorita}`}</h3>
        <img src={food} alt="Comida favorita" />
        <ul>
          {this.state.musicas.map((musica, index) => {
            return (
              <li key={index}>
                Musica {index + 1}
                <ul>{`Nome da música: ${musica.nome}`}</ul>
                <ul>{`Nome da banda: ${musica.banda}`}</ul>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
