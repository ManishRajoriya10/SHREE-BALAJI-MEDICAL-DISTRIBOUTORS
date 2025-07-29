import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaHospital, FaSmile, FaPills, FaTruck } from "react-icons/fa";
import "../App.css";

const CounterSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    { icon: <FaHospital />, number: 373, text: "Medical Stores Connected" },
    { icon: <FaSmile />, number: 5110, text: "Happy Customers" },
    { icon: <FaPills />, number: 10020, text: "Medicines Delivered" },
    { icon: <FaTruck />, number: 108, text: "Cities We Deliver In" },
  ];

  return (
    <section ref={ref} className="counter-section">
      <div className="overlay"></div>
      <div className="counter-container">
        {stats.map((item, index) => (
          <div key={index} className="counter-item">
            <div className="counter-icon">{item.icon}</div>
            <h2 className="counter-number">
              {inView && <CountUp end={item.number} duration={3} separator="," />}+
            </h2>
            <p className="counter-text">{item.text}</p>
            {index !== stats.length - 1 && <div className="divider"></div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CounterSection;
