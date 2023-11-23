const userModel = require("../models/userModel");

const getUsers = async (req, res) => { // agregamos el async
  //agregamos desde aquí hasta 
  try { 
    const users = await userModel.getUsers();
    res.json(users);
  } catch (error) { 
    //aquí este código que faltaba
  res.status(404).json( { message: "Error en el servidor"}); //arreglamos esta línea de código
  }
};

const getUserById = async (req, res) => { //agregamos el async
  const id = parseInt(req.params.id); //agregamos esta línea que faltaba
  const user = await userModel.getUserById(id); //agregamos el await y cambiamos el (req.params.id) por el (id)
  if (user) {
    res.json(user); //borramos código innecesario
  } else {
    res.status(404).json({ message: "Usuario no encontrado" });
  }
};

const createUser = async (req, res) => { // agregamos el async
  const createUser = await userModel.createUser(req.body); //agregamos el await
  if (createUser) {
    res.json(createUser); //borramos código innecesario
  } else {
    res.status(500).json({ message: "Ha ocurrido un error" });
  }
};

const updateUser = async (req, res) => { // agregamos el async
  const id = parseInt(req.params.id); //añadimos esta línea de código
  const user = await userModel.getUserById(id); //añadimos esta línea
  if (user) { 
  const updateUser = await userModel.updateUser(parseInt(req.params.id), { //quitamos el req.body ya que aqui no va
    ...user,
    ...req.body,
  });

  if (updateUser) {
    res.json(updateUser); //arreglamos 
  } else {
    res.status(404).json({ message: "Usuario no encontrado" });
   }
  }
};

const deleteUser = async (req, res) => { // agregamos el async
  const deleteUser = userModel.deleteUser(req.params.id);
  if (deleteUser) {
    res.status(200).json(deleteUser);
  } else {
    res.status(404).json({ message: "Usuario no encontrado" });
  }
};

module.exports = {
  getUsers,
  getUserById,
  updateUser,
  createUser,
  deleteUser,
};
