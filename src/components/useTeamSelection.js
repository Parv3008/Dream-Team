import { useState } from "react";

export default function useTeamSelection() {
  const [selectedRoles, setSelectedRoles] = useState({});
  const [team, setTeam] = useState([]);

  const handleRoleChange = (player, role) => {
    if (role === "Remove") {
      setTeam((prev) => prev.filter((p) => p !== player));
      setSelectedRoles((prev) => {
        const updated = { ...prev };
        delete updated[player];
        return updated;
      });
      return;
    }

    if (!team.includes(player) && team.length >= 11) {
      alert("You can only select 11 players.");
      return;
    }

    if (!team.includes(player)) {
      setTeam((prev) => [...prev, player]);
    }

    setSelectedRoles((prev) => {
      const updated = { ...prev };

      if (role === "C") {
        for (let key in updated) {
          if (updated[key] === "C") updated[key] = "Player";
        }
      }

      if (role === "VC") {
        for (let key in updated) {
          if (updated[key] === "VC") updated[key] = "Player";
        }
      }

      updated[player] = role;
      return updated;
    });
  };

  const getSelectedTeam = () =>
    team.map((player) => ({
      name: player,
      role: selectedRoles[player] || "Player",
    }));

  return {
    team,
    selectedRoles,
    handleRoleChange,
    getSelectedTeam,
  };
}
