export default function Contact() {
  return (
    <div className=" ">
      {/* <div className=" text-center">
      <h1>Contact Page</h1>
      </div>
      <div className="flex justify-between p-10">
      <h2>email@email.com</h2>
      <h2>555-555-5555</h2>
      <a href="https://github.com/MWandall"><h2>GitHub</h2></a>
      </div> */}

      <form className="p-5" id="contactForm">
        <div className="form-group p-4">
          <label for="name">Name</label>
          <input type="text" className="form-control" placeholder="Your Name" />
        </div>
        <div className="form-group p-4">
          <label for="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="form-group  p-4">
          <label for="Message">Message</label>
          <textarea className="form-control" rows="3" required></textarea>
          <button className="bg-white cursor-pointer hover:scale-110 transition-all ease-in-out font-semibold py-2 px-4 border border-gray-400 rounded shadow" type="submit" form="contactForm" value="Submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
