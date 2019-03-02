var json = null;
window.onload = function(){
	(async () => {
	  const response = await fetch('script/components.json')
    json = await response.json()
    console.log(json)

	})()
}


document.addEventListener('DOMContentLoaded', function(){
  document.addEventListener('click',function(e){
    console.log(e);
  })
    document.querySelector('#cpu').addEventListener('click', function(){
        let content = document.querySelector('#products');
        content.innerHTML = ``;
        for(let i=0;i<json.gpu.length;i++){
        content.innerHTML += `
                <div class="card" id="contentCard" style="width: 13rem";>
                  <img class="card-img-top" src="`+json.cpu[i].img+`" alt="Card image cap">
                  <div class="card-body">
                    <h5 class="card-title">`+json.cpu[i].name+`</h5>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Frequence: `+json.cpu[i].frequence+`</li>
                    <li class="list-group-item">Socket: `+json.cpu[i].socket+`</li>
                    <li class="list-group-item">Price: `+json.cpu[i].price+`</li>
                  </ul>
                  <div class="card-body">
                  <button type="button" class="btn btn-success" value="cpu[`+i+`]">Add</button>
                  </div>
                </div>`
            }
    })

    document.querySelector('#gpu').addEventListener('click', function(){
        let content = document.querySelector('#products');
        content.innerHTML = ``;
        for(let i=0;i<json.gpu.length;i++){
        content.innerHTML += `
                <div class="card" id="contentCard" style="width: 13rem";>
                  <img class="card-img-top" src="`+json.gpu[i].img+`" alt="Card image cap">
                  <div class="card-body">
                    <h5 class="card-title">`+json.gpu[i].name+`</h5>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Frequence: `+json.gpu[i].frequence+`</li>
                    <li class="list-group-item">Memory: `+json.gpu[i].memory+`</li>
                    <li class="list-group-item">Price: `+json.gpu[i].price+`</li>
                  </ul>
                  <div class="card-body">
                  <button type="button" class="btn btn-success" value="gpu[`+i+`]">Add</button>
                  </div>
                </div>`
            }
    })

    document.querySelector('#motherboard').addEventListener('click', function(){
      let content = document.querySelector('#products');
      content.innerHTML = ``;
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
                <button type="button" class="btn btn-success" value="moherboard[`+i+`]">Add</button>
                </div>
              </div>`
          }
    })

     document.querySelector('#ram').addEventListener('click', function(){
    let content = document.querySelector('#products');
    content.innerHTML = ``;
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
              <button type="button" class="btn btn-success" value="ram[`+i+`]">Add</button>
              </div>
            </div>`
        }
    })

    document.querySelector('#rom').addEventListener('click', function(){
      let content = document.querySelector('#products');
      content.innerHTML = ``;
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
                <button type="button" class="btn btn-success"value="rom[`+i+`]">Add</button>
                </div>
              </div>`
          }
    })

    document.querySelector('#monitor').addEventListener('click', function(){
      let content = document.querySelector('#products');
      content.innerHTML = ``;
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
                <button type="button" class="btn btn-success" value="monitor[`+i+`]">Add</button>
                </div>
              </div>`
          }
    })

    document.querySelector('#mouse').addEventListener('click', function(){
      let content = document.querySelector('#products');
      content.innerHTML = ``;
      for(let i=0;i<json.ram.length;i++){
      content.innerHTML += `
              <div class="card" id="contentCard" style="width: 13rem";>
                <img class="card-img-top" src="`+json.mouse[i].img+`" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">`+json.mouse[i].name+`</h5>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Type: `+json.mouse[i].type+`</li>
                  <li class="list-group-item">Price: `+json.mouse[i].price+`</li>
                </ul>
                <div class="card-body">
                <button type="button" class="btn btn-success" value="mouse[`+i+`]">Add</button>
                </div>
              </div>`
          }
    })

    document.querySelector('#keyboard').addEventListener('click', function(){
      let content = document.querySelector('#products');
      content.innerHTML = ``;
      for(let i=0;i<json.ram.length;i++){
      content.innerHTML += `
              <div class="card" id="contentCard" style="width: 13rem";>
                <img class="card-img-top" src="`+json.keyboard[i].img+`" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">`+json.keyboard[i].name+`</h5>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Type: `+json.keyboard[i].type+`</li>
                  <li class="list-group-item">Price: `+json.keyboard[i].price+`</li>
                </ul>
                <div class="card-body">
                <button type="button" class="btn btn-success"value="keyboard[`+i+`]">Add</button>
                </div>
              </div>`
          }
    })

    document.addEventListener('click', function(){
      let bclick = document.querySelectorAll('.btn-success');
      for (let i= 0;  i < bclick.length;  i++) {
        bclick[i].onclick = function(){
          alert(bclick[i].value);
        }
      };
    })
    
})