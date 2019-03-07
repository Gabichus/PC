var json = null;
window.onload = function(){
	(async () => {
	  const response = await fetch('script/components.json')
    json = await response.json()
    console.log(json)
  })()
  var prod=['localcpu','localgpu','localmotherboard','localram','localrom','localmonitor','localmouse','localkeyboard'];
  
  for(i=0;i<8;i++){
    if(!localStorage.hasOwnProperty(prod[i])){
      var a=[];
      a.push(JSON.parse(localStorage.getItem(prod[i])));
      localStorage.setItem(prod[i], JSON.stringify(a));
    }
  } 
}

function htmlclear(){
  document.querySelector('#products').innerHTML=``;
  document.querySelector('#shopingTable').innerHTML=``;
}
function createCard(title, img, elementNumber, i, ops){
  let opsHTML = "";
  ops.forEach(element => {
    opsHTML = `${opsHTML} <li class="list-group-item"> ${element} </li> `;
  });
  
  document.querySelector('#products').innerHTML += `
      <div class="card" id="contentCard" style="width: 13rem";>
        <img class="card-img-top" src="`+img+`" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">`+title+`</h5>
        </div>
        <ul class="list-group list-group-flush">  
          ${opsHTML}
        </ul>
        <div class="card-body">
        <button type="button" class="btn btn-success" value="`+[elementNumber,i]+`">Add</button>
        </div>
      </div>`;
  }

