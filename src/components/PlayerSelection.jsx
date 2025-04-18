import React from "react";
import "../styles/PlayerSelection.scss";
import useTeamSelection from "./useTeamSelection";

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
  const { team, selectedRoles, handleRoleChange, getSelectedTeam } =
    useTeamSelection();

  return (
    <div className="container">
      <div className="player-list">
        <h2>Available Players</h2>
        {player.map((player, id) => (
          <div key={id} className="player-card">
          <span>{player}</span>
          <div className="buttons">
            <button
              className={team.includes(player) ? "remove-button" : "add-button"}
              onClick={() =>
                handleRoleChange(player, team.includes(player) ? "Remove" : "Player")
              }
            >
              {team.includes(player) ? "Remove" : "Add"}
            </button>
            <button className="c" onClick={() => handleRoleChange(player, "Captain")}>Captain</button>
            <button className="c" onClick={() => handleRoleChange(player, "Vice-Captain")}>Vice Captain</button>
          </div>    
        </div>        
        ))}
      </div>

      <div className="preview">
        <h2>Selected Team ({team.length}/11)</h2>
        {getSelectedTeam().map((p, i) => (
          <div key={i} className="selected-player">
            {p.name} - {p.role}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerSelection;
