//CRUD = Create(POST) - Read(GET) - Update(PUT/PATCH) - Delete(DELETE)

//const listaCliente = () => fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());
export const listaCliente = async () => {
  const respuesta = await fetch("http://localhost:3000/perfil");
  return respuesta.json();
};

export const crearCliente = (nombre, email) => {
  return fetch("http://localhost:3000/perfil", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, email, id: uuid.v4() }),
  });
};

export const eliminarCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "DELETE",
  });
};

export const detalleCliente = async (id) => {
  const respuesta = await fetch(`http://localhost:3000/perfil/${id}`);
  return respuesta.json();
};

export const actualizarCliente = async (nombre, email, id) => {
  try {
    const respuesta = await fetch(`http://localhost:3000/perfil/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nombre, email, id }),
    });
    await respuesta.json();
  } catch (error) {
    window.location.href = "/screens/error.html";
    console.log("Error catch: " + error);
  }
};