document.addEventListener('DOMContentLoaded', function(){
  
    document.querySelector('#cpu').addEventListener('click', function(){
        let content = document.querySelector('#products');
        htmlclear();
        for(let i=0;i<json.gpu.length;i++){
        createCard(json.cpu[i].name,json.cpu[i].img,1,i,[`Frequence: ${json.cpu[i].frequence}`, `Socket: ${json.cpu[i].socket}`, `Price : ${json.cpu[i].price}` ]);
            }
    })
    document.querySelector('#gpu').addEventListener('click', function(){
        let content = document.querySelector('#products');
        htmlclear();
        for(let i=0;i<json.gpu.length;i++){
          createCard(json.gpu[i].name,json.gpu[i].img,2,i,[`Frequence: ${json.gpu[i].frequence}`, `Memory: ${json.gpu[i].memory}`, `Price : ${json.gpu[i].price}` ]);
            }
    })

    document.querySelector('#motherboard').addEventListener('click', function(){
      let content = document.querySelector('#products');
      htmlclear();
      for(let i=0;i<json.motherboard.length;i++){
      content.innerHTML += `
              <div class="card" id="contentCard" style="width: 13rem";>
                <img class="card-img-top" src="`+json.motherboard[i].img+`" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">`+json.motherboard[i].name+`</h5>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">`+json.motherboard[i].socket+`</li>
                  <li class="list-group-item">`+json.motherboard[i].memoryslot+`</li>
                  <li class="list-group-item">`+json.motherboard[i].gpuslot+`</li>
                  <li class="list-group-item">`+json.motherboard[i].ramtype+`</li>
                  <li class="list-group-item">`+json.motherboard[i].price+`</li>
                </ul>
                <div class="card-body">
                <button type="button" class="btn btn-success" value="`+[3,i]+`">Add</button>
                </div>
              </div>`
          }
    })

     document.querySelector('#ram').addEventListener('click', function(){
    let content = document.querySelector('#products');
    htmlclear();
    for(let i=0;i<json.ram.length;i++){
    content.innerHTML += `
            <div class="card" id="contentCard" style="width: 13rem";>
              <img class="card-img-top" src="`+json.ram[i].img+`" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">`+json.ram[i].name+`</h5>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Type: `+json.ram[i].type+`</li>
                <li class="list-group-item">Capacity: `+json.ram[i].capacity+`</li>
                <li class="list-group-item">Frequence: `+json.ram[i].frequence+`</li>
                <li class="list-group-item">Price: `+json.ram[i].price+`</li>
              </ul>
              <div class="card-body">
              <button type="button" class="btn btn-success" value="`+[4,i]+`">Add</button>
              </div>
            </div>`
        }
    })

    document.querySelector('#rom').addEventListener('click', function(){
      let content = document.querySelector('#products');
      htmlclear();
      for(let i=0;i<json.rom.length;i++){
      content.innerHTML += `
              <div class="card" id="contentCard" style="width: 13rem";>
                <img class="card-img-top" src="`+json.rom[i].img+`" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">`+json.rom[i].name+`</h5>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Type: `+json.rom[i].type+`</li>
                  <li class="list-group-item">Capacity: `+json.rom[i].capacity+`</li>
                  <li class="list-group-item">Frequence: `+json.rom[i].speed+`</li>
                  <li class="list-group-item">Price: `+json.rom[i].price+`</li>
                </ul>
                <div class="card-body">
                <button type="button" class="btn btn-success"value="`+[5,i]+`">Add</button>
                </div>
              </div>`
          }
    })

    document.querySelector('#monitor').addEventListener('click', function(){
      let content = document.querySelector('#products');
      htmlclear();
      for(let i=0;i<json.ram.length;i++){
      content.innerHTML += `
              <div class="card" id="contentCard" style="width: 13rem"";>
                <img class="card-img-top" src="`+json.monitor[i].img+`" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">`+json.monitor[i].name+`</h5>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Type: `+json.monitor[i].type+`</li>
                  <li class="list-group-item">Size: `+json.monitor[i].size+`</li>
                  <li class="list-group-item">Price: `+json.monitor[i].price+`</li>
                </ul>
                <div class="card-body">
                <button type="button" class="btn btn-success" value="`+[6,i]+`">Add</button>
                </div>
              </div>`
          }
    })

    document.querySelector('#mouse').addEventListener('click', function(){
      let content = document.querySelector('#products');
      htmlclear();
      for(let i=0;i<json.ram.length;i++){
      content.innerHTML += `
              <div class="card" id="contentCard" style="width: 13rem";>
                <img class="card-img-top" src="`+json.mouse[i].img+`" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">`+json.mouse[i].name+`</h5>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Type: `+json.mouse[i].type+`</li>
                  <li class="list-group-item">Type: `+json.mouse[i].typeSensor+`</li>
                  <li class="list-group-item">Price: `+json.mouse[i].price+`</li>
                </ul>
                <div class="card-body">
                <button type="button" class="btn btn-success" value="`+[7,i]+`">Add</button>
                </div>
              </div>`
          }
    })
  
    document.querySelector('#keyboard').addEventListener('click', function(){
      let content = document.querySelector('#products');
      htmlclear();
      for(let i=0;i<json.ram.length;i++){
      content.innerHTML += `
              <div class="card" id="contentCard" style="width: 13rem";>
                <img class="card-img-top" src="`+json.keyboard[i].img+`" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">`+json.keyboard[i].name+`</h5>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Type: `+json.keyboard[i].type+`</li>
                  <li class="list-group-item">Type Connect: `+json.keyboard[i].typeconnect+`</li>
                  <li class="list-group-item">Price: `+json.keyboard[i].price+`</li>
                </ul>
                <div class="card-body">
                <button type="button" class="btn btn-success"value="`+[8,i]+`">Add</button>
                </div>
              </div>`
          }
    })

    document.querySelector('#shopingCard').addEventListener('click', function(){
      let content = document.querySelector('#shopingTable');
      htmlclear();
      content.innerHTML += `
        <thead>
          <tr>
            <th scope="col" colspan="5" class="text-center">Name</th>
          </tr>
        </thead>`
        content.innerHTML += `
        <tbody>
          <tr>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>@fat</td>
            <td>@fat</td>
          </tr>
        </tbody>
      `     
    })

    document.addEventListener('click', function(){
      let bclick = document.querySelectorAll('.btn-success');
      for (let i= 0;  i < bclick.length;  i++) {
        bclick[i].onclick = function(){
          switch(bclick[i].value[0]){
            case '1':SaveDataToLocalStorage("localcpu",[parseInt(bclick[i].value[2]),1]);
              break;
           case '2':SaveDataToLocalStorage("localgpu",[parseInt(bclick[i].value[2]),1]);
              break;
            case '3':SaveDataToLocalStorage("localmotherboard",[parseInt(bclick[i].value[2]),1]);
              break;
            case '4':SaveDataToLocalStorage("localram",[parseInt(bclick[i].value[2]),1]);
              break;
            case '5':SaveDataToLocalStorage("localrom",[parseInt(bclick[i].value[2]),1]);
              break;
            case '6':SaveDataToLocalStorage("localmonitor",[parseInt(bclick[i].value[2]),1]);
              break;
            case '7':SaveDataToLocalStorage("localmouse",[parseInt(bclick[i].value[2]),1]);
              break;
            case '8':SaveDataToLocalStorage("localkeyboard",[parseInt(bclick[i].value[2]),1]);
              break;
          }
        }
      };
    })
})

let b;
let parsedJson;
let SaveData;
let localForExist;
function SaveDataToLocalStorage(localStorageType,data)
{
  b=JSON.parse(localStorage.getItem(localStorageType)).length;
  parsedJson=JSON.parse(localStorage.getItem(localStorageType));
  SaveData=data;
  localForExist=localStorageType;
  isNotNull().then(isExist).catch(ll);
}

let isNotNull = function(){
  return new Promise(function(resolve, reject){
      if(JSON.parse(localStorage.getItem(localForExist)).length!=1){
        resolve('isNotNull');
      }else{
        var a = [];
        a = JSON.parse(localStorage.getItem(localForExist));
        a.push(SaveData);
        localStorage.setItem(localForExist, JSON.stringify(a));
        reject('isNull');
      }
  })
}

let isExist= function(){
  return new Promise(function(resolve, reject){
    var isExistBool=false;
    for(i=1;i<b;i++){
      if(parsedJson[i][0]==SaveData[0]) isExistBool=true;
    }
		if(isExistBool){
      console.log("este");
			resolve('este');
    }else{
      var a = [];
      a = JSON.parse(localStorage.getItem(localForExist));
      a.push(SaveData);
      localStorage.setItem(localForExist, JSON.stringify(a));
      console.log("nu este");
      reject('nu este');
    }
	})
}
let ll=function(){
  console.log("catch");
}