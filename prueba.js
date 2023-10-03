


nombre;
edad;
fechaInicioContribucion;
año;
mes;
dia;
fechaUltimoContribucion; (dia, mes, año);
ultimoPagoSalario; 5,000

if (edad >= 60){ //Comprobando si la persona tine 60 años o más, para iniciar con el proceso.


if (contribucion >=240){ //Comprobando si la persona ya tiene al menos 240 de contribuciones o más.
    if (contribucion == 240){ //Si su contribucion son 240, se aplica el siguiente proceso
        pension = ultimoPago * 0.50;
    }

    if (contribucion > 240){
        if ((contribucion >= 240) && (contribucion <= 245)){
            pension = ultimoPago * 0.50;
        }

        if ((contribucion >= 246) && (contribucion <= 251)){
            pension = ultimoPago * 0.55;
        }

        if ((contribucion >= 252) && (contribucion <= 257)){
            pension = ultimoPago * 0.60;
        }
        if ((contribucion >= 258) && (contribucion <= 263)){
            pension = ultimoPago * 0.65;
        }
        if ((contribucion >= 264) && (contribucion <= 269)){
            pension = ultimoPago * 0.70;
        }
        if ((contribucion >= 270) && (contribucion <= 275)){
            pension = ultimoPago * 0.75;
        }
        if ((contribucion >= 276) && (contribucion <= 281)){
            pension = ultimoPago * 0.80;
        }
        if ((contribucion >= 282) && (contribucion <= 287)){
            pension = ultimoPago * 0.85;
        }
        if ((contribucion >= 288) && (contribucion <= 293)){
            pension = ultimoPago * 0.90;
        }
        if ((contribucion >= 294) && (contribucion <= 299)){
            pension = ultimoPago * 0.95;
        }
        if ((contribucion >= 300) && (contribucion <= 305)){
            pension = ultimoPago * 1;
        }
        if ((contribucion >= 306) && (contribucion <= 311)){
            pension = ultimoPago * 1.05;
        }
        if ((contribucion >= 312) && (contribucion <= 317)){
            pension = ultimoPago * 1.10;
        }
        if ((contribucion >= 318) && (contribucion <= 323)){
            pension = ultimoPago * 1.15;
        }

        if ((contribucion >= 324) && (contribucion <= 329)){
            pension = ultimoPago * 1.20;
        }

        if ((contribucion >= 330) && (contribucion <= 335)){
            pension = ultimoPago * 1.25;
        }
        if ((contribucion >= 336) && (contribucion <= 341)){
            pension = ultimoPago * 1.30;
        }

        if ((contribucion >= 342) && (contribucion <= 347)){
            pension = ultimoPago * 1.35;
        }

        if ((contribucion >= 348) && (contribucion <= 353)){
            pension = ultimoPago * 1.40;
        }

        if ((contribucion >= 354) && (contribucion <= 359)){
            pension = ultimoPago * 1.45;
        }

        if ((contribucion >= 360) && (contribucion <= 365)){
            pension = ultimoPago * 1.50;
        }

        if ((contribucion >= 366) && (contribucion <= 371)){
            pension = ultimoPago * 1.55;
        }

        if ((contribucion >= 372) && (contribucion <= 377)){
            pension = ultimoPago * 1.60;
        }
       
    
        
    } else {
        faltaContribucion = 240 - contribucion;
        console.log(`Le falta ${faltaContribucion} cuotas de contribucion para llegar a los 240 cuotas`);

    }
    




}

} else {
    console.log(`${nombre}, Aun no tiene 60 años de edad para tener derecho a la pension`);
}