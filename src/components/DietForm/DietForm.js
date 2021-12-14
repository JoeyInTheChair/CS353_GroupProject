import React from "react";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../config";
import "./DietForm.css";

const DietForm = () => {
    const userProf = async (event) => {
        event.preventDefault();
        const elementsArray = [...event.target.elements];
        const formData = elementsArray.reduce((accumulator, currentValue) => {
            if(currentValue.id) {
                accumulator[currentValue.id] = currentValue.value;
            }
            return accumulator;
        }, {});
        console.log({ formData });
        const docRef = doc(db, "Users", "dietUser");
        await setDoc(docRef, formData);
    };

    return (
        <div className="DietForm">
            <h1>Fill out form to find out your BMR result</h1>
            <form onSubmit={userProf}>
                <h3>Full Name: <input type="text" id="name" placeholder="Joe Bloggs"></input></h3>
                <h3>Current age: <input type="number" id="age" placeholder="20"></input></h3>
                <h3>Current height (centimetres): <input type="number" id="height" placeholder="123.4" min="0.1" step="0.1"></input></h3>
                <h3>Body Fat: <input type="number" id="bodyFat" placeholder="24.8" min="0.1" step="0.1"></input></h3>
                <h3>Current weight: <input type="number" id="weight" placeholder="45.8" min="0.1" step="0.1"></input></h3>
                <h3>Gender: <select id="gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    </select></h3>
                <h3>Activity Level: <select id="activeLvl">
                    <option value="sedentary">Sedentary</option>
                    <option value="lightly">Lightly</option>
                    <option value="moderately">Moderately</option>
                    <option value="very">Very</option>
                    </select></h3>
                <h3>Diet Preference: <select id="dietPref">
                    <option value="Ketogenic">Ketogenic Diet</option>
                    <option value="LowCarbs">Low Carbohydrate Diet</option>
                    <option value="LowFat">Low Fat Diet</option>
                    <option value="Mediterranean">Mediterranean Diet</option>
                    <option value="Paleo">Paleo Diet</option>
                    <option value="Pescatarian">Pescatarian Diet</option>
                    <option value="Veganism">Veganism</option>
                    <option value="Vegeterianism">Vegeterianism</option>
                    </select></h3>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default DietForm;