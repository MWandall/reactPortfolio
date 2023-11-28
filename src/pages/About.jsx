import ProfilePicture from "../components/ProfilePicture";

export default function About() {
  return (
    <div class="flex flex-col min-h-screen items-center">
      {/* <div class="flex-grow"> */}
      <div className="p-5 text-center items-center shadow-lg p-10 rounded-xl my-2 flex flex-col justify-between w-[50rem]">
      <img
            className="object-contain w-30 "
            src="/miii.jpg"
            alt="profilePic"
          />
      <h1 >About Mii</h1>
      </div>
      <p className=" text-center px-5 leading-7 shadow-lg p-10 rounded-xl my-2 flex flex-col justify-between w-[50rem]">
        Hello there! I'm Mitchell Wandall, a passionate Full Stack Web
        Developer on the verge of graduating and ready to make a mark in the
        digital world. My journey in the realm of web development has been an
        exhilarating exploration of creativity and problem-solving.
      </p>
      <h3 className="p-3 text-center shadow-lg p-10 rounded-xl my-2 flex flex-col justify-between w-[50rem]">Skills Snapshot</h3>
      <p className=" text-center px-5 leading-7 shadow-lg p-10 rounded-xl my-2 flex flex-col justify-between w-[50rem]">
        With a strong foundation in HTML/CSS and a knack for creating responsive
        and visually appealing designs, I've delved into the world of JavaScript
        to bring interactivity to the web. Proficient in technologies like
        Bootstrap and jQuery, I strive to create seamless and intuitive user
        experiences.
        <br />
        <br />
        I have a solid understanding of the Document Object Model (DOM) and have
        successfully integrated various APIs, leveraging the power of JSON and
        AJAX to enhance the functionality of web applications. My server-side
        skills include Node.js and Express, following the MVC paradigm to build
        scalable and maintainable applications. I've also dived into databases,
        working with MySQL and Sequelize for relational databases, and embracing
        the flexibility of NoSQL databases.
        <br />
        <br />
        Adept at modern JavaScript, I leverage ES6 features to write clean and
        efficient code. I'm no stranger to the world of Object-Oriented
        Programming, utilizing its principles to build robust and modular
        systems. My commitment to quality extends to testing, and I embrace
        Agile development methodologies to ensure efficient and collaborative
        project execution.
        <br />
        <br />
        In the realm of frontend frameworks, I've embraced React to build
        dynamic and responsive user interfaces. My expertise extends to the MERN
        stack, seamlessly integrating MongoDB to create end-to-end applications.
      </p>
      <h3 className="p-3 text-center shadow-lg p-10 rounded-xl my-2 flex flex-col justify-between w-[50rem]">Beyond Code</h3>
      <p className=" text- px-5 leading-7 shadow-lg p-10 rounded-xl my-2 flex flex-col justify-between w-[50rem]">
        Beyond the syntax and frameworks, I am deeply fascinated by computer
        science fundamentals. It's not just about writing code; it's about
        understanding the intricacies of algorithms and data structures to
        create elegant solutions.
        <br />
        <br />
        My journey isn't just about technology; it's about crafting experiences.
        I believe in the power of Progressive Web Apps to deliver seamless
        experiences across devices, blurring the lines between web and native
        applications.
      </p>
      <h3 className="p-3 text-center shadow-lg p-10 rounded-xl my-2 flex flex-col justify-between w-[50rem]">Collaborative Spirit</h3>
      <p className=" text-center px-5 leading-7 shadow-lg p-10 rounded-xl my-2 flex flex-col justify-between w-[50rem]">
        Having worked in an Agile environment, I understand the value of
        collaboration and adaptability. I'm always eager to learn and grow,
        thriving in environments that encourage innovation and teamwork.
        <br />
        <br />
        As I embark on the next chapter of my career, I am excited about the
        prospect of contributing my skills and passion to projects that push the
        boundaries of what's possible on the web.
      </p>
    </div>
    // </div>
  );
}
