import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const StatsBar: React.FC = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const stats = [
    { value: 56, suffix: "+", label: "Customers visit app every month" },
    { value: 10000, suffix: "+", label: "Total downloads of our app" },
    { value: 156000, suffix: "", label: "Total Members of App Users" },
    { value: 4.9, suffix: "", label: "Satisfaction rate from our customers" },
  ];

  return (
    <div
      ref={ref}
      role="region"
      aria-label="Application statistics"
      className="mt-10 px-6 py-20 lg:px-20 mx-4 lg:mx-12 my-12 text-white max-w-full md:max-w-[90%] lg:max-w-[1800px] min-h-[320px] rounded-[30px] md:mt-6 lg:mt-10 md:py-6 lg:py-10 md:px-4 flex items-center justify-center"
      style={{
        backgroundImage: `url(/assets/statsBackground.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full max-w-[90%]">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col text-center md:text-left">
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              {inView ? (
                <CountUp
                  end={stat.value}
                  duration={2}
                  separator=","
                  decimals={stat.value % 1 !== 0 ? 1 : 0}
                />
              ) : (
                "0"
              )}
              {stat.suffix}
            </h3>
            <p className="text-sm sm:text-base md:text-base mt-2">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsBar;
