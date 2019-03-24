
class pc {
    constructor() {
        let prod = ['localcpu', 'localgpu', 'localmotherboard', 'localram', 'localrom', 'localmonitor', 'localmouse', 'localkeyboard'];
        this.json = h.getJson();
        for (let i = 0; i <= 7; i++) {
            let parsedJson = JSON.parse(localStorage.getItem(prod[i]));
            switch (prod[i].slice(5)) {
                case ('cpu'): this.cpu = parsedJson;
                    break;
                case ('gpu'): this.gpu = parsedJson;
                    break;
                case ('motherboard'): this.motherboard = parsedJson;
                    break;
                case ('ram'): this.ram = parsedJson;
                    break;
                case ('rom'): this.rom = parsedJson;
                    break;
                case ('monitor'): this.monitor = parsedJson;
                    break;
                case ('mouse'): this.mouse = parsedJson;
                    break;
                case ('keyboard'): this.keyboard = parsedJson;
                    break;
            }
        }
    }
    checkStart() {
        if (this.cpu != "") {
            if (this.cpu.length > 1) {
                console.log("Nu pot sa fie procesoare diferite");
            }
            else this.checkCpuSlotsOnMotherboard();
        }
        else console.log("Nu este ales procesorul");
    }

    checkCpuSlotsOnMotherboard() {
        if (this.motherboard != "") {
            if (this.json.motherboard[this.motherboard[0][0]].socketNumber >= this.cpu[0][1]) this.checkCpuMotherboardCompatibility();
            else console.log("Numarul de procesoare depaseste nr de socheturi in motherboard");
        }
        else console.log("Nu este aleas Motherboard")
    }

    checkCpuMotherboardCompatibility() {
        if (this.json.cpu[this.cpu[0][0]].socket != this.json.motherboard[this.motherboard[0][0]].socket) console.log("Socketurile nu coincid");
        else this.checkRamCompatitibility();
    }

    checkRamCompatitibility() {
        let check = true;
        if (this.ram != "") {
            this.ram.forEach(element => {
                if (this.json.ram[element[0]].type != this.json.motherboard[this.motherboard[0][0]].ramtype) {
                    console.log("Una din memorii Ram nu coincide cu Motherboard");
                    check = false;
                }
            });
            if (check) this.checkDiscount();
        } else console.log("Memoria Ram nu este aleasa");
    }

    saveShopingCart(){
        let tr=document.querySelectorAll('#Name');
        let nameProductList=[];
        for(let i = 0; i<tr.length;i++) nameProductList.push(tr[i].textContent.slice(6));
        return nameProductList;
    }

    checkDiscount() {
        let check = false;
        let discountProcent = 0;
        let discInput = document.querySelector('#discountInput').value;
        let price = parseInt(document.querySelector('#allPrice').innerHTML.slice(13));
        for (let i = 0; i < this.json.discount.length; i++) if (parseInt(discInput) == this.json.discount[i].cod) {
            check = true;
            discountProcent = this.json.discount[i].procent;
        }
        if (check) {
            price = (1 - discountProcent / 100) * price;
            alert("Sa Activat reducarea de " + discountProcent + "% pretul e " + price)
            h.createModal(price,this.saveShopingCart());
        }
        else {
            if (discInput = "") {
                alert("Cod Gresit")
                discInput = "";
            }
            else{
                 h.createModal(price,this.saveShopingCart());
                }
        }
    }


}

