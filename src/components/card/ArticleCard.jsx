const ArticleCard = () => {
  return (
    <div className="flex-1  bg-white shadow-md rounded-[10px] overflow-hidden">
      <div className="relative">
        <img
          src="https://images.anandtech.com/doci/20051/Apple_iPhone_2023_Wonderlust_678x452.jpg"
          alt="article-image"
          className="object-cover w-full h-[196px]"
        />
        <div className="absolute top-5 left-6 text-white py-1 px-2 rounded-[5px] bg-orange-400">
          Technology
        </div>
      </div>

      <div className="p-6">
        <div className="space-y-3 ">
          <div className="text-primary font-bold text-2xl leading-110 tracking-tighter leading-2">
            Digital Marketing Strategy in 2021
          </div>
          <div className="text-grayishText">
            Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies
            nisi. Nam eget dui. Etiam rhoncus. Maecenas..
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
