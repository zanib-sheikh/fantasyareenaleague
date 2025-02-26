
import arenalogo from "../assets/arenalogo.png";
import areenalogoa from "../assets/areenalogoe.png";
import Card from "../assets/card.jpg"; 
import feature from "../assets/feature.png";
import ball from "../assets/ball.png";
import bronze from "../assets/bronze.png";
import silver from "../assets/silver.png";
import Groupp from "../assets/Groupp.png";
import phone from "../assets/phone.png";
import trophy from "../assets/trophy.png";

import play from "../assets/play.jpg";
import React from "react";
import logoa from "../assets/logoa.png";
import { useTranslation } from 'react-i18next';
import { useForm, ValidationError } from '@formspree/react';




function Home() {
  
  

  const { i18n } = useTranslation();
  const { t } = useTranslation();
 
 
  
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
      document.body.setAttribute('dir', lng === 'ar' ? 'rtl' : 'ltr'); 
    };
  
    const [state, handleSubmit] = useForm("xbldbpon"); 
    if (state.succeeded) {
      return <p className="text-black text-center bg-white font-bold text-xl px-2 py-3">{t("Successfully Submitted !")}</p>;
    }
 
 
const carousel = document.getElementById('carousel');
const lines = document.querySelectorAll('.absolute .h-1'); 


