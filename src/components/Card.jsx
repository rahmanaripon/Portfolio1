import { Player, Controls } from "@lottiefiles/react-lottie-player";

const Card = ({ eachSkillData }) => {
  const { name, lottie } = eachSkillData;

  return (
    <div className="rounded-xl hover:bg-orange-300 hover:shadow-2xl py-3 flex justify-center items-center">
      <div className="space-y-3">
        <Player
          autoplay
          loop
          src={`${lottie}`}
          style={{ height: "100px", width: "150px" }}
        ></Player>
        <h1 className="text-center">{name}</h1>
      </div>
    </div>
  );
};

export default Card;
