import React, { useState } from "react";
import { motion } from "framer-motion";
import alex from "../images/alex.jpg";
import vir from "../images/vir.jpg";
import faraz from "../images/faraz.jpg";
import ihsan from "../images/ihsan.jpg";
import tushita from "../images/tushita.jpg";
import fidha from "../images/fidha.jpg";
import dhruw from "../images/dhruw.jpg";
import nibras from "../images/nibras.jpg";

const teamMembers = [
  { name: "Alex", description: "UX/UI Leader", image: alex },
  { name: "Vir", description: "UX/UI Designer", image: vir },
  { name: "Faraz", description: "Marketing Website", image: faraz },
  { name: "Ihsan", description: "Software Engineer", image: ihsan },
  { name: "Tushita", description: "Product Manager", image: tushita },
  { name: "Fidha", description: "Backend Developer", image: fidha },
  { name: "Dhruv", description: "Marketing", image: dhruw },
  { name: "Nibras", description: "UX/UI Designer", image: nibras },
];

const Team = () => {
  const [hoveredMember, setHoveredMember] = useState(null);
  const [expandedMember, setExpandedMember] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter team members based on search query
  const filteredMembers = teamMembers.filter((member) =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="team-page">
      <h2>Meet the Team</h2>

      

      {/* Team Members Grid */}
      <div className="team-grid">
        {filteredMembers.map((member, index) => (
          <motion.div
            key={index}
            className="team-member"
            onMouseEnter={() => setHoveredMember(index)}
            onMouseLeave={() => setHoveredMember(null)}
            onClick={() => setExpandedMember(expandedMember === index ? null : index)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="member-image">
              <img src={member.image} alt={member.name} loading="lazy" />
            </div>
            <h3>{member.name}</h3>
            {hoveredMember === index && (
              <motion.div
                className="popup"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <p>{member.description}</p>
              </motion.div>
            )}
            {expandedMember === index && (
              <motion.div
                className="expanded-description"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <p>{member.description}</p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Vision, Aim, and Mission Paragraphs */}
      <div className="mission-section">
          <h3>Our Vision</h3>
            <p>
              Our vision is to create a world where technology empowers everyone to achieve their full potential. We strive to innovate and inspire through cutting-edge solutions.
            </p>
            <h3>Our Aim</h3>
            <p>
            The My Watt Smart Home system is a user-friendly platform for managing smart devices, promoting energy efficiency and sustainability. It offers real-time energy monitoring, device control, and gamification, accessible via web and app. Designed for all ages, it provides tailored features for home managers and residents to reduce carbon footprints.
            </p>
            <h3>Our Mission</h3>
            <p>
              Our mission is to inspire and transform the way people live and work through cutting-edge products. We are committed to excellence and user satisfaction.
            </p>
        </div>
    </div>
  );
};

export default Team;