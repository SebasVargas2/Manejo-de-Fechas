const fecha1=[]

let contenido=''
let date1=0
let date2=0

const año=document.getElementById('año') //Traermos los input
const mes=document.getElementById('mes')
const dia=document.getElementById('dia')

const limpiar=document.getElementById('limpiar')
limpiar.addEventListener('click',limpia)

const actual=document.getElementById('actual')
actual.addEventListener('click',now)

const agregar=document.getElementById('enviar')
agregar.addEventListener('click',()=>{aniadir()
    agregar.disabled=true
})

const utc=document.getElementById('utc')
utc.addEventListener('click',fNumber)

const parse=document.getElementById('parse')
parse.addEventListener('click',fParse)

const anio=document.getElementById('anio')
anio.addEventListener('click',tAnio)

const mes1=document.getElementById('mes1')
mes1.addEventListener('click',tMes)

const dia1=document.getElementById('dia1')
dia1.addEventListener('click',tDia)



function limpia(){
    document.getElementById('pantalla').innerHTML=''
    document.getElementById('pantalla2').innerHTML=''

}


function aniadir(){
    let year=+año.value //añadimos los datos ingresados a una variable
    let month=+mes.value
    let day=+dia.value
    
    fecha1.push(year,month,day) //ingresamos los valores a un array
    
    año.value=''
    mes.value=''
    dia.value=''
    
    let contenido=fecha1.join("/") //Guardamos la fecha en una variable y la separamos por guion
    contenido+=`    Esto es un stinrg`
    document.getElementById('pantalla2').innerHTML=contenido //imprimimos en html
    
}


function fParse(){
    //No es necesario hacer el cambio a numeros
    let fecha3=new Date(Date.parse(fecha1))
    contenido=fecha3
    document.getElementById('pantalla').innerHTML=contenido
    contenido=''
    
}


function fNumber(){

    let fechaNumber=fecha1.map(elemento => parseInt(elemento)) //Pasamos los valores a numeros
    fechaNumber[1]=fechaNumber[1]-1 
    fechaNumber[2]=fechaNumber[2]+1
    // Se cambia el valor del mes y del dia ya que en el sistema empieza en 0
    let fecha2=new Date(Date.UTC(...fechaNumber)) //Usamos operador de propagacion para tomar cada elemento del array
    //el Metodo UTC recorre desde 0
    
    // let fechaNumber=[2022,1,5]
    // let fecha2=new Date(Date.UTC(...fecha))
    // Fri Feb 04 2022 19:00:00 GMT-0500 (hora estándar de Colombia)
    
    //explicar
    
    contenido=fecha2
    document.getElementById('pantalla').innerHTML=contenido
    contenido=''
    
}

function now(){
    date1=new Date()
    contenido+=date1
    document.getElementById('pantalla2').innerHTML=contenido
    contenido=''
}


function tAnio(){  //Trae el año
    date2=date1.getFullYear();
    contenido=date2
    document.getElementById('pantalla').innerHTML=date2
    contenido=''
}


function tMes(){  //Trae el mes
    date2=date1.getMonth();
    contenido=date2
    document.getElementById('pantalla').innerHTML=date2+1
    contenido=''
}


function tDia(){ //Trae el dia
    date2=date1.getDate();
    contenido=date2
    document.getElementById('pantalla').innerHTML=date2
    contenido=''
}