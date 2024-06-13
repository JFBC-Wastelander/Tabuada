console.log("Bem vindo a tabuada!\nDigite o número da tabuada que você quer e eu te fornecerei (0 - 10)")

process.stdin.on("data", function(data){
    entrada = Number(data.toString().trim())

    switch (entrada){
        case 0:
            let tabuadaZero = []
            let tabuadaDoZero = {
                zero:"0 * 0 = 0",
                um:"0 * 1 = 0",
                dois:"0 * 2 = 0",
                tres:"0 * 3 = 0",
                quatro:"0 * 4 = 0",
                cinco:"0 * 5 = 0",
                seis:"0 * 6 = 0",
                sete:"0 * 7 = 0",
                oito:"0 * 8 = 0",
                nove:"0 * 9 = 0",
                dez:"0 * 10 = 0",
            }
            tabuadaZero.push(tabuadaDoZero)
            console.log(tabuadaZero)
            entrada = undefined
            break;
        case 1:
            let tabuadaUm = []
            let tabuadaDoUm = {
                zero:"1 * 0 = 0",
                um:"1 * 1 = 1",
                dois:"1 * 2 = 2",
                tres:"1 * 3 = 3",
                quatro:"1 * 4 = 4",
                cinco:"1 * 5 = 5",
                seis:"1 * 6 = 6",
                sete:"1 * 7 = 7",
                oito:"1 * 8 = 8",
                nove:"1 * 9 = 9",
                dez:"1 * 10 = 10",
            }
            tabuadaUm.push(tabuadaDoUm)
            console.log(tabuadaUm)
            entrada = undefined
            break;
        case 2:
            let tabuadaDois = []
            let tabuadaDoDois = {
                zero:"2 * 0 = 0",
                um:"2 * 1 = 2",
                dois:"2 * 2 = 4",
                tres:"2 * 3 = 6",
                quatro:"2 * 4 = 8",
                cinco:"2 * 5 = 10",
                seis:"2 * 6 = 12",
                sete:"2 * 7 = 14",
                oito:"2 * 8 = 16",
                nove:"2 * 9 = 18",
                dez:"2 * 10 = 20",
            }
            tabuadaDois.push(tabuadaDoDois)
            console.log(tabuadaDois)
            entrada = undefined
            break;
        case 3:
            let tabuadaTres = []
            let tabuadaDoTres = {
                zero:"3 * 0 = 0",
                um:"3 * 1 = 3",
                dois:"3 * 2 = 6",
                tres:"3 * 3 = 9",
                quatro:"3 * 4 = 12",
                cinco:"3 * 5 = 15",
                seis:"3 * 6 = 18",
                sete:"3 * 7 = 21",
                oito:"3 * 8 = 24",
                nove:"3 * 9 = 27",
                dez:"3 * 10 = 30",
            }
            tabuadaTres.push(tabuadaDoTres)
            console.log(tabuadaTres)
            entrada = undefined
            break;
        case 4:
            let tabuadaQuatro = []
            let tabuadaDoQuatro = {
                zero:"4 * 0 = 0",
                um:"4 * 1 = 4",
                dois:"4 * 2 = 8",
                tres:"4 * 3 = 12",
                quatro:"4 * 4 = 16",
                cinco:"4 * 5 = 20",
                seis:"4 * 6 = 24",
                sete:"4 * 7 = 28",
                oito:"4 * 8 = 32",
                nove:"4 * 9 = 36",
                dez:"4 * 10 = 40",
            }
            tabuadaQuatro.push(tabuadaDoQuatro)
            console.log(tabuadaQuatro)
            entrada = undefined
            break;
        case 5:
            let tabuadaCinco = []
            let tabuadaDoCinco = {
                zero:"5 * 0 = 0",
                um:"5 * 1 = 5",
                dois:"5 * 2 = 10",
                tres:"5 * 3 = 15",
                quatro:"5 * 4 = 20",
                cinco:"5 * 5 = 25",
                seis:"5 * 6 = 30",
                sete:"5 * 7 = 35",
                oito:"5 * 8 = 40",
                nove:"5 * 9 = 45",
                dez:"5 * 10 = 50",
            }
            tabuadaCinco.push(tabuadaDoCinco)
            console.log(tabuadaCinco)
            entrada = undefined
            break;
        case 6:
            let tabuadaSeis = []
            let tabuadaDoSeis = {
                zero:"6 * 0 = 0",
                um:"6 * 1 = 6",
                dois:"6 * 2 = 12",
                tres:"6 * 3 = 18",
                quatro:"6 * 4 = 24",
                cinco:"6 * 5 = 30",
                seis:"6 * 6 = 36",
                sete:"6 * 7 = 42",
                oito:"6 * 8 = 48",
                nove:"6 * 9 = 54",
                dez:"6 * 10 = 60",
            }
            tabuadaSeis.push(tabuadaDoSeis)
            console.log(tabuadaSeis)
            entrada = undefined
            break;
        case 7:
            let tabuadaSete = []
            let tabuadaDoSete = {
                zero:"7 * 0 = 0",
                um:"7 * 1 = 7",
                dois:"7 * 2 = 14",
                tres:"7 * 3 = 21",
                quatro:"28",
                cinco:"35",
                seis:"42",
                sete:"49",
                oito:"56",
                nove:"63",
                dez:"70",
            }
            tabuadaSete.push(tabuadaDoSete)
            console.log(tabuadaSete)
            entrada = undefined
            break;
        case 8:
            let tabuadaOito = []
            let tabuadaDoOito = {
                zero:"",
                um:"",
                dois:"",
                tres:"",
                quatro:"",
                cinco:"",
                seis:"",
                sete:"",
                oito:"",
                nove:"",
                dez:"",
            }
            tabuadaSete.push(tabuadaDoOito)
            console.log(tabuadaOito)
            entrada = undefined
            break;
        case 9:
            let tabuadaNove = []
            let tabuadaDoNove = {
                zero:"",
                um:"",
                dois:"",
                tres:"",
                quatro:"",
                cinco:"",
                seis:"",
                sete:"",
                oito:"",
                nove:"",
                dez:"",
            }
            tabuadaNove.push(tabuadaDoNove)
            console.log(tabuadaNove)
            entrada = undefined
            break;
        case 10:
            let tabuadaDez = []
            let tabuadaDoDez = {
                zero:"",
                um:"",
                dois:"",
                tres:"",
                quatro:"",
                cinco:"",
                seis:"",
                sete:"",
                oito:"",
                nove:"",
                dez:"",
            }
            tabuadaDez.push(tabuadaDoDez)
            console.log(tabuadaDez)
            entrada = undefined
            break;
    }
})