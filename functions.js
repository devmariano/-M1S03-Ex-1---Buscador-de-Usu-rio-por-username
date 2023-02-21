
var listUsers;

fetch(`./users.json`)
  .then(response => response.json())
  .then(data => {
    listUsers = data;
    fetchUsers();
    console.log(data);
  })
  .catch(error => console.error(error));

function fetchUsers() {
  document.getElementById("content").innerHTML = `
    <div>
      <h1>Buscador de Usuário por username</h1>
      <input id='search' placeholder='busque seu usuario'></input>
      <button onClick='handleSearch()'>Buscar</button>
      <button onClick='handleClean()'>Limpar</button>
      <button onClick='handleViewAll()'>Mostar todos usuarios</button>
      <ul id='list'>
      </ul>
    </div>
  `;
}

window.handleSearch = () => {
  const searchTerm = document.getElementById("search").value;
  const filteredUsers = listUsers.filter(user => user.username.includes(searchTerm));
  console.log(filteredUsers)
  if (filteredUsers.length>0){
  document.getElementById("list").innerHTML = filteredUsers.map(user => `<li>Nome: ${user.name} (Username: ${user.username}) - Dificuldade ${user.difficulty}</li>`).join('');
}else{
    document.getElementById("list").innerHTML ="Nenhum usuario com este username encontrado. Tente novamente"
}
}

window.handleClean = () => {
  document.getElementById("search").value = "";
  document.getElementById("list").innerHTML =""
}
window.handleViewAll= () => {
    document.getElementById("search").value = "";
    document.getElementById("list").innerHTML = listUsers.map(user => `<li>${user.name} (${user.username}) - ${user.difficulty}</li>`).join('');
  }


