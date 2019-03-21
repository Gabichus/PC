class PcConstructor {
    constructor() {
        (async () => {
            const response = await fetch('script/components.json')
            this.json = await response.json()
        })()

        let prod = ['localcpu', 'localgpu', 'localmotherboard', 'localram', 'localrom', 'localmonitor', 'localmouse', 'localkeyboard'];

        for (let i = 0; i < 8; i++) {
            if (!localStorage.hasOwnProperty(prod[i])) {
                localStorage.setItem(prod[i], JSON.stringify([]));
            }
        }
    }

    getJson() {
        return this.json;
    }

    htmlclear() {
        document.querySelector('#products').innerHTML = ``;
        document.querySelector('#shopingTable').innerHTML = ``;
    }
    //#region Card
    createCard(title, img, elementNumber, i, ops, local) {
        let opsHTML = "";
        ops.forEach(element => {
            opsHTML += `<li class="list-group-item"> ${element} </li> `;
        });
        document.querySelector('#products').innerHTML += `
    <div class="card" id="contentCard" style="width: 13rem";>
        <img class="card-img-top" src="${img}" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">${title}</h5>
        </div>
        <ul class="list-group list-group-flush">  
        ${opsHTML}
        </ul>
        <div class="card-body">
        <button type="button" class="btn btn-success" value="${[elementNumber, i]}"onclick="h.addToLocalStorage('${local}',[${[elementNumber, i]}])">Add</button>
        </div>
    </div>`;
    }
    createCpuCard() {
        this.htmlclear();
        for (let i = 0; i < this.json.cpu.length; i++) {
            this.createCard(this.json.cpu[i].name, this.json.cpu[i].img, 1, i, [`Frequence: ${this.json.cpu[i].frequence}`, `Socket: ${this.json.cpu[i].socket}`, `Price : ${this.json.cpu[i].price}`], "localcpu");
        }
    }
    createGpuCard() {
        this.htmlclear();
        for (let i = 0; i < this.json.gpu.length; i++) {
            this.createCard(this.json.gpu[i].name, this.json.gpu[i].img, 2, i, [`Frequence: ${this.json.gpu[i].frequence}`, `Memory: ${this.json.gpu[i].memory}`, `Price : ${this.json.gpu[i].price}`], "localgpu");
        }
    }
    createMotherboardCard() {
        this.htmlclear();
        for (let i = 0; i < this.json.motherboard.length; i++) {
            this.createCard(this.json.motherboard[i].name, this.json.motherboard[i].img, 3, i, [`Socket: ${this.json.motherboard[i].socket}`, `Memory slots: ${this.json.motherboard[i].memoryslot}`, `Gpu slots: ${this.json.motherboard[i].gpuslot}`, `Ram Type: ${this.json.motherboard[i].ramtype}`, `Price : ${this.json.motherboard[i].price}`], "localmotherboard");
        }
    }
    createRamCard() {
        this.htmlclear();
        for (let i = 0; i < this.json.ram.length; i++) {
            this.createCard(this.json.ram[i].name, this.json.ram[i].img, 4, i, [`Type: ${this.json.ram[i].type}`, `Capacity: ${this.json.ram[i].capacity}`, `Frequence ${this.json.ram[i].frequence}`, `Price : ${this.json.ram[i].price}`], "localram");
        }
    }
    createRomCard() {
        this.htmlclear();
        for (let i = 0; i < this.json.rom.length; i++) {
            this.createCard(this.json.rom[i].name, this.json.rom[i].img, 5, i, [`Type: ${this.json.rom[i].type}`, `Speed: ${this.json.rom[i].speed}`, `Capacity: ${this.json.rom[i].capacity}`, `Price : ${this.json.rom[i].price}`], "localrom");
        }
    }
    createMonitorCard() {
        this.htmlclear();
        for (let i = 0; i < this.json.monitor.length; i++) {
            this.createCard(this.json.monitor[i].name, this.json.monitor[i].img, 6, i, [`Type: ${this.json.monitor[i].type}`, `Size: ${this.json.monitor[i].size}`, `Price : ${this.json.monitor[i].price}`], "localmonitor");
        }
    }
    createMouseCard() {
        this.htmlclear();
        for (let i = 0; i < this.json.mouse.length; i++) {
            this.createCard(this.json.mouse[i].name, this.json.mouse[i].img, 7, i, [`Type: ${this.json.mouse[i].type}`, `Sensor type: ${this.json.mouse[i].typeSensor}`, `Price : ${this.json.mouse[i].price}`], "localmouse");
        }
    }
    createKeyboardCard() {
        this.htmlclear();
        for (let i = 0; i < this.json.keyboard.length; i++) {
            this.createCard(this.json.keyboard[i].name, this.json.keyboard[i].img, 8, i, [`Type: ${this.json.keyboard[i].type}`, `Type Connector: ${this.json.keyboard[i].typeConnect}`, `Price : ${this.json.keyboard[i].price}`], "localkeyboard");
        }
    }
    //#endregion

    addToLocalStorage(localForExist, valueCard) {
        let checkJson = JSON.parse(localStorage.getItem(localForExist));
        let isExistBool = false;
        console.log(checkJson);
        for (let i = 0; i < checkJson.length; i++) {
            if (checkJson[i][0] == valueCard[1]) isExistBool = true;
        }
        if (!isExistBool) {
            let a = [];
            a = JSON.parse(localStorage.getItem(localForExist));
            a.push([valueCard[1], 1]);
            localStorage.setItem(localForExist, JSON.stringify(a));
        }
    }

    createClassPc(){
        let c = new pc();
        c.checkStart();
    }

    calcPrice(){
        let allprice=0;
        let count = document.querySelectorAll('#itemPrice');
        for(let i=0;i<count.length;i++) allprice+=parseInt(count[i].textContent.slice(10));
        document.querySelector('#allPrice').innerHTML=`Total Price: ${allprice}`;
    }

    createTable() {
        let prod = ['localcpu', 'localgpu', 'localmotherboard', 'localram', 'localrom', 'localmonitor', 'localmouse', 'localkeyboard'];
        let check = true;
        this.htmlclear();
        for (let i = 0; i <= 7; i++) {
            let parsedJson = JSON.parse(localStorage.getItem(prod[i]));
            if (parsedJson.length > 0) {
                let opsHTML = "";
                parsedJson.forEach(element => {
                    if (element != null) opsHTML += this.createTd(prod[i].slice(5), element);
                });

                document.querySelector('#shopingTable').innerHTML += `
                <thead>
                <tr>
                    <th scope="col" colspan="6" class="text-center">${prod[i].slice(5)}</th>
                </tr>
                </thead>`
                document.querySelector('#shopingTable').innerHTML += `
                <tbody>
                    ${opsHTML}
                </tbody>
                `
            }
        }

        let shopingTable = document.querySelector('#shopingTable');
        if (shopingTable.innerHTML != "") {
            shopingTable.innerHTML += `
                            <td colspan="3">
                             <div id="allPrice"></div>
                            </td>
                            <td colspan="1">
                                <div class="input-group flex-nowrap">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">discount</span>
                                    </div>
                                    <input type="text" class="form-control"  id="discountInput">
                                </div>
                            </td>
                            <td colspan="2">
                            <button type="button" class="btn btn-success" onclick="h.createClassPc()">Create PC</button>
                            </td>`
                            this.calcPrice();
        }

    }
    createTd(name, prodElem) {
        let elementTD = "";
        switch (name) {
            case 'cpu': elementTD += this.insertTdElement([`Name: ${this.json.cpu[prodElem[0]].name}`, `Frequence: ${this.json.cpu[prodElem[0]].frequence}`, `Socket: ${this.json.cpu[prodElem[0]].socket}`, `Price: ${this.json.cpu[prodElem[0]].price}`], "localcpu", prodElem);
                break;
            case 'gpu': elementTD += this.insertTdElement([`Name: ${this.json.gpu[prodElem[0]].name}`, `Frequence: ${this.json.gpu[prodElem[0]].frequence}`, `Memory: ${this.json.gpu[prodElem[0]].memory}`, `Price: ${this.json.gpu[prodElem[0]].price}`], "localgpu", prodElem);
                break;
            case 'motherboard': elementTD += this.insertTdElement([`Name: ${this.json.motherboard[prodElem[0]].name}`, `Socket: ${this.json.motherboard[prodElem[0]].socket}`, `Ram Type: ${this.json.motherboard[prodElem[0]].ramtype}`, `Price: ${this.json.motherboard[prodElem[0]].price}`], "localmotherboard", prodElem);
                break;
            case 'ram': elementTD += this.insertTdElement([`Name: ${this.json.ram[prodElem[0]].name}`, `Type: ${this.json.ram[prodElem[0]].type}`, `Capacity: ${this.json.ram[prodElem[0]].capacity}`, `Price: ${this.json.ram[prodElem[0]].price}`], "localram", prodElem);
                break;
            case 'rom': elementTD += this.insertTdElement([`Name: ${this.json.rom[prodElem[0]].name}`, `Type: ${this.json.rom[prodElem[0]].type}`, `Speed: ${this.json.rom[prodElem[0]].speed}`, `Price: ${this.json.rom[prodElem[0]].price}`], "localrom", prodElem);
                break;
            case 'monitor': elementTD += this.insertTdElement([`Name: ${this.json.monitor[prodElem[0]].name}`, `Type: ${this.json.monitor[prodElem[0]].type}`, `Ram Type: ${this.json.monitor[prodElem[0]].size}`, `Price: ${this.json.monitor[prodElem[0]].price}`], "localmonitor", prodElem);
                break;
            case 'mouse': elementTD += this.insertTdElement([`Name: ${this.json.mouse[prodElem[0]].name}`, `Type: ${this.json.mouse[prodElem[0]].type}`, `Type Sensor: ${this.json.mouse[prodElem[0]].typeSensor}`, `Price: ${this.json.mouse[prodElem[0]].price}`], "localmouse", prodElem);
                break;
            case 'keyboard': elementTD += this.insertTdElement([`Name: ${this.json.keyboard[prodElem[0]].name}`, `Type: ${this.json.keyboard[prodElem[0]].type}`, `Ram Type: ${this.json.keyboard[prodElem[0]].typeConnect}`, `Price: ${this.json.keyboard[prodElem[0]].price}`], "localkeyboard", prodElem);
                break;
        }
        return elementTD;
    }
    insertTdElement(elem, localkey, prodElem) {
        let opsHTML = "";
        elem.forEach(element => {
            if (element.includes("Price")) opsHTML += `<td id="itemPrice" value=${element.slice(7)}><div id="price" class="d-none">${element.slice(7)}</div>Price: ${(element.slice(7) * prodElem[1])}</td>`;
            else opsHTML += `<td>${element}</td>`

        });
        opsHTML = `<tr>
                  ${opsHTML}
                  <td colspan="2">
                    <div class="btn-group" role="group" aria-label="Basic example">
                      <button type="button" id="decrease" class="btn btn-secondary" onclick="h.decrease('${localkey}',[${prodElem}],this)">-</button>
                      <span class="input-group-text" id="productCount">${prodElem[1]}</span>
                      <button type="button" id="increase" class="btn btn-secondary" onclick="h.increase('${localkey}',[${prodElem}],this)">+</button>
                    </div> 
                    <button type="button" id="removeProduct" class="btn btn-danger" onclick="h.remove('${localkey}',[${prodElem}],this)">Remove</button>
                    <div class="d-none">
                      <p id="localKey">${localkey}</p>
                      <p id="findKey">${prodElem}</p>
                    </div>
                  </td>
              </tr>`

        return opsHTML;
    }
    increase(localKey, prodElem, productCount) {
        let parsedJson = JSON.parse(localStorage.getItem(localKey));
        let price = productCount.parentElement.parentElement.parentElement.querySelector('#price').innerHTML;
        for (let i = 0; i < parsedJson.length; i++) {
            if (parsedJson[i][0] == prodElem[0]) {
                parsedJson[i][1] += 1;
                localStorage.setItem(localKey, JSON.stringify(parsedJson));
                productCount.parentElement.querySelector('#productCount').innerHTML = parseInt(productCount.parentElement.querySelector('#productCount').innerHTML) + 1
                productCount.parentElement.parentElement.parentElement.querySelector('#itemPrice').innerHTML = `<div id="price" class="d-none">${price}</div> Price: ` + parseInt(price) * parseInt(productCount.parentElement.querySelector('#productCount').innerHTML);
                this.calcPrice();
            }
        }
    }
    decrease(localKey, prodElem, productCount) {
        let parsedJson = JSON.parse(localStorage.getItem(localKey));
        let price = productCount.parentElement.parentElement.parentElement.querySelector('#price').innerHTML;
        for (let i = 0; i < parsedJson.length; i++) {
            if (parsedJson[i][0] == prodElem[0] && parsedJson[i][1] - 1 > 0) {
                parsedJson[i][1] -= 1;
                localStorage.setItem(localKey, JSON.stringify(parsedJson));
                productCount.parentElement.querySelector('#productCount').innerHTML = parseInt(productCount.parentElement.querySelector('#productCount').innerHTML) - 1
                productCount.parentElement.parentElement.parentElement.querySelector('#itemPrice').innerHTML = `<div id="price" class="d-none">${price}</div> Price: ` + parseInt(price) * parseInt(productCount.parentElement.querySelector('#productCount').innerHTML);
                this.calcPrice();
            }
        }
    }
    remove(localKey, prodElem, productCount) {
        let parsedJson = JSON.parse(localStorage.getItem(localKey));
        let price = productCount.parentElement.parentElement.parentElement.querySelector('#price').innerHTML;
        for (let i = 0; i < parsedJson.length; i++) {
            if (parsedJson[i][0] == prodElem[0]) {
                parsedJson.splice(i, 1);
                localStorage.setItem(localKey, JSON.stringify(parsedJson));
                productCount.parentElement.parentElement.remove();
                this.calcPrice();
            }
        }
    }
    createModal(price){
        this.htmlclear();
        document.querySelector('#products').innerHTML +=`
        <form>
        <div class="form-group">
          <label for="Name">Name Surname</label>
          <input type="Name" class="form-control" id="NameSurname" placeholder="Enter Name Surname">
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="Email" placeholder="Enter email">
        </div>
        <div class="form-group">
          <label for="exampleInputAddres">Addres</label>
          <input type="password" class="form-control" id="Addres" placeholder="Enter Addres">
        </div>
        <button type="submit" class="btn btn-primary" onclick="alert()">Submit</button>
      </form> `
    }
}
let h = new PcConstructor();