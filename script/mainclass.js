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

    createTable() {
        let prod = ['localcpu', 'localgpu', 'localmotherboard', 'localram', 'localrom', 'localmonitor', 'localmouse', 'localkeyboard'];
        this.htmlclear();
        for (let i = 0; i <= 7; i++) {
            let parsedJson = JSON.parse(localStorage.getItem(prod[i]));
            if (parsedJson.length > 0) {
                let opsHTML = "";
                // parsedJson.forEach(element => {
                //     if (element != null) opsHTML += createTd(prodName, element);
                // });

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
    }
}
let h = new PcConstructor();