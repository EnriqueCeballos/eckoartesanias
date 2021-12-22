$(`.applyFilter`).click(() => {
  const filtroBuscar = $(`.busquedaNombre`).val();
  const filtroOrdAlf = $(`.ordenarFiltro`).val();
  const filtroOrdCat = $(`.ordenarCategoria`).val();

  if (!filtroBuscar) {
    listaProductos = [...copiaListaProductos];
  } else {
    listaProductos = copiaListaProductos.filter((producto) =>
      producto.nombre.toLowerCase().includes(filtroBuscar.toLowerCase())
    );
  }

  if (filtroOrdCat) {
    listaProductos = listaProductos.filter(
      (producto) =>
        producto.categoria.toLowerCase() === filtroOrdCat.toLowerCase()
    );
  }

  if (filtroOrdAlf) {
    if (filtroOrdAlf === "alfebaticamente") {
      listaProductos = listaProductos.sort(function compareProduct(a, b) {
        if (a.nombre < b.nombre) {
          return -1;
        }
        if (a.nombre > b.nombre) {
          return 1;
        }
        return 0;
      });
    } else if (filtroOrdAlf === "mayorQue") {
      listaProductos = listaProductos.sort(function compareProduct(a, b) {
        if (a.precio > b.precio) {
          return -1;
        }
        if (a.precio < b.precio) {
          return 1;
        }
        return 0;
      });
    } else if (filtroOrdAlf === "menorQue") {
      listaProductos = listaProductos.sort(function compareProduct(a, b) {
        if (a.precio < b.precio) {
          return -1;
        }
        if (a.precio > b.precio) {
          return 1;
        }
        return 0;
      });
    }
  }

  mostrarMunhecos();

  if (filtroBuscar && filtroBuscar.toLowerCase() === "arturo") {
    $(`.prod-28`).css("display", "flex");
  }
  if (filtroBuscar && filtroBuscar.toLowerCase() === "lautaro") {
    $(`.prod-35`).css("display", "flex");
  }
});
