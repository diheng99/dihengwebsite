import React from "react";

interface TimelineEvent {
  date: string;
  title: string;
  description?: string;
}

const TimeLine: React.FC = () => {
  const events: TimelineEvent[] = [
    { date: "2017-2020", title: "Singapore Polytechnic" },
    { 
      date: "2019-2020 (Sep - Feb)", 
      title: "Internship at Accenture",
      description: "Functional testing of Software" 
    },
    { date: "2022 (Aug - Dec)", title: "Year 1 Semester 1" },
    { date: "2023 (Jan - May)", title: "Year 1 Semester 2" },
    { date: "2023 (Aug - Dec)", title: "Year 2 Semester 1" },
    { 
      date: "2023 (Sep - Nov)", 
      title: "Quant Research at WorldQuant", 
      description: "Develop quantitative alphas to simulate investment returns" 
    },  
    { date: "2024 (Jan - May)", title: "Year 2 Semester 2" },
    { 
      date: "2024 (Jun - Dec)", 
      title: "Internship at Singapore's Government Investment Corporation",
      description: "Enhance ETL process for Investment Risk and Credit Risk projects"
    },
    { date: "2025 (Jan - May)", title: "Exchange Student in the United States" },
  ];

  return (
    <section className="flex flex-col items-center justify-center pt-32">
      <h2 className="text-4xl font-bold text-black mb-12">My Timeline</h2>
      
      <div className="relative max-w-4xl w-full">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300"></div>

        {events.map((event, index) => (
          <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
            {/* Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gray-600 rounded-full border-4 border-white"></div>

            {/* Timeline event box */}
            <div 
              className={`w-64 p-4 bg-gray-900 text-white rounded-lg shadow-lg z-10 ${
                index % 2 === 0 ? "ml-10 text-right" : "mr-10 text-left"
              }`}
            >
              <div className="text-sm font-semibold text-gray-400">{event.date}</div>
              <div className="text-base font-medium">{event.title}</div>
              {event.description && (
                <div className="text-sm text-gray-300 mt-1 whitespace-pre-line">{event.description}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TimeLine;
