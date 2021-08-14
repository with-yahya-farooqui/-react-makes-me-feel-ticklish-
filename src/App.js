// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import data from "./data.json";
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const ob = {
    color: "darkcyan",
    background: "#ffffff",
    fontSize: 18,
    textAlign: "left",
    paddingLeft: 0,
    width: 600,
  };
  const ob2 = {
    color: "darkgreen",
    background: "#ffffff",
    fontSize: 15,
    textAlign: "left",
    paddingLeft: 15,
  };
  const ob3 = {
    background: "#ffffff",
    borderStyle: "double",
    borderColor: "blue",
    borderRadius: 10,
    borderWidth: 4,
    marginBottom: 20,
    paddingLeft: 30,
    paddingRight: 30,
  };
  const ob4 = {
    width: 400,
    textAlign: "left",
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <span>
            <input
              type="text"
              placeholder="Search"
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            ></input>
          </span>
        </p>
        {data
          .filter((val) => 
          {
            if (searchTerm === "") return val;
            else if (
              val.id.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
              val.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
              val.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
              val.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              val.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
              val.website.toLowerCase().includes(searchTerm.toLowerCase())||
              val.company.catchPhrase.toLowerCase().includes(searchTerm.toLowerCase())||
              val.company.bs.toLowerCase().includes(searchTerm.toLowerCase())||
              val.company.name.toLowerCase().includes(searchTerm.toLowerCase())||
              val.address.city.toLowerCase().includes(searchTerm.toLowerCase())||
              val.address.geo.lat.toLowerCase().includes(searchTerm.toLowerCase())||
              val.address.geo.lng.toLowerCase().includes(searchTerm.toLowerCase())||
              val.address.street.toLowerCase().includes(searchTerm.toLowerCase())||
              val.address.suite.toLowerCase().includes(searchTerm.toLowerCase())||
              val.address.zipcode.toLowerCase().includes(searchTerm.toLowerCase())
              )
              return val;
          })
          .map((val, key) => (
            <div style={ob3}>
              <p>
                <details>
                  <summary style={ob4}>
                    {val.id}. {val.name}
                  </summary>
                  <br></br>
                  Username: {val.username}
                  <br></br>
                  E-mail: {val.email}
                  <br></br>
                  Phone: {val.phone}
                  <br></br>
                  Website: {val.website}
                  <br></br>
                  <details>
                    <summary style={ob}>Company:</summary>
                    <div style={ob2}>
                      Name: {val.company.name}
                      <br></br>
                      Catch Phrase: {val.company.catchPhrase}
                      <br></br>
                      Brand Strategy: {val.company.bs}
                      <br></br>
                    </div>
                  </details>
                  <details>
                    <summary style={ob}>Address:</summary>
                    <div style={ob2}>
                      Suite: {val.address.suite}
                      <br></br>
                      Street: {val.address.street}
                      <br></br>
                      Zipcode: {val.address.zipcode}
                      <br></br>
                      Coordinates: ({Math.abs(val.address.geo.lat)}{" "}
                      {val.address.geo.lat > 0 ? "N" : "S"},
                      {Math.abs(val.address.geo.lng)}{" "}
                      {val.address.geo.lng > 0 ? "E" : "W"})
                    </div>
                  </details>
                </details>
              </p>
            </div>
          ))}
      </header>
    </div>
  );
}

export default App;
