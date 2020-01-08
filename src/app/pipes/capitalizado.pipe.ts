import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'capitalizado'})

export class CapitalizadoPipe implements PipeTransform {
    transform(value: string, todas:boolean = true): string {
        
        value = value.toLowerCase();//convertir el contenido a minuscula
        //console.log(value);
        
        let nombres = value.split(" ");//agregar al arreglo despues de cada espacio
        //console.log(nombres);
        
        if (todas) {//si quiere todas capitalizadas
            for (let i in nombres) {//recorrer arreglo 
                //Colocar en Mayuscula la primera letra de cada nombre
                nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substr(1);
            }
        }else{
            nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1);
        }
        

        //Unir nombres en un string, separados por espacio
        return nombres.join(" ");
    }
}