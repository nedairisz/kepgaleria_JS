export function htmlOsszeAllit(lista) {
   /*Állítsd össze a hTML kódot */
   /* Ilyesmit: <div class="kep"><img src="" alt=""></div>*4 */

   let txt=""
   for (let index = 0; index < lista.length; index++) {
    const element = lista[index];
    console.log(element) //ez egy objektum
    txt+=`<div class="kep"><img src="${element.kep}" alt="${element.cim}"></div>`
   }
   console.log(txt)
   return txt
}
