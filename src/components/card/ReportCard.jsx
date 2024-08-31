import keypadIcon from "../../assets/icons/keypad.svg";
const ReportCard = () => {
  return (
    <div className=" max-w-[226px]">
      <div className="inline-block p-4 bg-gradient-to-tr from-[#0097FE] to-[#14358A] rounded-[10px] mb-3">
        <img src={keypadIcon} alt="stats-icon" className="size-8" />
      </div>
      <div className="space-y-3 mt-6">
        <div className="text-primary font-bold text-2xl leading-110 tracking-tighter ">
          Accurate Data Science
        </div>
        <div className="text-grayishText">
          Cum sociis natoque penatibus et magnis dis parturient
        </div>
      </div>
    </div>
  );
};

export default ReportCard;
