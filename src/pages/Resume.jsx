import { IoCloudDownload } from "react-icons/io5";
export default function Resume() {
  return (
    <div>
      <div className=" shadow-lg p-3 rounded-xl my-2 flex flex-col items-center w-[7rem] h-[7rem]">
        <a href="/MitchellWandallResume2023.pdf" download="MitchellWandallResume"><IoCloudDownload className="cursor-pointer hover:scale-125 transition-all ease-in-out text-[40px]"/></a>
        <p className="">Download Resume</p>
        
        </div>
      <aside className="flex flex-col text-right px-3 ">
        <h3>Mitchell Wandall</h3>
        <h4>email@email.com</h4>
        <h4>555-555-5555</h4>
      </aside>
      <div className="flex flex-col">
        <h1 className=" text-center">Resume</h1>
        <div className=" shadow-lg p-10 rounded-xl my-2 flex flex-col justify-between">
          <h5>Objective:</h5>
          <p>
            Dynamic and versatile professional with a strong background in
            bartending, fine dining cooking, and home remodeling, seeking a
            challenging position as a Full Stack Web Developer to leverage newly
            acquired skills and contribute to innovative projects.
          </p>
        </div>

        <div className=" shadow-lg p-10 rounded-xl my-2 flex flex-col justify-between">
          <h5>Education:</h5>
          <p>
            Full Stack Web Developer Program <br />
            Coding Academy, City, State <br />
            Completion Date
          </p>
          <ul className=" list-disc">
            <li>
              Acquired comprehensive skills in web development, utilizing modern
              technologies and frameworks.
            </li>
            <li>
              Developed proficiency in HTML, CSS, Git, JavaScript, Bootstrap,
              DOM manipulation, APIs, JQuery, JSON, AJAX, Node.js, ES6, and
              object-oriented programming.
            </li>
            <li>
              Gained expertise in server-side development with Express, database
              management with MySQL and Sequelize, and adopted the MVC paradigm.
            </li>
            <li>
              Acquired testing skills, practiced Agile development
              methodologies, and developed Progressive Web Apps.
            </li>
            <li>
              Explored the MERN (MongoDB, Express, React, Node.js) stack and
              NoSQL databases.
            </li>
            <li>
              Strengthened computer science fundamentals to build a solid
              foundation for problem-solving.
            </li>
          </ul>
        </div>
        <div className=" shadow-lg p-10 rounded-xl my-2 flex flex-col justify-between">
          <h5>Technical Skills:</h5>
          <ul className=" list-disc">
            <li>HTML/CSS/Git</li>
            <li>JavaScript (ES6)</li>
            <li>Bootstrap</li>
            <li>APIs, AJAX</li>
            <li>JQuery</li>
            <li>JSON</li>
            <li>Node.js (Express)</li>
            <li>MySQL (Sequelize)</li>
            <li>MVC Paradigm</li>
            <li>Testing (Unit and Integration)</li>
            <li>Agile Development</li>
            <li>Progressive Web Apps</li>
            <li>React</li>
            <li>NoSQL (MongoDB)</li>
            <li>MERN Stack</li>
          </ul>
        </div>

        <div className=" shadow-lg p-10 rounded-xl my-2 flex flex-col justify-between">
          <h4>Professional Experience:</h4>
          <h5>1. Bartender</h5>
          <p>
            XYZ Bar, City, State <br />
            Dates of Employment
          </p>
          <ul className=" list-disc">
            <li>
              Provided exceptional customer service in a fast-paced environment,
              ensuring customer satisfaction and repeat business.
            </li>
            <li>
              Demonstrated strong multitasking abilities, managing customer
              orders, maintaining cleanliness, and handling cash transactions
              efficiently.
            </li>
            <li>
              Developed effective communication and interpersonal skills through
              interactions with diverse clientele.
            </li>
          </ul>
        </div>
        <div className=" shadow-lg p-10 rounded-xl my-2 flex flex-col justify-between">
          <h5>2. Fine Dining Cook</h5>
          <p>
            Gourmet Restaurant, City, State <br />
            Dates of Employment
          </p>
          <ul className=" list-disc">
            <li>
              Prepared high-quality dishes in accordance with restaurant
              standards, emphasizing presentation and taste.
            </li>
            <li>
              Collaborated with the culinary team to streamline kitchen
              operations and enhance overall efficiency.
            </li>
            <li>
              Adapted quickly to changing menus and seasonal ingredients,
              showcasing adaptability in a dynamic kitchen environment.
            </li>
          </ul>
          
        </div>

        <div className=" shadow-lg p-10 rounded-xl my-2 flex flex-col justify-between">
          <h5>3. Home Remodeler</h5>
          <p>
            Home Improvement Services, City, State <br />
            Dates of Employment
          </p>
          <ul className=" list-disc">
            <li>
              Executed various home remodeling projects, demonstrating
              proficiency in carpentry, plumbing, and electrical work.
            </li>
            <li>
              Coordinated with clients to understand their vision and deliver
              personalized home improvement solutions.
            </li>
            <li>
              Maintained a strong commitment to quality craftsmanship and
              attention to detail in every project.
            </li>
          </ul>

        </div>

        <div className=" shadow-lg p-10 rounded-xl my-2 flex flex-col justify-between">
          <h5>Conclusion:</h5>
          <p>
            Combining a diverse professional background with a comprehensive
            education in Full Stack Web Development, I am eager to bring my
            unique skill set, adaptability, and passion for technology to a
            dynamic development team. I am confident in my ability to contribute
            effectively to innovative projects and thrive in a collaborative
            work environment.
          </p>
        </div>
      </div>
    </div>
  );
}