function slideTo(index) {
  const slideWidth = carousel.children[0].offsetWidth + 12; 
  carousel.scrollLeft = slideWidth * index;
  
  
  lines.forEach((line, i) => {
    if (i === index) {
      line.style.backgroundColor = 'yellow'; 
    } else {
      line.style.backgroundColor = 'white'; 
    }
  });
}

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  
  return (
    <div className="min-h-screen font-montserrat bg-[rgb(29,30,31)] flex-grow flex flex-col overflow-x-hidden sm:px-6 md:px-0 lg:px-0 text-white items-center px-0">

  <div className="fixed bottom-5 right-5 z-30">
  <button className="flex items-center justify-center bg-green-700 text-white py-1 px-2 rounded-xl text-sm font-semibold shadow-lg transition duration-300 hover:bg-green-700">
    <span className="flex-1 py-0 text-center bg-green-700 hover:bg-gray-800 rounded-l-lg transition-colors duration-300" onClick={() => changeLanguage('en')}
     > Eng
    </span>

    <span className="border-l-2 border-white h-6 mx-2"></span>

    <span className="flex-1 py-0 text-center bg-green-700 hover:bg-gray-800 rounded-r-lg transition-colors duration-300" onClick={() => changeLanguage('ar')}>
    العربية
    </span>
  </button>
</div>

  
<div 
  className={`absolute  w-full h-full z-1 shadow-lg border-collapse clip-parallelogram-mirror 
    ${i18n.language === "ar" ? "lg:left-0 lg:transform lg:scale-x-[-1] lg:right-auto" : "lg:right-0 lg:left-auto"}`} 
></div>

<div 
  className={`absolute w-full h-full z-1 shadow-lg border-collapse clip-parallelogram-mirror 
    ${i18n.language === "ar" ? "lg:left-0 lg:transform lg:scale-x-[-1] lg:right-auto" : "lg:right-0 lg:left-auto"}`} 
></div>

  <div className="flex flex-col lg:flex-row mt-11 lg:mt-0 px-6 lg:px-11 mb-8  lg:pr-8 items-center justify-center w-full relative">
   
<div
  className={`flex-1 max-w-lg  mt-0 lg:mt-0 lg:mb-26 lg:pl-16 lg:pr-0.5  mb-11 ${
    i18n.language === "ar" ? "lg:text-start lg:pr-2 text-center" : "lg:text-left  lg:pl-11 text-start"
  }`}
>
  {/* Main Heading */}
  <h1
    className={`lg:text-3xl text-4xl  font-extrabold text-[#3C6D00] mb-4 ${
      i18n.language === "ar" ? "lg:text-start text-center lg:text-4xl text-4xl lg:pr-16 pr-0" : "lg:text-left text-center pr-0 "
    }`}
  >
    {t("home.beReady")} <span className="text-white">{t("home.experience")}</span>
  </h1>

  <div className="flex justify-center animate-none lg:hidden mt-8 mb-10">
    <img
       src={i18n.language === "ar" ? arenalogo : areenalogoa}
      alt="Group Icons"
      className="w-64 sm:w-64 h-64 sm:h-64 object-contain"
    />
  </div>

  <h3
    className={`text-xl sm:text-2xl text-gray-300 font-semibold mb-4 ${
      i18n.language === "ar" ? "lg:text-right text-center lg:pr-16 pr-0" : "lg:text-left text-center"
    }`}
  >
    {t("home.fromFantasyToVictory")}
  </h3>
  <p
    className={`text-gray-100 mb-6 mt-6 leading-relaxed ${
      i18n.language === "ar" ? "lg:text-right text-center lg:pr-16 pr-0" : "lg:text-left text-center"
    }`}
  >
    {t("home.description")}
  </p>

  <a href="#signup-form">
<button
  className={`mt-6 lg:mt-16 flex mx-auto lg:mx-0 items-center  px-2 py-2 bg-white hover:bg-gray-200 hover:text-black border-2 border-b-4 border-black rounded-full text-gray-900 font-semibold text-sm shadow-lg transition duration-300 ${
    i18n.language === "ar" ? "mr-auto sm:mx-auto " : "ml-auto sm:mx-auto"
  }`}
>
  {t("home.signUpButton")}
  <span 
    className={`flex items-center justify-center w-8 h-8 bg-green-800 text-white rounded-full shadow-inner ${
      i18n.language === "ar" ? "mr-2 ml-0 rotate-180" : "ml-2 mr-0"
    }`} 
  >
     ➙
  </span>
</button> </a>

</div>

<div className={`hidden lg:flex flex-1 ${i18n.language === "ar" ? "justify-center" : "justify-end"} items-end relative mt-6 lg:mt-0 lg:pl-0 px-24 pl-0 lg:mb-12`}>
  <img
    src={i18n.language === "ar" ? arenalogo : areenalogoa}
    alt="Group"
    className="w-3/4 h-auto object-contain z-10"
  />
</div>

    </div>

 {/* "Our Mission" */}
 <div
      id="about"
      className="w-full flex justify-center my-7  px-4 z-10"
    >
      <div className="w-full flex mt-0 justify-center">
        <div
          className="w-full max-w-4xl bg-cover bg-center rounded-3xl overflow-hidden"
          style={{ backgroundImage: `url(${Card})` }}
        >
          <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50 text-white text-center px-4 sm:px-6 md:px-8 lg:px-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl py-6 md:py-9 mt-6 md:mt-11 font-bold">
              {t("about.title")}
            </h2>
            <p className="text-sm sm:text-base md:text-md mt-0 px-4 sm:px-8 md:px-11 py-3 md:py-4 leading-6 sm:leading-7">
              {t("about.description")}
            </p>
            <p className="mt-2 sm:mt-4 text-sm sm:text-base md:text-md py-3 md:py-4 px-4 sm:px-8 md:px-11 mb-6 md:mb-10 leading-6 sm:leading-7">
              {t("about.joinUs")}
            </p>
          </div>
        </div>
      </div>
    </div>


{/* FEATURES */}
<div id="feature" className="flex my-2 lg:mt-2 sm:mt-0 items-center w-full">
  <div className="relative w-full px-6 my-2 lg:mt-2 sm:mt-0 lg:mb-10 mb-12 lg:px-11">

    <div
  className={`hidden lg:block absolute clip-parallelogram-mirror 
    ${i18n.language === "ar" ? "lg:left-0 lg:right-auto lg:transform lg:scale-x-[-1]" : "lg:right-0 lg:left-auto"}`}
  style={{
    top: "0%",
    width: "60%",
    height: "120%",
  }}
></div>


    {/* Mobile View */}
    <div
      className="block lg:hidden absolute clip-parallelogram-mirror w-full"
      style={{
        top: "-2%",
        right: "-5%",
        width: "200%",
        height: "120%",
        transform: "rotate(2deg)",
      }}
    ></div>

    <div className="relative flex flex-col lg:flex-row mt-2 items-center w-full z-10">
      <h1 className="text-4xl sm:text-4xl lg:hidden font-extrabold text-white mb-4  text-center">
        {t("features.title")}
      </h1>

<div className={`relative flex-1 flex items-center justify-center pr-0 pl-11 lg:pl-0 lg:pr-24 lg:justify-center lg:items-center lg:left-2 mt-8 
  ${i18n.language === "ar" ? "lg:pr-60 lg:left-auto lg:right-8" : ""}`}>

  <img
    src={phone}
    alt={i18n.language === "ar" ? "ميزة الهاتف" : "Phone Feature"}
    className={`w-64 lg:w-84 h-auto object-contain relative z-10 transform translate-x-0 
      ${i18n.language === "ar" ? "lg:translate-x-[190px]" : "lg:translate-x-[-52px]"}`}
  />

  {/* Second Image */}
  <img
    src={feature}
    alt={i18n.language === "ar" ? "ميزة" : "Feature"}
    className={`w-6/7 lg:w-3/4 h-auto object-contain absolute z-20 transform 
      ${i18n.language === "ar" ? "lg:translate-x-[80px] translate-x-[40px] lg:right-4 " : "lg:translate-x-[20px] translate-x-[40px] "}`}
  />
</div>
      <div
        className={`flex-1 max-w-lg  text-center ${
          i18n.language === "ar" ? "lg:text-right " : "lg:text-left"
        } mt-6 lg:mt-8`}
      >
        <h1 className="text-4xl hidden lg:flex font-extrabold text-white mb-4">
          {t("features.title")}
        </h1>
        <h3 className="text-lg font-bold text-gray-200 mb-4">
          {t("features.subtitle")}
        </h3>

        <div className="space-y-4 text-sm">
          <div>
            <h2 className="text-md font-bold">• {t("features.feature1.title")}</h2>
            <p>{t("features.feature1.description")}</p>
          </div>
          <div>
            <h2 className="text-md font-bold">• {t("features.feature2.title")}</h2>
            <p>{t("features.feature2.description")}</p>
          </div>
          <div>
            <h2 className="text-md font-bold">• {t("features.feature3.title")}</h2>
            <p>{t("features.feature3.description")}</p>
          </div>
        </div>

       <a href="#signup-form"> <button className={`mt-6 flex items-center px-2 py-2 bg-white hover:bg-gray-200 hover:text-black border-2 border-b-4 border-black rounded-full text-gray-900 font-semibold text-sm shadow-md transition duration-300 ${
    i18n.language === "ar" ? "lg:ml-auto" : "lg:mr-auto" } mx-auto lg:mx-0`}> {t("features.button")}
  <span 
      className={`mr-2 ml-2 flex items-center justify-center w-8 h-8 bg-green-800 text-white rounded-full shadow-inner 
      ${i18n.language === "ar" ? "mr-2 ml-0 rotate-180" : "ml-2 mr-0"}`} >
       ➙
    </span>
</button> </a>
      </div>
    </div>
  </div>
</div>
   



<div className="relative w-full mt-0 mb-6 px-6 lg:px-11 items-center">
  <div
  className={`hidden lg:block absolute clip-parallelogram-mirror 
    ${i18n.language === "ar" ? "lg:left-[45%] lg:right-auto lg:transform lg:scale-x-[-1]" : "lg:right-[45%] lg:left-auto"}`}
  style={{
    top: "10%",
    width: "60%",
    height: "100%",
    clipPath: "polygon(0% 0%, 75% 0%, 100% 85%, 0% 100%)",
  }}
></div>

  <div
    className="block lg:hidden absolute clip-parallelogram-mirror w-full"
    style={{
      top: "-5%",
      right: "0%",
      width: "130%",
      height: "120%",
    }}
  ></div>

  <div className="relative hidden lg:flex items-center w-full z-10">
    <div
      className={`flex-1 max-w-lg ${
        i18n.language === "ar" ? "pr-11 text-right" : "pl-11 text-left"
      }`}
    >
      <h1 className="text-4xl font-bold text-white mb-4">{t("mobileApp.title")}</h1>
      <p className="text-white mb-6 mt-8 leading-relaxed">
        {t("mobileApp.description")}
      </p>
    </div>

    <div className="flex-1 mt-14 flex justify-center">
      <img
        src={Groupp}
        alt="Mobile App"
        className="w-80 h-full object-contain"
      />
    </div>
  </div>

  <div className="lg:hidden flex flex-col items-center text-center w-full z-10 relative">
    <h1 className="text-3xl font-bold text-white mb-4">{t("mobileApp.title")}</h1>
    <img
      src={Groupp}
      alt="Mobile App"
      className="w-48 sm:w-60 mb-4 h-auto object-contain"
    />
    <p className="text-gray-100 leading-relaxed">
      {t("mobileApp.description")}
    </p>
  </div>
</div>



{/* ARENA SCORING SYSTEM */}


<div className="my-5 px-6 lg:px-11 flex justify-center items-center">
  <div className="max-w-4xl w-full">

    <div className="flex flex-wrap px-4 items-center text-center justify-center text-2xl lg:text-4xl mt-5 font-bold">
      <span className="text-white whitespace-nowrap">{t("scoringSystem.title1")}</span>
      <span className="text-green-600 ml-2 lg:ml-2 whitespace-nowrap">{t("scoringSystem.title2")}</span>
    </div>

    <p className="items-start flex justify-center mt-6 px-4 lg:px-10 text-md text-center lg:text-center">
      {t("scoringSystem.description")}
    </p>

 <a href="#signup-form">
<div className="flex lg:justify-start lg:items-start justify-center items-center ">
 
  <button className="mt-6 flex items-center mx-auto px-2 py-2 bg-white hover:bg-gray-200 hover:text-black border-2 border-black rounded-full text-gray-900 font-semibold text-sm shadow-md transition duration-300">
    {t("scoringSystem.stayUpdated")}
    <span 
      className={`mr-1 ml-2 flex items-center justify-center w-8 h-8 bg-green-800 text-white rounded-full shadow-inner 
      ${i18n.language === "ar" ? "mr-2 ml-0 rotate-180" : "ml-2 mr-0"}`} // Increased gap using ml-4
    >
       ➙
    </span>
  </button> 
</div></a>


  
  



    {/* Scoring System Section */}
    <div className="flex flex-col lg:flex-row mt-11 w-full max-w-4xl bg-transparent overflow-hidden shadow-lg space-y-4 lg:space-y-0 lg:space-x-4 mx-auto">
    
      <div className="flex-1 relative order-1 lg:order-2">
        <div className="relative h-full">
          <img
            src={trophy}
            alt="Action Points Illustration"
            className="w-full h-full object-cover"
            style={{ objectPosition: "center", height: "100%" }}
          />
   
          <div className="absolute top-4 left-4">
            
          </div>
          <div className={`absolute bottom-36 ${i18n.language === "ar" ? "right-6 text-right" : "left-10 text-center align-middle"} text-white`}>
  <p className="text-2xl mb-10 font-extrabold text-italic text-center">
    {t("scoringSystem.leagueInfo")}
  </p>
</div>
        </div>
      </div>
      <div className="flex-1 p-10 order-2 lg:order-1 bg-[rgb(7,7,7)]">
        <div className="flex flex-wrap gap-0 text-gray-300">
          <div className="lg:w-1/2 mt-2 w-4/5  px-0 lg:px-2">
            <ul className="space-y-2">
              <li className="text-white font-bold text-lg">{t("scoringSystem.actions")}</li>
              {["goal", "assist", "keyPass", "cleanSheetDefender", "cleanSheetGoalkeeper", "save", "yellowCard", "redCard", "penaltyMissed", "penaltySaved", "ownGoal"].map(action => (
                <li key={action} className="text-sm">{t(`scoringSystem.actionsList.${action}`)}</li>
              ))}
            </ul>
          </div>
<div
  className={`w-1 lg:w-1/2 mt-2 text-center ${
    i18n.language === "ar" ? "pr-0 lg:pr-0" : "pr-0 lg:pr-0"
  }`}
>
  <ul className="space-y-2">
    <li className="text-white font-bold text-lg">{t("scoringSystem.points")}</li>
    {[
      "goalPoints",
      "assistPoints",
      "keyPassPoints",
      "cleanSheetDefenderPoints",
      "cleanSheetGoalkeeperPoints",
      "savePoints",
      "yellowCardPoints",
      "redCardPoints",
      "penaltyMissedPoints",
      "penaltySavedPoints",
      "ownGoalPoints",
    ].map((point) => (
      <li
        key={point}
        className={`text-white text-sm font-semibold ${
          point.includes("Points") && point.includes("red") ? "text-red-500" : ""
        }`}
      >
        {t(`scoringSystem.pointsList.${point}`)}
      </li>
    ))}
  </ul>
</div>

          
        </div>
      </div>

    </div>
  </div>
</div>



{/* Subscription Benefits */}
<div id="subscription" className="flex flex-col items-center  text-center w-full my-8">
  <section dir={i18n.language === "ar" ? "ltr" : "ltr"} className="flex flex-col items-center px-6 w-full">
    <h1 className="text-green-600 text-4xl font-bold mt-0 lg:mt-8 mb-8">
      {i18n.language === "ar" ? "فوائد" : "Subscription "}
      <span className="text-white">
        {i18n.language === "ar" ?  "الاشتراك" : "Benefits"}
      </span>
    </h1>

    {/* Desktop View: Regular Tier Cards */}
    <div className="hidden lg:flex gap-1  justify-center mb-0 w-full">
      {/* Bronze Tier */}
      <div className="tier-card bronze">
        <div className="flex justify-center items-center bg-transparent rounded-full w-16 h-16 mb-2 mt-1 mx-auto">
          <img src={bronze} alt="Bronze Tier Icon" className="w-12 h-auto" />
        </div>
        <h2 className="text-orange-500 text-xl font-bold mb-2">
          {i18n.language === "ar" ? "المستوى البرونزي" : "Bronze Tier"}
        </h2>
        <hr className="border-0 border-t-2 border-white opacity-20 mb-4" />
        <p className="text-sm text-white px-2 mb-2 opacity-80">
        {i18n.language === "ar"
          ? ".انضم إلى ما يصل لـ 2 دوري شهريًا●"
          : "● Join up to 2 leagues per month."}
      </p>
      <p className="text-sm text-white px-6 mb-2 opacity-80">
        {i18n.language === "ar"
          ? ".إحصائيات أساسية للاعبين: الوصول إلى تفاصيل أساسية مثل الأهداف، التمريرات الحاسمة، والمشاركات في المباريات "
          : "● Basic player stats: access essential player details such as goals, assists, and match appearances...more."}
      </p>
      </div>

      {/* Gold Tier */}
      <div className="tier-card gold">
        <div className="flex justify-center items-center bg-transparent rounded-full w-16 h-16 mb-4 mt-0 mx-auto">
          <img src={ball} alt="Gold Tier Icon" className="w-12 h-auto" />
        </div>
        <h2 className="text-yellow-500 text-xl font-bold mb-2">
          {i18n.language === "ar" ? "المستوى الذهبي" : "Gold Tier"}
        </h2>
        <hr className="border-0 border-t-2 border-white opacity-20 mb-4" />
        <p className="text-sm text-white opacity-80">
          {i18n.language === "ar"
            ? ".انضم إلى 6 دوريات شهريًا●"
            : "● Join 6 leagues per month."}
        </p>
        <p className="text-sm mt-2 text-white opacity-80">
          {i18n.language === "ar"
            ?".اقتراحات تشكيلات فورية: احصل على توصيات مدعومة بالذكاء الاصطناعي لتشكيلتك بناءً على بيانات المباريات الحية. دعم عملاء أولوية"
            : "● Real-time lineup suggestions: get AI-powered recommendations on your lineup based on real-time match data. Priority customer support...more."}
        </p>
        
      </div>

      {/* Silver Tier */}
      <div className="tier-card silver ">
        <div className="flex justify-center items-center bg-transparent rounded-full w-16 h-16 mb-1 mt-2 mx-auto">
          <img src={silver} alt="Silver Tier Icon" className="w-14 h-auto" />
        </div>
        <h2 className="text-gray-500 text-xl font-bold mb-2">
          {i18n.language === "ar" ? "المستوى الفضي" : "Silver Tier"}
        </h2>
        <hr className="border-0 border-t-2 border-white opacity-20 mb-4" />
        <p className="text-sm text-white opacity-80">
          {i18n.language === "ar"
            ? ".انضم إلى ما يصل لـ 4 دوريات شهريًا●"
            : "● Join up to 4 leagues per month."}
        </p>
        <p className="text-sm mt-2 text-white opacity-80">
          {i18n.language === "ar"
            ? ".إحصائيات متقدمة للاعبين: احصل على تحليلات تفصيلية تشمل دقة التمرير، التدخلات الحاسمة، وأداء اللاعب"
            : "● Advanced player stats: in-depth stats including passing accuracy, key tackles, and player form."}
        </p>
      </div>
    </div>

    <div className="lg:hidden overflow-auto flex w-full px-5">
  <div className="flex gap-9" id="carousel">
    {/* Silver Tier */}
    <div className="relative bg-[rgb(46,48,50)] text-white text-center p-5 shadow-lg  w-72 h-72 "
      style={{
        clipPath: "polygon(0% 0%, 100% 0%, 85% 100%, 15% 100%)",
        borderRadius: "90px 90px 110px 110px"
      }}
    >
      <div className="flex justify-center items-center bg-transparent rounded-full mt-2 w-16 h-16 mb-2 mx-auto">
        <img src={silver} alt="Silver Tier Icon" className="w-12 h-auto" />
      </div>
      <h2 className="text-gray-500 text-xl font-bold mb-2">
        {i18n.language === "ar" ? "المستوى الفضي" : "Silver Tier"}
      </h2>
      <hr className="border-0 border-t-2 border-white opacity-20 mb-4" />
      <p className="text-xs text-white opacity-80 ">
          {i18n.language === "ar"
            ? ".انضم إلى ما يصل لـ 4 دوريات شهريًا ●"
            : "● Join up to 4 leagues per month."}
        </p>
        <p className="text-xs mt-2 text-white opacity-80 px-8">
          {i18n.language === "ar"
            ? ".إحصائيات متقدمة للاعبين: احصل على تحليلات تفصيلية تشمل دقة التمرير، التدخلات الحاسمة، وأداء اللاعب"
            : "● Advanced player stats: in-depth stats including passing accuracy, key tackles, and player form."}
        </p>
    </div>

    {/* Gold Tier */}
    <div className="relative bg-[rgb(46,48,50)] text-white text-center p-5 shadow-lg  w-72 h-72 "
      style={{
        clipPath: "polygon(0% 0%, 100% 0%, 85% 100%, 15% 100%)",
        borderRadius: "90px 90px 110px 110px"
      }}
    >
      <div className="flex justify-center items-center bg-transparent rounded-full mt-0 w-16 h-16 mb-2 mx-auto">
        <img src={ball} alt="Gold Tier Icon" className="w-10 h-auto" />
      </div>
      <h2 className="text-yellow-500 text-xl font-bold mb-2">
        {i18n.language === "ar" ? "المستوى الذهبي" : "Gold Tier"}
      </h2>
      <hr className="border-0 border-t-2 border-white opacity-20 mb-2" />
      <p className="text-xs mt-4 text-white opacity-80">
          {i18n.language === "ar"
            ? ".انضم إلى 6 دوريات شهريًا ●"
            : "● Join 6 leagues per month."}
        </p>
        <p className="text-xs mt-2 text-white opacity-80 px-4">
          {i18n.language === "ar"
            ?".اقتراحات تشكيلات فورية: احصل على توصيات مدعومة بالذكاء الاصطناعي لتشكيلتك بناءً على بيانات المباريات الحية. دعم عملاء أولوية"
            : "● Real-time lineup suggestions: get AI-powered recommendations on your lineup based on real-time match data. Priority customer support...more."}
        </p>
    </div>

    {/* Bronze Tier */}
    <div className="relative bg-[rgb(46,48,50)] text-white text-center p-5 shadow-lg  w-72 h-72 "
      style={{
        clipPath: "polygon(0% 0%, 100% 0%, 85% 100%, 15% 100%)",
        borderRadius: "90px 90px 110px 110px"
      }}
    >
      <div className="flex justify-center items-center bg-transparent rounded-full w-16 h-16 mb-2 mt-2 mx-auto">
        <img src={bronze} alt="Bronze Tier Icon" className="w-12 h-auto" />
      </div>
      <h2 className="text-orange-500 text-xl font-bold mb-2">
        {i18n.language === "ar" ? "المستوى البرونزي" : "Bronze Tier"}
      </h2>
      <hr className="border-0 border-t-2 border-white opacity-20 mb-4" />
      <p className="text-xs text-white px-6 mb-2 opacity-80">
        {i18n.language === "ar"
          ? ".انضم إلى ما يصل لـ 2 دوري شهريًا●"
          : "● Join up to 2 leagues per month."}
      </p>
      <p className="text-xs text-white px-6 mb-2 opacity-80">
        {i18n.language === "ar"
          ? ".إحصائيات أساسية للاعبين: الوصول إلى تفاصيل أساسية مثل الأهداف، التمريرات الحاسمة، والمشاركات في المباريات "
          : "● Basic player stats: access essential player details such as goals, assists, and match appearances...more."}
      </p>
    </div>
  </div>
</div>

  </section>
</div>






<div
  className={`flex px-16 items-center w-full mt-5 mb-5 ${
    i18n.language === "ar" ? "flex-row-reverse" : "flex-row"
  }`}
>
  <div
    className={`flex-[2] mb-0 max-w-lg ${
      i18n.language === "ar" ? "text-right pr-11" : "text-left pl-11"
    } hidden lg:block`}
  >
    <h1 className="text-4xl font-bold text-green-600 mb-4">
      {i18n.language === "ar" ? "فوائد" : "Referral "}
      <span className="text-white">
        {i18n.language === "ar" ? "الإحالة" : "Benefits"}
      </span>
    </h1>
    <h3 className="text-lg font-extrabold text-gray-100 mb-4">
      {i18n.language === "ar"
        ? "احصل على ترقيات مجانية في المستويات ومكافآت مثيرة"
        : "Earn Free Tier Upgrades and Exciting Rewards."}
    </h3>
    <a href="#signup-form">
    <button className="mt-2 flex items-center px-2  py-1 bg-white hover:bg-green-200 hover:text-black border-2 border-b-4 border-black rounded-full text-gray-900 font-semibold text-sm shadow-md transition duration-300">
      {i18n.language === "ar" ? "قم بالتسجيل في النسخة التجريبية" : "Sign Up For Our Beta"}
      <span 
      className={`mr-1 ml-2 flex items-center justify-center w-8 h-8 bg-green-800 text-white rounded-full shadow-inner 
      ${i18n.language === "ar" ? "mr-2 ml-0 rotate-180" : "ml-2 mr-0"}`} 
    >
       ➙
    </span>
    </button> </a>

    <h1 className="text-green-600 font-extrabold text-md mt-8">
      {i18n.language === "ar"
        ? "ادعُ أصدقاءك لفتح ميزات حصرية"
        : "INVITE FRIENDS TO UNLOCK EXCLUSIVE BENEFITS"}
    </h1>
    <ul className="space-y-1 mt-2 text-sm font-medium">
      <li className="text-white mb-1">
        {i18n.language === "ar"
          ? "٣ أصدقاء: المستوى البرونزي لمدة شهر واحد"
          : "3 Friends: Bronze Tier for 1 Month."}
      </li>
      <li className="text-white mb-1">
        {i18n.language === "ar"
          ? "٥ أصدقاء: المستوى الفضي لمدة شهر واحد"
          : "5 Friends: Silver Tier for 1 Month."}
      </li>
      <li className="text-white mb-1">
        {i18n.language === "ar"
          ? "١٠ أصدقاء: المستوى الذهبي لمدة شهر واحد"
          : "10 Friends: Gold Tier for 1 Month."}
      </li>
    </ul>

    <h1 className="text-green-600 font-extrabold text-md mt-4">
      {i18n.language === "ar" ? "بالإضافة إلى فرصة للفوز" : "PLUS, STAND A CHANCE TO WIN"}
    </h1>
    <ul className="space-y-1 mt-2 text-sm font-medium">
      <li className="text-white mb-1">
        {i18n.language === "ar" ? "قسيمة هدية (على سبيل المثال: متجر نايكي)" : "Gift Vouchers (e.g., Nike Store)."}
      </li>
      <li className="text-white mb-1">
        {i18n.language === "ar" ? "رصيد محطة هنقرستيشن" : "HungerStation Credits."}
      </li>
      <li className="text-white mb-1">
        {i18n.language === "ar" ? "الإقامة في فندق فاخر" : "Luxury Hotel Staycations."}
      </li>
      <li className="text-white mb-1">
        {i18n.language === "ar" ? "خصومات حصرية على الميزات المستقبلية" : "Exclusive Discounts on Future Features."}
      </li>
    </ul>
    <h1 className="text-white text-sm font-bold mt-4 ">
        {i18n.language === "ar" ? "يرجى ملاحظة أن الفوائد المذكورة هي أمثلة وقد تتغير في المستقبل" : "Please note that the benefits listed are examples and may change in the future."}
      </h1>
  </div>

  <div className="flex-[1] px-1 hidden lg:flex justify-center items-center w-1/2">
    <img
      src={logoa}
      alt={i18n.language === "ar" ? "مجموعة" : "Group"}
      className="w-[80%] max-w-[800px] h-auto object-contain transition-transform duration-500 ease-in-out transform scale-100 hover:scale-110"
      style={{ maxHeight: "100%", objectFit: "contain", paddingTop: 0, paddingBottom: 0 }}
    />
  </div>
</div>

<div className="lg:hidden flex flex-col items-center mt-0 mb-12 px-6">
  <h1 className="text-green-700 text-4xl font-bold mb-8 text-center">
    {i18n.language === "ar" ? "فوائد" : "Referral "}
    <span className="text-white">{i18n.language === "ar" ? " الإحالة" : "Benefits"}</span>
  </h1>

  <h3 className="text-lg font-extrabold text-gray-100 mb-4 text-center">
    {i18n.language === "ar" ? "احصل على ترقيات مجانية في المستويات ومكافآت مثيرة"
      : "Earn Free Tier Upgrades and Exciting Rewards."}
  </h3>

  <div className="flex justify-center mt-0">
    <img
      src={logoa}
      alt={i18n.language === "ar" ? "مجموعة" : "Group"}
      className="w-5/6 h-auto object-contain" 
    />
  </div>


  <div className="mt-8 text-center">
    <h1 className="text-green-700 font-extrabold text-md">
      {i18n.language === "ar"
        ? "ادعُ أصدقاءك لفتح ميزات حصرية"
        : "INVITE FRIENDS TO UNLOCK EXCLUSIVE BENEFITS"}
    </h1>
    <ul className="space-y-1 mt-2 text-sm">
      <li className="text-white mb-1">
        {i18n.language === "ar"
          ? "٣ أصدقاء: المستوى البرونزي لمدة شهر واحد"
          : "3 Friends: Bronze Tier for 1 Month."}
      </li>
      <li className="text-white mb-1">
        {i18n.language === "ar"
          ? "٥ أصدقاء: المستوى الفضي لمدة شهر واحد"
          : "5 Friends: Silver Tier for 1 Month."}
      </li>
      <li className="text-white mb-1">
        {i18n.language === "ar"
          ? "١٠ أصدقاء: المستوى الذهبي لمدة شهر واحد"
          : "10 Friends: Gold Tier for 1 Month."}
      </li>
    </ul>
  </div>

  <div className="mt-8 text-center">
    <h1 className="text-green-700 font-extrabold text-md">
      {i18n.language === "ar" ? "بالإضافة إلى فرصة للفوز": "PLUS, STAND A CHANCE TO WIN"}
    </h1>
    <ul className="space-y-1 mt-2 text-sm">
      <li className="text-white mb-1">
        {i18n.language === "ar" ? "قسيمة هدية (على سبيل المثال: متجر نايكي)" : "Gift Vouchers (e.g., Nike Store)."}
      </li>
      <li className="text-white mb-1">
        {i18n.language === "ar" ? "رصيد محطة هنقرستيشن" : "HungerStation Credits."}
      </li>
      <li className="text-white mb-1">
        {i18n.language === "ar" ? "الإقامة في فندق فاخر" : "Luxury Hotel Staycations."}
      </li>
      <li className="text-white mb-1">
        {i18n.language === "ar" ? "خصومات حصرية على الميزات المستقبلية" : "Exclusive Discounts on Future Features."}
      </li>
    </ul>
    <h1 className="text-white font-semibold mt-4 ">
        {i18n.language === "ar" ? "يرجى ملاحظة أن الفوائد المذكورة هي أمثلة وقد تتغير في المستقبل" : "Please note that the benefits listed are examples and may change in the future."}
      </h1>

  </div>

  <a href="#signup-form">
  <div className="flex justify-center mt-4">
    <button className="mt-4 flex items-center px-3 py-2 bg-white hover:bg-gray-200 hover:text-black border-2 border-b-4 border-black rounded-full text-gray-900 font-semibold text-sm shadow-md transition duration-300">
      {i18n.language === "ar" ? "قم بالتسجيل في النسخة التجريبية" : "Sign Up For Our Beta"}
      <span 
      className={`mr-2 ml-2 flex items-center justify-center w-8 h-8 bg-green-800 text-white rounded-full shadow-inner 
      ${i18n.language === "ar" ? "rotate-180" : ""}`}
    >
      ➙
    </span>
    </button>
  </div></a>
</div>

  


    
  {/*SIGN UP AND STAY UPDATED*/}
     
  <div id="signup-form" className="bg-black max-w-full w-full text-center text-green-700 lg:text-4xl mt-1 sm:text-3xl font-extrabold py-6 ">
  {t("signup.title")} <span className="text-white font-extrabold">{t("signup.andStayUpdated")}</span>
</div>



{/* FORM*/}
<div  className="w-full  flex justify-center my-12 px-4 py-4">
  <div
    className="w-full sm:hidden  max-w-4xl  bg-cover bg-center bg-gradient-to-br from-gray-950 via-green-900 to-green-700 rounded-3xl overflow-hidden lg:flex p-4 relative"
    style={{ height: "450px" }}
  >

    <div className="w-full md:w-1/2  flex flex-col bg-[rgb(125,125,126)] rounded-3xl items-center justify-center px-6 py-6 absolute top-3 lg:left-6 left-0 z-10">
    <form onSubmit={handleSubmit} className="w-full max-w-sm">
  
      <div className="mb-6 mt-9">
        <input
          className="shadow-md bg-[rgb(29,30,31)] text-sm border rounded w-full py-2 px-4 text-gray-100 leading-tight focus:outline-none focus:ring-2 focus:ring-green-500"
          id="name"
          name="name"
          type="text"
          placeholder={t("form.namePlaceholder")}
          aria-label={t("form.nameLabel")}
          required
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>

      <div className="mb-6">
        <input
          className="shadow-md bg-[rgb(29,30,31)] text-sm border rounded w-full py-2 px-4 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-green-500"
          id="Phone Number"
          name="phone number"
          type="text"
          placeholder={t("form.birthdayPlaceholder")}
          aria-label={t("form.birthdayLabel")}
          required
        />
        <ValidationError prefix="Phone Number" field="phone number" errors={state.errors} />
      </div>


      <div className="mb-6">
        <input
          className="shadow-md bg-[rgb(29,30,31)] text-sm border rounded w-full py-2 px-4 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-green-500"
          id="email"
          name="email"
          type="email"
          placeholder={t("form.emailPlaceholder")}
          aria-label={t("form.emailLabel")}
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      

      <div className="mb-6">
        <input
          className="shadow-md bg-[rgb(29,30,31)] text-sm border rounded w-full py-2 px-4 text-white leading-tight focus:outline-none focus:ring-2 focus:ring-green-500"
          id="Age"
          name="Age"
          type="number"
          placeholder={t("form.genderPlaceholder")}
          aria-label={t("form.genderLabel")}
          required
        />
        <ValidationError prefix="Age" field="Age" errors={state.errors} />
      </div>


      <div className="mb-10 flex items-center">
        <input
          className="form-checkbox h-5 w-5 text-green-500 bg-[rgb(29,30,31)] border-gray-400 rounded focus:ring-2 focus:ring-green-500"
          id="ReceiveEmails"
          name="ReceiveEmails"
          type="checkbox"
        />
        <label htmlFor="ReceiveEmails" className="text-gray-100 text-sm leading-tight ml-3">
        {t("form.receiveEmails")}
        </label>
      </div>

      <div className="flex items-center justify-center">
        <button
          className="bg-white hover:bg-green-700 text-black font-bold py-2 px-8 rounded-3xl focus:outline-none focus:ring-2 focus:ring-green-500"
          type="submit"
          disabled={state.submitting}
        >
         {t("form.submitButton")}
        </button>
      </div>
    </form>
    </div>

    <div className="hidden md:flex w-2/3 items-end ml-auto">
      <img
        src={play}
        alt="Description of the image"
        className="w-full h-full pl-6 object-cover rounded-3xl shadow-lg"
      />
    </div>
  </div>
</div>



       
   
   
   
    </div>




    
  );
}

export default Home;