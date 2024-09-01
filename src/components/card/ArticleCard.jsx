const ArticleCard = ({ article }) => {
  const { tag } = article;
  const tagBgColor =
    tag === "Marketing"
      ? "bg-orange-500"
      : tag === "Technology"
      ? "bg-blue-500"
      : "bg-green-500";
  return (
    <div className="flex-1  bg-white shadow-md rounded-[10px] overflow-hidden">
      <div className="relative">
        <img
          src={article.imgUrl}
          alt="article-image"
          className="object-cover w-full h-[196px]"
        />
        <div
          className={`absolute top-5 left-6 text-white py-1 px-2 rounded-[5px] ${tagBgColor}`}
        >
          {article.tag}
        </div>
      </div>

      <div className="p-6">
        <div className="space-y-3 ">
          <div className="text-primary font-bold text-2xl leading-110 tracking-tighter leading-2">
            {article.title}
          </div>
          <div className="text-grayishText">{article.content}</div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
