import {OBJEKTUMLISTA, SZAMLISTA, SZOVEGLISTA} from "./adat.js";


$(() => {
    console.log(SZOVEGLISTA);
    rendezesSzoveg(SZOVEGLISTA); /**lista cimet, referencia kerul atadasra */
    console.log(SZOVEGLISTA);
    console.log("********************");

    console.log(SZAMLISTA);
    rendezesSzam(SZAMLISTA); /**lista cimet, referencia kerul atadasra */
    console.log(SZAMLISTA);
    console.log("********************");

    console.log(SZAMLISTA);
    veletlenSorrend(SZAMLISTA); /**lista cimet, referencia kerul atadasra */
    console.log(SZAMLISTA);
    console.log("********************");

    console.log(SZOVEGLISTA);
    veletlenSorrend(SZOVEGLISTA); /**lista cimet, referencia kerul atadasra */
    console.log(SZOVEGLISTA);
    console.log("********************");


    rendezesSzamSzerint(OBJEKTUMLISTA, "kor"); /**lista cimet, referencia kerul atadasra */
    console.log(OBJEKTUMLISTA);
    console.log("********************");


    rendezesSzovegSzerint(OBJEKTUMLISTA, "fajta"); /**lista cimet, referencia kerul atadasra */
    console.log(OBJEKTUMLISTA);
    console.log("********************");


    rendezesSzovegSzerint(OBJEKTUMLISTA, "nev"); /**lista cimet, referencia kerul atadasra */
    console.log(OBJEKTUMLISTA);
    console.log("********************");

})
function rendezesSzoveg(lista){
    /**rendezzuk abc sorrendbe */
    lista.sort();
}
function rendezesSzam(lista){
    /**rendezzuk abc sorrendbe */
    lista.sort(function(a,b){
        console.log(a,b,a-b)
        return a-b //ez az ertek negativ, megcsereli a ket elemet, ha pozitiv nem cserel
    });
}
function veletlenSorrend(lista){
    /**rendezzuk abc sorrendbe */
    lista.sort(function(a,b){
        return Math.random()-0.5; //ez az ertek negativ, megcsereli a ket elemet, ha pozitiv nem cserel
    });
}

function rendezesSzamSzerint(lista, kulcs){
    /**rendezzuk abc sorrendbe */
    lista.sort(function(a, b){
        console.log(a,b)
        return a[kulcs]-b[kulcs]//ez az ertek negativ, megcsereli a ket elemet, ha pozitiv nem cserel
    });
}
/**irjuk át ezt a metodust hogy tetszoleges szoveges kulcsra mükődjön */
function rendezesSzovegSzerint(lista, kulcs){
    /**rendezzuk abc sorrendbe */
    lista.sort(function(a, b){
        if (a[kulcs] > b[kulcs]){
            return 1;
        } else{
            return -1;
        }
       //ez az ertek negativ, megcsereli a ket elemet, ha pozitiv nem cserel

    });
}

function rendezesObjektum(lista, kulcs){
if(typeof kulcs == "number"){
    rendezesSzamSzerint(lista, kulcs)
}else{
    rendezesSzovegSzerint(lista, kulcs)

}
}