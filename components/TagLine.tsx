import Image from 'next/image';

const TagLine = ({
    icon,
    description, 

}) => {
  return (

      <div className="flex items-center">
        <div className="mr-8">
          <Image
            src={icon}
            alt="frequency"
            width={34}
            height={34}
          />
        </div>

        <div className="font-bold  text=[10px]  md:text-[20px] md:leading-[28.24px] text-[#FFFFFFBF]">
         {description}
        </div>
      </div>

  );
};

export default TagLine;
