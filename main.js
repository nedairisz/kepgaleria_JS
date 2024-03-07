import { KEPEK } from "./adatok.js";
import { htmlOsszeAllit } from "./fuggvenyek.js";

/*1. feladat:  galéria kisképeinek elhelyezése */
/* fogd meg a .galeria elemet */
const galeriaELEM=document.getElementsByClassName("galeria")[0]
console.log(galeriaELEM)

/* írd bele az összeálíltott html képsorozatot */
galeriaELEM.innerHTML=htmlOsszeAllit(KEPEK)

/*2. feladat  A .nagykep divben lévő img elem megfogása */
const nagyimgELEM=document.querySelector(".nagykep img")

/* A .nagykep div megfogása */
const nagykepDivELEM=document.querySelector(".nagykep")

/*3. feladat-  eseménykezelő hozzáadása a kisképekhez  */
/* Az előzőekben létrehozott kisképek megfogása (querySelectorAll) - ez egy lista lesz */
const kiskepELEMEK=document.querySelectorAll(".kep")//LISTA!!

/* eseménykezelő hozzáadása a kisképekhez, ciklussal */
for (let index = 0; index < kiskepELEMEK.length; index++) {
    //const element = kiskepELEMEK[index];
    kiskepELEMEK[index].addEventListener("clisck", function(event){
        console.log(event.target.src)
        nagyimgELEM.src=event.target.src
    })
}

/* Az eseménykezelő függvényében: ha a kisképre kattintunk, akkor a nagykép src attribútumát le kell cserélni a kiskép src attribútumában megadott elérési útvonalra  */
    /*function katt(event){
        console.log(event.target.src)
        nagyimgELEM.src=event.target.src
    }*/

let aktIndex=0

/* 4. feladat .bal és a .jobb gombokra kattintva léptessük a galériát */
/*1. fogd meg a .jobb gombot */
const jobbGOMB=document.querySelector(".jobb")
/*2. tegyél rá egy eseménykezelőt */
jobbGOMB.addEventListener("click", jobbra)

/*3. az eseménykkezelőben az aktindex változó értékét növeld */
/*4. aktINdex változónak megfelelő kép elérési útját cseréld le a nagykepelem img src-jében */
function jobbra(){
    aktIndex++
    //aktIndex=aktIndex % KEPEK.length
    if(aktIndex >= KEPEK.length){
        aktIndex=0
    }
    console.log(aktIndex)
    console.log(KEPEK[aktIndex].kep)
    nagyimgELEM.src=KEPEK[aktIndex].kep
}