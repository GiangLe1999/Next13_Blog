import { Service } from "@/config/site";
import { FC } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import NextImage from "../Common/NextImage";

interface Props {
  service: Service;
  index: number;
}

const ServiceCard: FC<Props> = ({ service, index }): JSX.Element => {
  return (
    <Tilt
      className="xs:w-[250px] w-full"
      options={{ max: 45, scale: 1, speed: 450 }}
    >
      <motion.div
        // Fadein from right, type spring, delay 0.5s * index, duration 0.5
        variants={fadeIn("right", "spring", 0.5 * index, 0.5)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card dark:shadow-lg"
      >
        <div className="bg-tertiary rounded-[20px] p-5 min-h-[200px] flex flex-col justify-evenly items-center">
          <div className="relative w-16 h-16">
            <NextImage src={service.icon} alt={service.title} />
          </div>

          <h3 className="text-white text-[18px] font-bold text-center">
            {service.title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default ServiceCard;
