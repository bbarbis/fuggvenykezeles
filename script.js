import {SZAMLISTA, SZOVEGLISTA} from "./adat.js";


$(function(){
    console.log(SZOVEGLISTA);
    rendezesSzoveg(SZOVEGLISTA);/**lista cimet, referencia kerul atadasra */
    console.log(SZOVEGLISTA);
    console.log("********************");
    console.log(SZOVEGLISTA);
    rendezesSzoveg(SZOVEGLISTA);/**lista cimet, referencia kerul atadasra */
    console.log(SZOVEGLISTA);
    console.log("********************");
})
function rendezesSzoveg(lista){
    /**rendezzuk abc sorrendbe */
    lista.sort();
}