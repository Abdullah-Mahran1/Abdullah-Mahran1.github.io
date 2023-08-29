const Contact = () => {
  return (
    <div name="contact" className="text-blue-950 w-full h-screen ">
      <div className="pt-20 max-w-5xl flex flex-col mx-auto justify-center px-16 w-full">
        <p className="text-4xl mx-2 sm:text-6xl font-bold">Contact Me</p>
      </div>
      <form
        className="px-8 py-10 mb-2 flex flex-col flex-wrap gap-4 justify-center items-center"
        action="https://getform.io/f/e76da53e-4faa-45b6-9b51-ad57597ef063"
        method="POST"
      >
        <input
          className="p-2 border-2 shadow-md mx-auto h-10 w-64"
          placeholder="Name"
          name="name"
        />
        <input
          className="p-2 border-2 shadow-md mx-auto h-10 w-64"
          placeholder="Email"
          type="email"
          name="email"
        />
        <textarea
          className="p-2 border-2 shadow-md mx-auto w-64"
          name="massege"
          id=""
          cols="20"
          rows="10"
          placeholder="Enter your massege here"
        ></textarea>
        <button className="text-blue-950 hover:bg-blue-950 duration-500 hover:text-white border-2 px-3 py-2  border-blue-950 ">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
