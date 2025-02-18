import bannerImg from "../assets/banner.jpg";
const Banner = () => {
  return (
    <div className=" top-64 absolute w-full h-full">
      <div className=" mx-auto rounded-2xl md:h-full  w-7/12  border-2 border-white bg-gray-200/20 backface-visible">
        <div className="w-auto md:h-11/12  m-3">
          <img
            className="object-cover w-full h-full rounded-2xl"
            src={bannerImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
