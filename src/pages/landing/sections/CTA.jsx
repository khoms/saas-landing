import Button from "../../../components/button/Button";

const CTA = () => {
  return (
    <div className="pt-16 md:pt-20 w-full flex justify-center font-dm-sans bg-[#EBF7FF]">
      <div className="max-w-[1100px] mb-4 w-full text-center px-5 xl:px-0">
        <div className="mx-auto font-bold text-3xl md:text-5xl text-[#14358A]   tracking-tighter leading-105">
          Let's start growing your business
        </div>
        <div className="max-w-[462px] mx-auto mt-6 mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut id
          nisl tellus rhoncus, imperdiet
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-3  md:gap-6">
          <Button title="Register Now" size="sm" />
          <Button
            title="Contact Us"
            varient="outlined"
            size="sm"
            className="border-2 border-[#6A36FF] text-[#AC5FE6]"
          />
        </div>
      </div>
    </div>
  );
};

export default CTA;
