import React, { useState } from "react";

const teamMembers = [
  { name: "Alex", description: "Cool bro who loves coding." },
  { name: "Vir", description: "Great bro, has nice Marvel shirt" },
  { name: "Faraz", description: "Anime fan" },
  { name: "Ihsan", description: "Awesome bro" },
  { name: "Tushita", description: "Very Cool bro" },
  { name: "Fidha", description: "Hard working bro" },
  { name: "Dhruw", description: "Valued bro" },
  { name: "Nibras", description: "bro" },
];

const Team = () => {
    const [hoveredMember, setHoveredMember] = useState(null);
    const [expandedMember, setExpandedMember] = useState(null);
  
    return (
      <div>
        <h2>Meet the Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-member"
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
              onClick={() => setExpandedMember(expandedMember === index ? null : index)}
            >
              <div className="member-image">
                <img src={`/images/${member.image}`} alt={member.name} />
              </div>
              <h3>{member.name}</h3>
              {hoveredMember === index && (
                <div className="popup">
                  <p>{member.description}</p>
                </div>
              )}
              {expandedMember === index && (
                <div className="expanded-description">
                  <p>{member.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Team;