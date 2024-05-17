let LugarElevador = 2
const elevador = document.querySelector(".elevador")
const cadeirante = document.querySelector(".cadeirante")
const styleBlock = `display: block`
const styleNone = `display: none`
const style = `background-color: red;`

function desce() {

    const elevadorAbrido = document.querySelector(".elevadorImg2")
    const elevadorFechado = document.querySelector(".elevadorImg1")
    const element = document.querySelector(".bntBaixo")




    if(LugarElevador == 1) {
        elevadorAbrido.style.cssText = styleBlock
        const style = `
    background-color: red;`
        const element = document.querySelector(".bntBaixo")
        element.style.cssText = style;


        setTimeout(() => {
            const style = `
    background-color: whitegray;`
            let sobe = `top: 5.7%`
            elevadorFechado.style.cssText = styleBlock
            elevadorAbrido.style.cssText = styleNone
            elevador.style.cssText = sobe
            element.style.cssText = style;
        }, "2000");

        setTimeout(() => {
            let sobe = `top: 22.7%`
            elevador.style.cssText = sobe
        }, "2500");

        setTimeout(() => {
            let sobe = `top: 47.7%`
            elevador.style.cssText = sobe
            elevadorFechado.style.cssText = styleNone
            elevadorAbrido.style.cssText = styleBlock

        }, "3000");


    } else {

        elevadorFechado.style.cssText = styleNone
        elevadorAbrido.style.cssText = styleBlock
        element.style.cssText = style;
        setTimeout(() => {
            const style = `
    background-color: whitegray;`
            const element = document.querySelector(".bntBaixo")
            element.style.cssText = style;
        }, "1500");

        setTimeout(() => {
            const style = `
    background-color: whitegray;`
            let sobe = `top: 42.7%`
            elevadorFechado.style.cssText = styleBlock
            elevadorAbrido.style.cssText = styleNone
            elevador.style.cssText = sobe
            cadeirante.style.cssText = styleNone
        }, "3000");

        setTimeout(() => {
            let sobe = `top: 22.7%`
            elevador.style.cssText = sobe
        }, "3500");

        setTimeout(() => {
            let sobe = `top: 5.7%`
            elevador.style.cssText = sobe
            elevadorFechado.style.cssText = styleNone
            elevadorAbrido.style.cssText = styleBlock
            cadeirante.style.cssText = styleBlock
            cadeirante.style.cssText = sobe
        }, "4000");

    }
    LugarElevador = 1
}

function subi() {

    const elevadorAbrido = document.querySelector(".elevadorImg2")
    const elevadorFechado = document.querySelector(".elevadorImg1")
    const element = document.querySelector(".bntCima")

    if (LugarElevador == 2) {
        elevadorAbrido.style.cssText = styleBlock

        const style = `
    background-color: red;`
        const element = document.querySelector(".bntCima")

        element.style.cssText = style;


        setTimeout(() => {
            const style = `
    background-color: whitegray;`
            let sobe = `top: 42.7%`
            elevadorFechado.style.cssText = styleBlock
            elevadorAbrido.style.cssText = styleNone
            elevador.style.cssText = sobe
            element.style.cssText = style;
        }, "2000");

        setTimeout(() => {
            let sobe = `top: 22.7%`
            elevador.style.cssText = sobe
        }, "2500");

        setTimeout(() => {
            let sobe = `top: 5.7%`
            elevador.style.cssText = sobe
            elevadorFechado.style.cssText = styleNone
            elevadorAbrido.style.cssText = styleBlock

        }, "3000");
        setTimeout(() => {
            elevadorFechado.style.cssText = styleBlock
            elevadorAbrido.style.cssText = styleNone

        }, "4000");


        LugarElevador = 2
    }
    else {


        elevadorFechado.style.cssText = styleNone
        elevadorAbrido.style.cssText = styleBlock

        element.style.cssText = style;

        setTimeout(() => {
            const style = `
    background-color: whitegray;`
            const element = document.querySelector(".bntCima")
            element.style.cssText = style;
        }, "1500");

        setTimeout(() => {
            const style = `
    background-color: whitegray;`
            let sobe = `top: 5.7%`
            elevadorFechado.style.cssText = styleBlock
            elevadorAbrido.style.cssText = styleNone
            elevador.style.cssText = sobe
            cadeirante.style.cssText = styleNone

        }, "3000");

        setTimeout(() => {
            let sobe = `top: 22.7%`
            elevador.style.cssText = sobe
        }, "3500");

        setTimeout(() => {
            let sobe = `top: 52.7%`
            elevador.style.cssText = sobe
            elevadorFechado.style.cssText = styleNone
            elevadorAbrido.style.cssText = styleBlock
            cadeirante.style.cssText = styleBlock
            cadeirante.style.cssText = sobe

        }, "4000");

        LugarElevador = 2
    }
}
