// import React, { useEffect, useState } from "react";
// const DataFetch = () => {
//   const [data, setData] = useState([]);
//     useEffect(() => {
//     dataTaking();
//   }, []);

//   const dataTaking = () => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => res.json())
//       .then((item) => setData(item));
//   };

//   return (
//     <>
//       {data.map((element, index) => (
//         <h2>{element.title}</h2>
//       ))}
//     </>
//   );
// };
// export default DataFetch;

// import React, { useEffect, useState } from "react"
// import 'bootstrap/dist/css/bootstrap.min.css'

// import { useState } from "react"

// const App = () => {
//   const [users, setUsers] = useState([])

//   const fetchUserData = () => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(response => {
//         return response.json()
//       })
//       .then(data => {
//         setUsers(data)
//       })
//   }

//   useEffect(() => {
//     fetchUserData()
//   }, [])

//   return (
//     <div>
//       {users.length > 0 && (
//         <ul>
//           {users.map(user => (
//             <li key={user.title}>{user.name}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default App;




