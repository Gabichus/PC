setTimeout(function () {

    class pc {
        constructor() {
            for (let i = 0; i <= 7; i++) {
                let parsedJson = JSON.parse(localStorage.getItem(prod[i]));
                if (parsedJson.length != 1) {
                    switch (prod[i].slice(5)) {
                        case ('cpu'): this.cpu = parsedJson.slice(1);
                            break;
                        case ('gpu'): this.gpu = parsedJson.slice(1);
                            break;
                        case ('motherboard'): this.motherboard = parsedJson.slice(1);
                            break;
                        case ('ram'): this.ram = parsedJson.slice(1);
                            break;
                        case ('rom'): this.rom = parsedJson.slice(1);
                            break;
                        case ('monitor'): this.monitor = parsedJson.slice(1);
                            break;
                        case ('mouse'): this.mouse = parsedJson.slice(1);
                            break;
                        case ('keyboard'): this.keyboard = parsedJson.slice(1);
                            break;
                    }
                }
            }
        }
        checkStart() {
            if(this.cpu!=null){
                if (this.cpu.length > 1) {
                    console.log("Nu pot sa fie procesoare diferite");
                }
                else this.checkCpuSlotsOnMotherboard();
            }
            else console.log("Nu este ales procesorul");
        }

        checkCpuSlotsOnMotherboard() {
            if(this.motherboard!=null){
                if (json.motherboard[this.motherboard[0][0]].socketNumber >= this.cpu[0][1]) this.checkCpuMotherboardCompatibility();
                else console.log("Numarul de procesoare depaseste nr de socheturi in motherboard");
            } 
            else console.log("Nu este aleas Motherboard")
        }

        checkCpuMotherboardCompatibility() {
            if (json.cpu[this.cpu[0][0]].socket != json.motherboard[this.motherboard[0][0]].socket) console.log("Socketurile nu coincid");
            else this.checkRamCompatitibility();
        }

        checkRamCompatitibility() {
            let check=true;
            if(this.ram!=null){
                this.ram.forEach(element => {
                    if (json.ram[element[0]].type != json.motherboard[this.motherboard[0][0]].ramtype) {
                        console.log("Una din memorii Ram nu coincide cu Motherboard");
                        check=false;
                    }
                });
                if(check) this.allProductPrice();
            } else console.log("Memoria Ram nu este aleasa");
        }

        allProductPrice(){
            
        }

        saveInLocalStorage(){
            console.log(json);
        }

    }

}, 500)