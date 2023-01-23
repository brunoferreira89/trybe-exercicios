const ang1 = -60;
const ang2 = 90;
const ang3 = 30;

const soma = (ang1 + ang2 + ang3) == 180;

if (soma == 180 && ang1 > 0 && ang2 > 0 && ang3 > 0) {
    console.log(soma);
} else if (soma !== 180 && ang1 > 0 && ang2 > 0 && ang3 > 0) {
    console.log(soma)
} else if (ang1 < 0 || ang2 < 0 || ang3 < 0) {
    console.log("Erro")
}