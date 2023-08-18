import React, { useEffect, useState } from 'react';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import { filterData } from './Data';
import { apiUrl } from './Data';
import { toast } from "react-toastify";
import './App.css';
import Courses from './Components/Courses';
import Loader from './Components/Loader';
function App() {
  const [coursesData, setCoursesData] = useState([]);
  const [loader, setLoader] = useState(false);
  async function getData() {
    try {
      setLoader(true);
      const responce = await fetch(apiUrl);
      const result = await responce.json();
      setCoursesData(result.data);
      toast.success("Fetched Successfully");
    } catch (error) {
      console.log("Not Working ");
    }
    setLoader(false);
  }
  const [categoryName, setcategoryName]=useState("All");
  
  function filterHandler(itemname) { 
    setcategoryName(itemname);
    
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className="App">
      <div>
        <Header />
      </div>

      <div>
        <Navbar
          filterData={filterData}
          categoryName={categoryName}
          filterHandler={filterHandler}
        />
      </div>

      <div>
        {
          loader ? 
          <Loader /> : 
          <Courses coursesData={coursesData} categoryName={categoryName}/>
        }
      </div>

    </div>
  );
}

export default App;
