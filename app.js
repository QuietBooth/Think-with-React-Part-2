
let Container = document.getElementById("react-container")

// ! Class method

// class ReactContainer extends React.Component{
//     render(){
//         return(
            // <div>
            //     Hello Welcome to Kalvium
            //     <div>Let's Rock and Rool with Kalvium</div>
            // </div>
//         )
//     }
// }

// ReactDOM.render(<ReactContainer/>,Container)

// ! Function Methodn

function ReactContainer(){
    return(
        <div>
            Hello Kalvium
        </div>    
    )
}

ReactDOM.render(<ReactContainer/>,Container)



