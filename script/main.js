let json = null;
let prod;
window.onload = function(){
	(async () => {
	  const response = await fetch('script/components.json')
    json = await response.json()
    console.log(json)
  })()
  prod=['localcpu','localgpu','localmotherboard','localram','localrom','localmonitor','localmouse','localkeyboard'];
  
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
    opsHTML += `<li class="list-group-item"> ${element} </li> `;
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
//                                <input type="text" id="productCount" class="form-control text-center" style="width:3rem" placeholder="${prodElem[1]}" aria-label="Input quantity" aria-describedby="btnGroupAddon">

function createTd(name,prodElem){
  elementTD="";
  switch(name){
    case 'cpu':elementTD +=`<tr><td>Name: ${json.cpu[prodElem[0]].name}</td>
                            <td>Frequence: ${json.cpu[prodElem[0]].frequence}</td>
                            <td>Socket: ${json.cpu[prodElem[0]].socket}</td>
                            <td >Price: ${json.cpu[prodElem[0]].price}</td>
                            <td colspan="2">
                              <div class="btn-group" role="group" aria-label="Basic example">
                                <button type="button" id="decrease" class="btn btn-secondary">-</button>
                                <span class="input-group-text" id="productCount">${prodElem[1]}</span>
                                <button type="button" id="increase" class="btn btn-secondary">+</button>
                              </div> 
                              <button type="button" id="removeProduct" class="btn btn-danger">Remove</button>
                              <div class="d-none">
                                <p id="localKey">localcpu</p>
                                <p id="findKey">${prodElem}</p>
                              </div>
                            </td>
                            </tr>`
      break;
   case 'gpu':elementTD +=`<tr><td>Name: ${json.gpu[prodElem[0]].name}</td>
                            <td>Frequence: ${json.gpu[prodElem[0]].frequence}</td>
                            <td>Memory: ${json.gpu[prodElem[0]].memory}</td>
                            <td colspan="2">Price: ${json.gpu[prodElem[0]].price}</td>
                            <td colspan="2">
                              <div class="btn-group" role="group" aria-label="Basic example">
                                <button type="button" id="decrease" class="btn btn-secondary">-</button>
                                <span class="input-group-text" id="productCount">${prodElem[1]}</span>
                                <button type="button" id="increase" class="btn btn-secondary">+</button>
                              </div> 
                              <button type="button" id="removeProduct" class="btn btn-danger">Remove</button>
                              <div class="d-none">
                                <p id="localKey">localgpu</p>
                                <p id="findKey">${prodElem}</p>
                              </div>
                            </td>
                            </tr>`
      break;
    case 'motherboard':elementTD +=`<tr><td>Name: ${json.motherboard[prodElem[0]].name}</td>
                                    <td>Socket: ${json.motherboard[prodElem[0]].socket}</td>
                                    <td>Ram Type: ${json.motherboard[prodElem[0]].ramtype}</td>
                                    <td colspan="2">Price: ${json.motherboard[prodElem[0]].price}</td>
                                    </tr>`
      break;
    case 'ram':elementTD +=`<tr><td>Name: ${json.ram[prodElem[0]].name}</td>
                            <td>Type: ${json.ram[prodElem[0]].type}</td>
                            <td>Capacity: ${json.ram[prodElem[0]].capacity}</td>
                            <td>Frequence: ${json.ram[prodElem[0]].frequence}</td>
                            <td>Price: ${json.ram[prodElem[0]].price}</td>
                            </tr>`
      break;
    case 'rom':elementTD +=`<tr><td>Name: ${json.rom[prodElem[0]].name}</td>
                            <td>Type: ${json.rom[prodElem[0]].type}</td>
                            <td>Capacity: ${json.rom[prodElem[0]].capacity}</td>
                            <td>Speed: ${json.rom[prodElem[0]].speed}</td>
                            <td>Price: ${json.rom[prodElem[0]].price}</td>
                            </tr>`
      break;
    case 'monitor':elementTD +=`<tr><td>Name: ${json.monitor[prodElem[0]].name}</td>
                                <td>Type: ${json.monitor[prodElem[0]].type}</td>
                                <td>Capacity: ${json.monitor[prodElem[0]].size}</td>
                                <td colspan="2">Price: ${json.monitor[prodElem[0]].price}</td>
                                </tr>`
      break;
    case 'mouse':elementTD +=`<tr><td>Name: ${json.mouse[prodElem[0]].name}</td>
                              <td>Type: ${json.mouse[prodElem[0]].type}</td>
                              <td>Type Sensor: ${json.mouse[prodElem[0]].typeSensor}</td>
                              <td colspan="2">Price: ${json.mouse[prodElem[0]].price}</td>
                              </tr>`
      break;
    case 'keyboard':elementTD +=`<tr><td>Name: ${json.keyboard[prodElem[0]].name}</td>
                                <td>Type: ${json.keyboard[prodElem[0]].type}</td>
                                <td>Type Connector: ${json.keyboard[prodElem[0]].typeconnect}</td>
                                <td colspan="2" >Price: ${json.keyboard[prodElem[0]].price}</td>
                                </tr>`
      break;
  }
  return elementTD;
}

function createTable(prodName,getProd){
  opsHTML="";
  getProd.forEach(element => {
    if(element!=null) opsHTML+=createTd(prodName,element);
  });

  document.querySelector('#shopingTable').innerHTML += `
        <thead>
          <tr>
            <th scope="col" colspan="6" class="text-center">${prodName}</th>
          </tr>
        </thead>`
        document.querySelector('#shopingTable').innerHTML += `
        <tbody>
            ${opsHTML}
        </tbody>
      `   
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
          createCard(json.motherboard[i].name,json.motherboard[i].img,3,i,[`Socket: ${json.motherboard[i].socket}`, `Memory slots: ${json.motherboard[i].memoryslot}`, `Gpu slots: ${json.motherboard[i].gpuslot}`, `Ram Type: ${json.motherboard[i].ramtype}`, `Price : ${json.motherboard[i].price}` ]);
      }
    })

    document.querySelector('#ram').addEventListener('click', function(){
      let content = document.querySelector('#products');
      htmlclear();
      for(let i=0;i<json.ram.length;i++){
        createCard(json.ram[i].name,json.ram[i].img,4,i,[`Type: ${json.ram[i].type}`, `Capacity: ${json.ram[i].capacity}`,`Frequence ${json.ram[i].frequence}`, `Price : ${json.ram[i].price}` ]);

      }
    })

    document.querySelector('#rom').addEventListener('click', function(){
      let content = document.querySelector('#products');
      htmlclear();
      for(let i=0;i<json.rom.length;i++){
        createCard(json.rom[i].name,json.rom[i].img,5,i,[`Type: ${json.rom[i].type}`, `Speed: ${json.rom[i].speed}`, `Capacity: ${json.rom[i].capacity}`,`Price : ${json.rom[i].price}` ]);
      }
    })

    document.querySelector('#monitor').addEventListener('click', function(){
      let content = document.querySelector('#products');
      htmlclear();
      for(let i=0;i<json.ram.length;i++){
        createCard(json.monitor[i].name,json.monitor[i].img,6,i,[`Type: ${json.monitor[i].type}`, `Size: ${json.monitor[i].size}`, `Price : ${json.monitor[i].price}` ]);
      }
    })

    document.querySelector('#mouse').addEventListener('click', function(){
      let content = document.querySelector('#products');
      htmlclear();
      for(let i=0;i<json.ram.length;i++){
        createCard(json.mouse[i].name,json.mouse[i].img,7,i,[`Type: ${json.mouse[i].type}`, `Sensor type: ${json.mouse[i].typeSensor}`, `Price : ${json.mouse[i].price}` ]);
          }
    })
  
    document.querySelector('#keyboard').addEventListener('click', function(){
      let content = document.querySelector('#products');
      htmlclear();
      for(let i=0;i<json.ram.length;i++){
        createCard(json.keyboard[i].name,json.keyboard[i].img,8,i,[`Type: ${json.keyboard[i].type}`, `Type Connector: ${json.keyboard[i].typeconnect}`, `Price : ${json.keyboard[i].price}` ]);
      }
    })

    document.querySelector('#shopingCard').addEventListener('click', function(){
      htmlclear();
      for(i=0;i<=7;i++){ 
        parsedJson=JSON.parse(localStorage.getItem(prod[i]));
        if(parsedJson.length!=1) createTable(prod[i].slice(5),parsedJson);
      }
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

    document.addEventListener('click',function(e){
      if(e.target['id']=='increase'){
        let count=e.target.parentElement.querySelector('#productCount');
        count.innerHTML=parseInt(count.innerHTML)+1
      }

      if(e.target['id']=='decrease'){
        let count=e.target.parentElement.querySelector('#productCount');
        if(parseInt(count.innerHTML)>1){
          count.innerHTML=parseInt(count.innerHTML)-1
        }
      }
      
      if(e.target['id']=='removeProduct'){
        let localKey=e.target.parentElement.querySelector('#localKey').innerHTML;
        let findKey=e.target.parentElement.querySelector('#findKey').innerHTML;
        parsedJson=JSON.parse(localStorage.getItem(localKey));
        for(i=1; i<parsedJson.length; i++){
          if(parsedJson[i][0]==findKey[0]) parsedJson.splice(i,1);
        }
        console.log(parsedJson);
        localStorage.setItem(localKey, JSON.stringify(parsedJson));
      }
    })
})


function SaveDataToLocalStorage(localStorageType,data)
{
  b=JSON.parse(localStorage.getItem(localStorageType)).length;
  parsedJson=JSON.parse(localStorage.getItem(localStorageType));
  SaveData=data;
  localForExist=localStorageType;
  isNotNull().then(isExist);
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
			resolve('este');
    }else{
      var a = [];
      a = JSON.parse(localStorage.getItem(localForExist));
      a.push(SaveData);
      localStorage.setItem(localForExist, JSON.stringify(a));
      reject('nu este');
    }
	})
}
