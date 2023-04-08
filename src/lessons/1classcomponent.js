//ejemplo de componente de clase

// class Saludo extends React.component{
//     render(){
//         return (
//         <h1>
//             ¡hola {this.props.name}!
//         </h1>
//         )    
// }
// }

//JS
function sumar(a,b){

   return a + b 
}

// TS

function sumar(a:number,b:number):number{

    return a + b 
 }
interface User{
    name: string
    lastName: string
    identifiction:string
}
interface   {
    result: number
    message: string
    code: number
    users: User[]

}

 function sumar(a:number,b:number):MiRetornoSuma {

    return {  
        result : a + b ,  
        message: 'success', code: 200,
        users:[
            { name: 'ana', lastName: 'zambramo', identifiction:'2'},
            { name: 'ana', lastName: 'zambramo', identifiction:'2'},
            { name: 'ana', lastName: 'zambramo', identifiction:'2'},
            { name: 'ana', lastName: 'zambramo', identifiction:'2'},
            { name: 'ana', lastName: 'zambramo', identifiction:'2'},
            { name: 'ana', lastName: 'zambramo', identifiction:'2'},
            { name: 'ana', lastName: 'zambramo', identifiction:'2'},

        ]

    }  
 }