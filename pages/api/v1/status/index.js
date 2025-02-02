function status(request, response) {
  response.status(200).json({ chave: "eu sou um codificador foda" });
}

export default status;
