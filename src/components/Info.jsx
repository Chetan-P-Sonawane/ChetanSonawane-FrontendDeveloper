import { useState, useEffect } from "react";
import axios from "axios";

const Info = () => {
  // stored the data here
  const [capsules, setCapsules] = useState([]);

  // stored the search here
  const [search, setSearch] = useState("");

  // Fetching data from API
  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v3/capsules")
      .then((response) => setCapsules(response.data)) // Update the state variable with the data
      .catch((error) => console.log(error));
  }, []); 

  // Filter the data based on the search value
  const filteredCapsules = capsules.filter((capsule) =>
  capsule.capsule_serial.toLowerCase().includes(search.toLowerCase()) ||
  capsule.capsule_id.toLowerCase().includes(search.toLowerCase()) ||
  capsule.status.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div id="info">
      <div className="searchcontainer">
      <h1>SpaceX Capsules</h1>
      <input id="search"
        type="text"
        placeholder="Search by capsule ID..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      /></div>
      <div className="tablecontanier">
      <table>
        <thead>
          <tr>
             <th>Capsule Serial</th>
            <th>Capsule ID</th>
            <th>Status</th>
            <th>Landings</th>
            <th>Type</th>
            <th>Reuse Count</th>
            <th>Original Launch</th>
          </tr>
        </thead>
        <tbody>

          { 
            
            filteredCapsules.map((capsule) => (
            <tr key={capsule.capsule_serial}>
              <td>{capsule.capsule_serial}</td>
              <td>{capsule.capsule_id}</td>
              <td>{capsule.status}</td>
              <td>{capsule.landings}</td>
              <td>{capsule.type}</td>
              <td>{capsule.reuse_count}</td>
              <td>{capsule.original_launch}</td>
            </tr> 
          ))
          }
      
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Info;
