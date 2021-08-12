const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}
const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}
console.log(!regresaFalse()); // true

console.warn('Not o la negacion');
console.log(true); // true
console.log(!true); // true

console.warn('And');
console.log(true && true); //true
console.log(true && false); //false


console.log('---------------------');
console.log(regresaFalse() && regresaTrue()); //false

console.log('----------AND (&&)-----------');
regresaFalse() && regresaTrue()


console.warn('OR');
console.log(true || false);
console.log(false || false);
console.log(regresaTrue() || regresaFalse());


console.warn('Asignaciones');
const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = true && 'Hola Mundo' && 150; 
const a2 = 'Hola' && 'Mundo' && soyFalso && true; 
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso' || true;
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso' || true;

console.log({a1, a2, a3, a4, a5});


if (true || true || true || true){
console.log('Hacer algo');
} else {
    console.log('Hacer otra cosa');
}