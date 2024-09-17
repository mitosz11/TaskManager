import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomArrow = ({ direction, onClick }) => {
  return (
    <button
      className={`absolute top-1/2 transform -translate-y-1/2 text-white p-2 text-5xl rounded-full z-10 ${
        direction === "prev" ? "left-2" : "right-2"
      }`}
      onClick={onClick}
    >
      {direction === "prev" ? "‹" : "›"}
    </button>
  );
};

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <CustomArrow direction="prev" />,
    nextArrow: <CustomArrow direction="next" />,
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Welcome to Task Manager
      </h1>
      <div className="mb-8">
        <Slider {...sliderSettings} className="w-2/3 mx-auto mb-8">
          <div className="px-2">
            <img
              src="/steps/step1.png"
              alt="Step 1"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
            <p className="text-center mt-2 text-lg">
              Step 1: Create your Task List
            </p>
          </div>
          <div className="px-2">
            <img
              src="/steps/step2.png"
              alt="Step 2"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
            <p className="text-center mt-2 text-lg">Step 2: Select category</p>
          </div>
          <div className="px-2">
            <img
              src="/steps/step3.png"
              alt="Step 3"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
            <p className="text-center mt-2 text-lg">Step 3: Select priority</p>
          </div>
          <div className="px-2">
            <img
              src="/steps/step4.png"
              alt="Step 4"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
            <p className="text-center mt-2 text-lg">Step 4: Create new task</p>
          </div>
          <div className="px-2">
            <img
              src="/steps/step5.png"
              alt="Step 5"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
            <p className="text-center mt-2 text-lg">
              Step 5: Filtering by categories
            </p>
          </div>
          <div className="px-2">
            <img
              src="/steps/step6.png"
              alt="Step 6"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
            <p className="text-center mt-2 text-lg">
              Step 6: Filtering by priorities
            </p>
          </div>
          <div className="px-2">
            <img
              src="/steps/step7.png"
              alt="Step 7"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
            <p className="text-center mt-2 text-lg">
              Step 7: Mark as completed
            </p>
          </div>
          <div className="px-2">
            <img
              src="/steps/step8.png"
              alt="Step 8"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
            <p className="text-center mt-2 text-lg">Step 8: Edit task</p>
          </div>
          <div className="px-2">
            <img
              src="/steps/step9.png"
              alt="Step 9"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
            <p className="text-center mt-2 text-lg">Step 9: Delete task</p>
          </div>
        </Slider>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">How the Task Manager works</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          This application helps you manage your daily tasks. After registering
          and logging in, you can create your own personalized task list, set
          priorities, and categorize them.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          You can easily edit or delete tasks, and mark them as completed when
          you're done. Your task list is saved securely and accessible only to
          you.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Get started by registering and organizing your tasks efficiently!
        </p>
      </div>
      </div>

    </div>
  );
};

export default Home;
