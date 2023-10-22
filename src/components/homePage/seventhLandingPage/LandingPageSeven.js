import React, { useState } from "react";
import "./LandingPageSeven.css";
import expandImg from "./expand-btn (2).svg";

export default function HomePageEightSec() {
  const [expandedItem, setExpandedItem] = useState(null);
  const animationDuration = 0.5; // Customize the animation duration here (in seconds)
  const maxHeight = "1000px"; // Adjust to a suitable value

  const toggleExpand = (item) => {
    if (expandedItem === item) {
      setExpandedItem(null);
    } else {
      setExpandedItem(item);
    }
  };

  let faqItems = [];
  faqItems = JSON.parse(localStorage.getItem('CurrentFAQ'));
  if (faqItems != null) {
    return (
      <>
        <h2 id="faqs-heading">
          Any <span>Queries?</span>
        </h2>
        <div className="landing-page-seven">
          {
            faqItems.map((faq, index) => {
              const isExpanded = expandedItem === index;
              const containerStyle = {
                overflow: isExpanded ? "visible" : "hidden",
              };

              const cardStyle = {
                maxHeight: isExpanded ? maxHeight : "0",
                transition: `max-height ${animationDuration}s ease`,
              };

              return (
                <div key={index} className="faqs-container" style={containerStyle}>
                  <div className="faqs">
                    <p>{faq.question}</p>
                    <img
                      src={expandImg}
                      alt="/"
                      className="expand-icon"
                      style={{
                        transform: `rotate(${isExpanded ? "180deg" : "0"})`,
                        transition: `transform ${animationDuration} ease`,
                      }}
                      onClick={() => toggleExpand(index)}
                    />
                  </div>
                  <div className="faq-card" style={cardStyle}>
                    <p className="faq-content"><br /><br />{faq.answer}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </>
    );
  } else {
    return (<></>);
  }

}
