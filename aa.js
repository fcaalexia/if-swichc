
var n1 = 10;
var n2 = 20;

if(n1 < n2){
    switch (n1) {
        case 1:
            if(n1 < 15){
                console.log("n1 es menor a 15");
            }else{
                switch(n2){
                    case 20:
                        console.log("n2 es 20");
                    break;
                    case 30:
                        console.log("n2 no es 30");
                    break;
                }
            }
            break;
        case 2:
            console.log("n1 es menor a 20");
            break;
        case "perro":
            console.log("Saca al perro");
            break;
        default:
            console.log("n1 no es menor a 15 o perro");
            break;
    }
}else{
    console.log("n1 es mayor que n2");
}
