import React, { useState } from "react";

const player = [
  "Rohit Sharma",
  "Virat Kohli",
  "Hardik Pandya",
  "KL Rahul",
  "Jasprit Bumrah",
  "Shubman Gill",
  "Ravindra Jadeja",
  "Rishabh Pant",
  "Suryakumar Yadav",
  "Mohammed Shami",
  "Bhuvneshwar Kumar",
  "Shreyas Iyer",
  "Yuzvendra Chahal",
  "Axar Patel",
  "Sanju Samson",
  "Ishan Kishan",
  "Washington Sundar",
  "Deepak Chahar",
  "Prithvi Shaw",
  "Umran Malik",
  "Kuldeep Yadav",
  "Arshdeep Singh",
];

const PlayerSelection = () => {
    const [selectedRoles, setSelectedRoles] = useState({});
    const [team, setTeam] = useState([]);

    const handleChangeRole = (player, role) =>{
        setSelectedRoles((prev) => {
            const updated = (...prev);

            
        })
    }
  return <div>PlayerSelection</div>;
};

export default PlayerSelection;
