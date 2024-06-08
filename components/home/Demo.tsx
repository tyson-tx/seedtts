import { ALL_Demo } from "@/config/demo"; // 确保路径正确
import { RoughNotation } from "react-rough-notation";

const Demo = ({
  id,
  locale,
  langName,
}: {
  id: string;
  locale: any;
  langName: string;
}) => {
  const FEATURES = ALL_Demo[`Demo_${langName.toUpperCase()}`];

  return (
    <section
      id={id}
      className="flex flex-col justify-center lg:max-w-7xl md:max-w-5xl w-[95%] mx-auto md:gap-14 py-6"
    >
      <h2 className="text-center text-white">
        <RoughNotation type="highlight" show={true} color="#2563EB">
          {locale.title}
        </RoughNotation>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {FEATURES?.map((feature, index) => (
          <div
            key={index}
            className={`
              flex flex-col items-center text-center px-8 py-6 border-b
              ${index % 3 !== 2 ? "md:border-r" : ""}
              ${index < 3 ? "lg:border-b" : ""}
            `}
          >
            {/* <div className="p-4 w-16 h-16 dark:text-white rounded-full flex items-center justify-center">
              {feature.icon &&
                React.createElement(feature.icon, { className: "text-2xl" })}
            </div> */}
            <p className="text-xl font-semibold mb-2">{feature.content}</p>
            {feature.mediaUrl && (
              <audio controls className="mt-4">
                <source src={feature.mediaUrl} type="audio/wav" />
                Your browser does not support the audio element.
              </audio>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Demo;
