function Contact() {
  return (
    <section
      id="contact"
      className="py-1 bg-cover bg-center"
      style={{
        backgroundImage: "url('data:image/jpe=')", // Replace with your image URL
      }}
    >
      <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      
        <form className="mt-0 space-y-1">
          <h1 className="text-center text-4xl">Contact Me</h1>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 border border-gray-600 rounded-md focus:ring-5 focus:ring-indigo-500 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          />
          <textarea
            placeholder="Message"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            rows="0"
          ></textarea>
          <button className="w-full bg-indigo-600 text-white p-5 rounded-md hover:bg-indigo-700">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;