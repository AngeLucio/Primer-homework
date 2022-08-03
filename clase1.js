
  function BinarioADecimal(num) { 

    let info = num.toString();

    let cero = 0;

    let fori = info.split("").reverse();

        for (let i = 0; i < fori.length; i++)

        cero =  cero + ((2 ** i)* fori[i])

        return cero.join("");

    


        let arro = num.toString();
 
        let cero = 0;

        var arreglo = arro.split("").reverse();
      
          for (let i = 0 ; i < arreglo.length ; i++) {
      
              cero = cero + ( (2 ** i) * arreglo[i] )
      
              }
      
      
          return cero;
      
       } 



function DecimalABinario(num) {

    let bina = [];


    while ( num > 0 ) {

        bina.push(num % 2);

        num = Math.floor(num/2);
    }

    return bina.reverse();

}


