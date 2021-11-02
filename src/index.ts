let dimension:number=Number(prompt(Ingrese dimension:)); 
let nombres:string[] = new Array(dimension);
let indice:number;
for (indice=0;indice<dimension;indice++){
  nombres[indice]=prompt(Ingrese el nombre ${indice}:);
}
for (indice=0;indice<dimension;indice++){
  console.log("la persona en la posicion ${indice}es:${nombres}[index]}");

}
