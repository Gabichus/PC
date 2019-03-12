setTimeout(function(){

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
    checkNumberCpu() {
        try {
            if (this.cpu.length > 1) console.log("Nu pot sa fie procesoare diferite");
        }
        catch (e) {
            console.log("Nu este ales procesorul");
        }
    }
    checkCpuMotherboardCompatibility(){
       if(json.cpu[this.cpu[0][0]].socket==json.motherboard[this.motherboard[0][0]].socket) console.log("Socketurile coincid");
    }
}

let h = new pc();
   h.checkNumberCpu();
   h.checkCpuMotherboardCompatibility();




},500)