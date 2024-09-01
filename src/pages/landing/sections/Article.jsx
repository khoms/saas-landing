import Button from "../../../components/button/Button";
import ArticleCard from "../../../components/card/ArticleCard";

const Article = () => {
  return (
    <div className="py-16 md:py-20 w-full flex justify-center font-dm-sans">
      <div className="max-w-[1100px] mb-4 w-full  px-5 md:px-0">
        <div className="mx-auto font-bold text-5xl text-[#14358A]  w-[580px] text-center tracking-tighter leading-105">
          Our article on grow & tech
        </div>
        <div className="flex flex-col gap-10  mt-16 mb-12 md:gap-6 md:flex-row ">
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>

        <div className="flex justify-center">
          <Button title="Learn More" size="sm" />
        </div>
      </div>
    </div>
  );
};

export default Article;
