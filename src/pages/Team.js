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
  { name: "Faraz", description: "Website Designer", image: faraz },
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

      {/* New Introductory Paragraph */}
      <div className="intro-section">
        <h3>Welcome to MyWatt</h3>
        <p>
          Welcome to MyWatt – your partner in creating a smarter, more connected home! We offer the latest in smart home technology, from automated lighting and climate control to advanced robot vacuums, all designed to make your life easier, more comfortable, and secure. Whether you're upgrading your current space or building a fully connected home, our innovative products and expert support are here to guide you every step of the way. Discover the future of home automation with us – where technology enhances your lifestyle effortlessly.
        </p>
      </div>

      {/* Vision, Aim, and Mission Paragraphs */}
      <div className="mission-section">
          <h3></h3>
            <p></p>
          <h3>Our Vision</h3>
            <p>
            We believe your home should make life easier, not more complicated. Our goal is to help you create a space that’s intuitive, safe, and energy-efficient – a place that truly works for you. Whether it’s lights that adjust to your mood or an air conditioner that knows your schedule, we’re here to make your home smarter and your life simpler. At MyWatt, we’re not just about technology; we’re about making your everyday better.          
            </p>
            <h3>Our Aim</h3>
            <p>
            We’re here to make your home life easier, safer, and a little more enjoyable. We want to bring you technology that feels like it’s working with you, not against you – whether it’s saving energy, keeping your family secure, or just making daily routines a little smoother. We want your home to feel like it’s looking out for you, so you can focus on what matters most. Let’s make life at home a little better, together.           
            </p>
            <h3>Our Mission</h3>
            <p>
            Our mission is to make smart home technology accessible, easy, and meaningful for everyone. We want to help you create a space that’s not just connected, but also thoughtful –a place that saves you time, energy, and stress. No complicated setups or tech headaches, just simple, reliable solutions that fit into your daily routine.           
            </p>
        </div>
    </div>
  );
};

export default Team;