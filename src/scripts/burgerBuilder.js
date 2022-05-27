"use strict";

const pedido = [];

const burger = {
  Base: [
    {
      option: 1,
      name: "Carne",
      price: 200,
    },
    {
      option: 2,
      name: "Pollo",
      price: 150,
    },
    {
      option: 3,
      name: "Veggie",
      price: 100,
    },
  ],
  Pan: [
    {
      option: 1,
      name: "blanco",
      price: 50,
    },
    {
      option: 2,
      name: "negro",
      price: 60,
    },
    {
      option: 3,
      name: "sin gluten",
      price: 75,
    },
  ],
  Adicional: [
    {
      option: 1,
      name: "Queso",
      price: 20,
    },
    {
      option: 2,
      name: "cebolla",
      price: 15,
    },
    {
      option: 3,
      name: "mayonesa",
      price: 5,
    },
    {
      option: 4,
      name: "Lechuga",
      price: 10,
    },
    {
      option: 5,
      name: "Mostaza",
      price: 5,
    },
    {
      option: 6,
      name: "Tomate",
      price: 20,
    },
  ],
};

const AddBase = () => {
  const seleccionBase = parseInt(
    prompt(
      `Selecciona la base de tu burger: \n ${burger.Base.map(
        (base) => `${base.option}: ${base.name} \n`
      )}`
    )
  );

  return pedido.push(burger.Base[seleccionBase]);
};

const AddPan = () => {
  const seleccionPan = parseInt(
    prompt(
      `Selecciona el Pan de tu burger: \n ${burger.Pan.map(
        (pan) => `${pan.option}: ${pan.name} \n`
      )}`
    )
  );

  return pedido.push(burger.Pan[seleccionPan]);
};

const addAdicional = () => {
  const adicionales = [];
  let seleccionAdicional;
  while (seleccionAdicional !== 0) {
    seleccionAdicional = parseInt(
      prompt(
        `Selecciona los adicionales de tu burger o '0' para salir: \n ${burger.Adicional.map(
          (adicional) => `${adicional.option}: ${adicional.name} \n`
        )}`
      )
    );

    pedido.push(burger.Adicional[seleccionAdicional]);
  }
};

/**
 * @description Funcion que ejecuta las demas funciones para el armado de la hamburguesa del cliente
 *
 */
function buildBurger() {
  AddBase();
  AddPan();
  addAdicional();
  console.log(pedido);
}
