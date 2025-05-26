import { useState, type FC } from 'react';

interface TarotCartProps {
  index: number;
  image: string;
  name: string;
}

const TarotCart: FC<TarotCartProps> = ({ index, image, name }) => {
  const [isLoad, setIsLoad] = useState<boolean>(false);

  return (
    <div className="w-50 h-auto flex flex-col justify-center items-center">
      <img
        src={image}
        className={`rounded-lg border-3 border-[#141e2e] ${isLoad ? 'opacity-100 scale-100' : 'opacity-0 scale-50'} w-50 h-85 transition-all`}
        onLoad={() => setIsLoad(true)}
      />
      <span className="text-white text-md font-medium bg-[#141e2e] w-full text-center p-2 rounded-md mt-2">
        {index}. {name}
      </span>
    </div>
  );
};

export default TarotCart;
