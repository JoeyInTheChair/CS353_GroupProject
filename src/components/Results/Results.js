import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "@firebase/firestore";
import LowCarbs from './images/LowCarbs.PNG';
import Ketogenic from './images/Ketogenic.PNG';
import LowFat from './images/LowFat.PNG';
import Mediterranean from './images/Mediterranean.PNG';
import Paleo from './images/Paleo.PNG';
import Pescatarian from './images/Pescatarian.PNG';
import Veganism from './images/Veganism.PNG';
import Vegetarianism from './images/Vegetarianism.PNG';
import { db } from "../../config";
import "./Results.css";

const DietInfo = ({dietPref}) => {
    switch(dietPref) {
        case "LowCarbs": return <img src= { LowCarbs } alt="" />;
        case "Ketogenic": return <img src= { Ketogenic } alt="" />;
        case "LowFat": return <img src= { LowFat } alt="" />;
        case "Mediterranean": return <img src= { Mediterranean } alt="" />;
        case "Paleo": return <img src= { Paleo } alt="" />;
        case "Pescatarian": return <img src= { Pescatarian } alt="" />;
        case "Veganism": return <img src= { Veganism } alt="" />;
        case "Vegeterianism": return <img src= { Vegetarianism } alt="" />;
        default: return <div />;
    }
}
const BMR = ({gender, weight, height, age}) => {
    var bmr;
    if(gender === "male") {
        bmr = 66 + (13.7*weight) + (5*height) - (6.8*age);
      }
      else {
        bmr = 665 + (9.6*weight) + (1.8*height) - (4.7*age);
      }
      return <h3>Your BMR results: {bmr}</h3>;
}
const ActiveMulti = ({gender, weight, height, age, activeLvl}) => {
    console.log("User activity: " + activeLvl);
    var bmr;
    if(gender === "male") {
        bmr = 66 + (13.7*weight) + (5*height) - (6.8*age);
      }
      else {
        bmr = 665 + (9.6*weight) + (1.8*height) - (4.7*age);
      }
    var active;
      switch (activeLvl) {
        case "sedentary":
            active = bmr*1.2;
            break;

        case "lightly":
            active = bmr*1.375;
            break;

        case "moderately":
            active = bmr*1.725;
            break;

        case "very":
            active = bmr*1.9;
            break;
        default: break;
      }
      console.log(active);
      return <h3>Your Activity Multiplier: {active}</h3>
}
const Results = () => {
    const [users, setUsers] = useState([]);
    console.log(users);
    useEffect(
        () => 
            onSnapshot(collection(db, "Users"), (snapshot) => {
                setUsers(snapshot.docs.map(doc => ({...doc.data(), id:doc.id})))
            }),
         []
        );
    return (
        <div className="Results">
            {users.map((user) => (
                <div key={user.id}>
                    <h1>Welcome {user.name}, here are your results:</h1>
                    <BMR gender={user.gender} weight={user.weight} height={user.height} age={user.age}/>
                    <ActiveMulti gender={user.gender} weight={user.weight} height={user.height} age={user.age} activeLvl={user.activeLvl}/>
                    <DietInfo dietPref={user.dietPref} />
                </div>
            ))}         
        </div>
    )
}

export default Results;