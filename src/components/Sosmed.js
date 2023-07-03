import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { AiOutlineGitlab } from "react-icons/ai";

const Sosmed = (props) => {
  const styles = props.text ? props.text : "text-2xl";
  return (
    <div className={`text-slate-400 flex gap-4 items-center ${styles}`}>
      <a
        href="https://www.instagram.com/mhd.fikri4402/"
        target="_blank"
        rel="noreferrer">
        <BsInstagram className={"hover:text-pink-600"} />
      </a>
      <a href="https://github.com/ClaysHere" target="_blank" rel="noreferrer">
        <BsGithub className={"hover:text-black"} />
      </a>
      <a
        href="https://www.linkedin.com/in/m-fikri-19bb99241/"
        target="_blank"
        rel="noreferrer">
        <BsLinkedin className={"hover:text-blue-500"} />
      </a>
      <a href="https://twitter.com/login" target="_blank" rel="noreferrer">
        <BsTwitter className={"hover:text-blue-400"} />
      </a>
      <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
        <BsYoutube className={"hover:text-red-500"} />
      </a>
      <a
        href="https://gitlab.com/muhammadfikri4402"
        target="_blank"
        rel="noreferrer">
        <AiOutlineGitlab className={"hover:text-orange-500"} />
      </a>
    </div>
  );
};

export default Sosmed;
