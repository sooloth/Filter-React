import "./App.css";
import { useState } from "react";
import { Users } from "./Components/User/User";
import Table from "./Components/table/Table";
function App() {
  const [query, setQuery] = useState("");
  const keys = ["firstname", "lastname", "email"];

  console.log(Users[0]["lastname"]);

  const search = (data) => {
    return data.filter(
      (item) => keys.some((key) => item[key].toLowerCase().includes(query))
      // item.firstname.toLowerCase().includes(query) ||
      // item.lastname.toLowerCase().includes(query) ||
      // item.email.toLowerCase().includes(query)
    );
  };
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search ..."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      {/* <Table data={[]} /> */}
      <Table data={search(Users)} />
      {/* <ul className="list">
        {Users.filter((user) =>
          user.firstname.toLowerCase().includes(query)
        ).map((user) => (
          <li key={user.id} className="listItem">
            {user.firstname}
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default App;

// import "./App.css";
// import { Users } from "./Components/User/User";
// import { useState } from "react";
// function App() {
//   const [query, setQuery] = useState("");
//   console.log(
//     Users.filter((user) => user.firstname.toLowerCase().includes("po"))
//   );
//   return (
//     <div className="App">
//       <input
//         type="text"
//         placeholder="Search..."
//         className="search"
//         onChange={(e) => setQuery(e.target.value)}
//       />
//       <ul className="list">
//         {Users.filter((user) =>
//           user.firstname.toLowerCase().includes(query)
//         ).map((user) => (
//           <li key={user.id} className="listItem">
//             {user.firstname}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
