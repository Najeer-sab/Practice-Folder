// import { useState } from "react";
// import axios from "axios";

// // App = () => {
// //   const [data, setFetchdata] = useState([]);

// //   useEffect(() => {
// //     axios
// //       .get("https://jsonplaceholder.typicode.com/posts")
// //       .then((res) => setFetchdata(res.data));
// //   }, []);
// //   return (
// //     <>
// //       {data.map((item) => {
// //         const { id, title, body } = item;
// //         return <h2>{title}</h2>;
// //       })}{" "}
// //     </>
// //   );
// // };
// // export default App;


let express=require("express")
let app=express()
let  axios=require("axios")
 .get("https://fakestoreapi.com/products")
 .then((res)=> res.data.map((item)=>console.log(item.title)))


