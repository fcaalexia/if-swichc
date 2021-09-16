var e = "5 arboles"
var a = "10 arboles"
var i = "15 arboles"
var u = "20 arboles"
var d = "aporte"
var o = "ambiente"

if (d) {
    switch (i) {
        case "5 arboles":
             console.log("Gracias por aportar con 5 arboles");
            break;
        case "10 arboles":
            console.log("Gracias por aportar con 10 arboles");
            break;   
        case "15 arboles":
            console.log("Gracias por aportar con 15 arboles");
            break;
        case "20 arboles":
            console.log("Gracias por aportar con 20 arboles");
            break;

        default:
            console.log("aporte para la compra de lo indispensable para criar arboles");
            break;
    }
} else {
    console.log("Gracias por su generocidad y aporte al medio ambiente");
}