const btn=document.getElementById("btn");
const input=document.getElementById("input");
const result=document.getElementById("result");
const toSelect=document.getElementById("to-select");
const fromSelect=document.getElementById("from-select");
const toImg=document.getElementById("to-img");
const fromImg=document.getElementById("from-img");

let api = `https://currency-converter-pro1.p.rapidapi.com/convert`;

const url =
  "https://currency-converter-pro1.p.rapidapi.com/latest-rates?base=USD";

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "3a85454212mshfe09c9b1b69ab49p1aa3e3jsn784737adc563",
    "x-rapidapi-host": "currency-converter-pro1.p.rapidapi.com",
  },
};
 
async function getData (){
    const res = await fetch( url, options );
    const data = await res.json();
    console.log( data );
    for ( const d in data.result ){
        const option = document.createElement( "option" )
        option.textContent = d;
        option.value = d;
        fromSelect.appendChild(option)
    }
    for ( const d in data.result ){
        const option = document.createElement( "option" )
        option.textContent = d;
        option.value = d;
        toSelect.appendChild(option)
    }
}

getData();







fromSelect.addEventListener( "change", () =>{
   fromImg.src=`https://flagcdn.com/24x18/${fromSelect.value.toLowerCase().slice(0,2)}.png`   
})
toSelect.addEventListener( "change", () =>{
   toImg.src=`https://flagcdn.com/24x18/${toSelect.value.toLowerCase().slice(0,2)}.png`   
} )


btn.addEventListener( "click", async () =>
{
    if ( input.value.lenght < 1 )
    {
        alert( "Miqdorni kiriting!!" )
    } else
    {
        const res = await fetch( api + `?from=${fromSelect.value}&to=${toSelect.value}&amount=${input.value}`, options);
        const data = await res.json();
        console.log( data )
        result.textContent = input.value + " " + fromSelect.value + "=" + data.result+ " "+ toSelect.value;
    }
} );
