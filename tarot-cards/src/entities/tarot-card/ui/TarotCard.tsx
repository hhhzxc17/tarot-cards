import type { FC } from 'react';

interface TarotCartProps {
  index: number;
  image: string;
  name: string;
}

const TarotCart: FC<TarotCartProps> = ({ index, image, name }) => {
  return (
    <div className="w-55 h-auto flex flex-col justify-center items-center">
      <img src={image} className="rounded-lg border-3 border-[#141e2e]" />
      <span className="text-white text-md font-medium bg-[#141e2e] w-full text-center p-2 rounded-md mt-2">
        {index}. {name}
      </span>
    </div>
  );
};

export default TarotCart;
