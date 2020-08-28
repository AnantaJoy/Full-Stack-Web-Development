var ageRahim = 32;
var ageKarim = 43;
var ageJashim = 34;

if (ageRahim> ageKarim && ageRahim > ageJashim) {
    console.log("Rahim is the eldest");
}
else if (ageKarim > ageRahim && ageKarim > ageJashim) {
    console.log("Karim is the eldest");
}
else{
    console.log("Jashim is the eldest");
}

var maxAge = Math.max(ageJashim,ageKarim,ageRahim);
console.log(maxAge);