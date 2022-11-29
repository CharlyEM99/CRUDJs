function save(){
  var Existencia = document.getElementById('inputAgotado');
  if(Existencia.checked == true){
      ListaInventario = JSON.parse(localStorage.getItem('listItem3')) ?? []
      var id
      ListaInventario.length != 0 ? ListaInventario.findLast((item) => id = item.id) : id = 0
    
      const nombre = document.getElementById('inputNombre').value;
      const categoria = document.getElementById('inputCategoria').value;
      
      if(document.getElementById('inputInventario').value){
          ListaInventario.forEach(value => {
              if(document.getElementById('inputInventario').value == value.id){
                  value.Nombre         = nombre, 
                  value.categoria        = categoria, 
                  value.precio          = document.getElementById('inputPrecio' ).value, 
                  value.isComplete    =     1   
              }
          });
          document.getElementById('id').value = ''
      }else{
          var item = {
              id          : id + 1, 
              Nombre       : nombre, 
              categoria      : document.getElementById('inputCategoria').value, 
              precio        : document.getElementById('inputPrecio').value, 
              isComplete  : 1,
          }
          ListaInventario.push(item)
      }
      localStorage.setItem('listItem3', JSON.stringify(ListaInventario))
  }else{
  
      ListaInventario2 = JSON.parse(localStorage.getItem('listItem4')) ?? []
      var id
      ListaInventario2.length != 0 ? ListaInventario.findLast((item) => id = item.id) : id = 0
      if(document.getElementById('inputInventario').value){
          ListaInventario2.forEach(value => {
              if(document.getElementById('inputInventario').value == value.id){
                  value.Nombre         = document.getElementById('inputNombre').value, 
                  value.categoria        = document.getElementById('inputCategoria').value, 
                  value.precio          = document.getElementById('inputPrecio').value, 
                  value.isComplete    = 0
              }
          });
          document.getElementById('inputInventario').value = ''
      }else{
          var item = {
              id          : id + 1, 
              Nombre       : document.getElementById('inputNombre').value, 
              categoria      : document.getElementById('inputCategoria').value, 
              precio        : document.getElementById('inputPrecio').value, 
              isComplete  : 0,
          }
          ListaInventario2.push(item)
      }
      localStorage.setItem('listItem4', JSON.stringify(ListaInventario2))
  }
  allData()
  document.getElementById('form').reset()
}

function allData(){
            
  table.innerHTML = ``
  ListaInventario = JSON.parse(localStorage.getItem('listItem4')) ?? []
  ListaInventario.forEach(function (value, i){
     
      var table = document.getElementById('table')
      // if(value.isComplete == 0){
      table.innerHTML += `
          <tr>
              <td>${i+1}</td>
              <td>${value.Nombre}</td>
              <td>${value.categoria}</td>
              <td>${value. precio}</td>
              <td><button class="btn btn-sm btn-warning" onclick="Existencia(${value.id},'${value.Nombre}','${value.categoria}',${value.precio})">
              <i class="fa fa-check"></i>
              </button></td>
              <td>
                  <button class="btn btn-sm btn-success" onclick="find(${value.id})">
                      <i class="fa fa-edit"></i>
                  </button>
              </td>
              <td>
                  <button class="btn btn-sm btn-danger" onclick="removeData4(${value.id})">
                      <i class="fa fa-trash"></i>
                  </button>
              </td>
          </tr>`
      // }
  
  })
  table2.innerHTML = ``
  ListaInventario2 = JSON.parse(localStorage.getItem('listItem3')) ?? []
  
  ListaInventario2.forEach(function (value2, i){
     
      var table2 = document.getElementById('table2')
      // console.log(value2.isComplete);
      // if(value2.isComplete == 1){
      table2.innerHTML += `
          <tr>
              <td>${i+1}</td>
              <td>${value2.Nombre}</td>
              <td>${value2.categoria}</td>
              <td>${value2.precio}</td>
              <td><button class="btn btn-sm btn-warning" onclick="Existencia2(${value2.id},'${value2.Nombre}','${value2.categoria}',${value2.precio})">
              <i class="fa fa-check"></i>
              </button></td>
              <td>
                  <button class="btn btn-sm btn-success" onclick="find(${value2.id})">
                      <i class="fa fa-edit"></i>
                  </button>
              </td>
              <td>
                  <button class="btn btn-sm btn-danger" onclick="removeData3(${value2.id})">
                      <i class="fa fa-trash"></i>
                  </button>
              </td>
          </tr>`
      // }
  
  })
  
}

function removeData3(id){
    
  ListaInventario = JSON.parse(localStorage.getItem('listItem3')) ?? []
  ListaInventario = ListaInventario.filter(function(value){ 
      return value.id != id; 
  });
  // localStorage.clear();
  localStorage.setItem('listItem3', JSON.stringify(ListaInventario))
  allData()
}

function removeData4(id){
  ListaInventario = JSON.parse(localStorage.getItem('listItem4')) ?? []
  ListaInventario = ListaInventario.filter(function(value){ 
      return value.id != id; 
  });
  localStorage.setItem('listItem4', JSON.stringify(ListaInventario))
  allData()
}

function find(id){
  ListaInventario = JSON.parse(localStorage.getItem('listItem4')) ?? []
  ListaInventario.forEach(function (value){
      if(value.id == id){
          console.log(id);
          document.getElementById('inputInventario').value = id
          document.getElementById('inputNombre').value = value.Nombre
          document.getElementById('inputCategoria').value = value.categoria 
          document.getElementById('inputPrecio').value = value.precio
      }
  })
}

function Existencia(id1,Nombre1,categoria1,precio1){
  if(id1){
      var item = [{
          id          : id1, 
          Nombre       : Nombre1, 
          categoria      : categoria1, 
          precio        : precio1 , 
          isComplete  : 1,
      }];   
      ListaInventario = JSON.parse(localStorage.getItem('listItem3')) ?? []
      productos = item.concat(ListaInventario);
      var itemString = JSON.stringify(productos);
      localStorage.setItem('listItem3', itemString);
  }
  
  ListaInventario4 = JSON.parse(localStorage.getItem('listItem4')) ?? []
  ListaInventario4 = ListaInventario4.filter(function(value){ 
      return value.id != id1; 
  });
  localStorage.setItem('listItem4', JSON.stringify(ListaInventario4))
  allData()
}

function Existencia2(id1,Nombre1,categoria1,precio1){
  if(id1){
      var item = [{
          id          : id1, 
          Nombre       : Nombre1, 
          categoria      : categoria1, 
          precio        :  precio1 , 
          isComplete  : 1,
      }];   
      ListaInventario = JSON.parse(localStorage.getItem('listItem4')) ?? []
      productos = item.concat(ListaInventario);
      var itemString = JSON.stringify(productos);
      localStorage.setItem('listItem4', itemString);
  }
  
  ListaInventario3 = JSON.parse(localStorage.getItem('listItem3')) ?? []
  ListaInventario3 = ListaInventario3.filter(function(value){ 
      return value.id != id1; 
  });
  localStorage.setItem('listItem3', JSON.stringify(ListaInventario3))
  allData()
}