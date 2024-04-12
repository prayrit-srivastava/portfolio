import React from "react";
import ProjectBox from "../Component/ProjectBox";

const Projects = () => {
  const projects = [
    {
      name: "Splitwise",
      hosted_link: "",
      code_link: "",
      des: "This web application allows the user to input the money which he wants to divide among the group based on the percentage of their share with the security of the blockchain",
      img: "",
    },
    {
      name: "BusyBuy",
      hosted_link: "https://tangerine-gingersnap-3c8b63.netlify.app/",
      code_link: "https://github.com/prayrit-srivastava/Busybuy",
      des: "This project aims to replicate an online commercial platform, complete with essential functionalities such as user registration, login, product search, filtering options, adding items to the shopping cart, adjusting quantities, making purchases, and viewing ordered items on the dedicated page.I have used Firebase for cloud Storage and Redux for state Management.",
      img: "",
    },
    {
      name: "Twitter",
      hosted_link: "",
      code_link: "",
      des: "Developed a twitter clone with all the functionalities and features a twitter have. This includes functionalities such as following, unfollowing, liking, disliking, commenting, and even integrating a chatbot. These features are seamlessly managed using state management tools within a React environment.",
      img: "",
    },
    {
      name: "Stock Market Analysis",
      hosted_link: "https://deluxe-souffle-ffc4fc.netlify.app/",
      code_link: "https://github.com/prayrit-srivastava/stockmarket_analysis",
      des: "Develop a web application allowing users to manage their stock portfolio. The application includes features for saving stocks, tracking their behavior over different time intervals, and displaying stock values upon hovering. Users can view various stock information, including current values. Additionally, I have created a custom API to handle real-time data storage and retrieval for this project.",
      img: "",
    },
    {
      name: "IRCTC",
      hosted_link: "https://irctc-chi.vercel.app/",
      code_link: "https://github.com/prayrit-srivastava/irctc",
      des: "I have created a replica of the IRCTC Ticket Booking platform, complete with functionalities such as user authentication and integration with the live IRCTC API to fetch real-time information on available trains and seat availability.",
      img: "",
    },
    {
      name: "PhotoFolio",
      hosted_link: "https://mellow-seahorse-fc9268.netlify.app/",
      code_link: "https://github.com/prayrit-srivastava/Photofolio",
      des: "I've developed an image storage and sharing platform that empowers users to organize their photos by creating custom folders and uploading images. Leveraging the capabilities of Firebase cloud storage, the platform ensures seamless storage and retrieval of user-uploaded images while providing robust sharing functionalities.",
      img: "",
    },
    {
      name: "Expense Tracker",
      hosted_link: "",
      code_link: "https://github.com/prayrit-srivastava/expense-tracker",
      des: "In this endeavor, I aimed to develop an expense tracker that enables users to log both positive and negative financial transactions. Additionally, the web application displays the overall balance, as well as profit and loss summaries. To achieve this, I utilized functional components to construct the necessary elements and leveraged the useReducer hook to centralize the updating mechanisms.I have used React with Redux for state Management",
      img: "",
    },
    {
      name: "Music Player",
      hosted_link: "",
      code_link: "",
      des: "I've developed an advanced music player clone with dynamic features such as play, pause, and playlist management. Users can seamlessly create personalized playlists, add songs to their playlists, and easily switch between playlists to enjoy their favorite tracks.",
      img: "",
    },
    {
      name: "virtual Keyboard",
      hosted_link: "https://boisterous-croissant-e666f0.netlify.app",
      code_link: "https://github.com/prayrit-srivastava/React_virtual_Keyboard",
      des: "Designed a virtual keyboard using react with all the functionality and option to type the symbol using combination of keys and more. ",
      img: "",
    },
  ];
  return (
    <>
      these are some of the project I have made over the years.
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {projects.map((item, ind) => (
          <ProjectBox project={item} key={ind} />
        ))}
      </div>
    </>
  );
};

export default Projects;
