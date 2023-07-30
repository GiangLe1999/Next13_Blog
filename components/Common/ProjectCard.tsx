import { Project } from "@/config/site";
import { FC } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { Tilt } from "react-tilt";
import NextImage from "./NextImage";
import Link from "next/link";
import { NewTab } from "@/components/Assets/Icons";

interface Props {
  project: Project;
  index: number;
}

const ProjectCard: FC<Props> = ({ project: post, index }): JSX.Element => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <NextImage src={post.image} alt={post.name} className="rounded-2xl" />

          <div className="absolute inset-0 flex justify-end m-3 cursor-pointer">
            <Link
              href=""
              className="black-gradient w-10 h-10 rounded-full flex items-center justify-center"
            >
              <NewTab className="w-6 h-6" />
            </Link>
          </div>
        </div>

        <Link href="" className="block mt-5">
          <h3 className="text-white font-bold text-xl mb-2">{post.name}</h3>
          <p className="text-secondary text-sm">{post.description}</p>
        </Link>

        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag, index) => (
            <p key={tag.name} className={`text-sm ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
