function About() {
  return (
    <section
      id="about"
      className="py-16 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://via.placeholder.com/1920x1080')", // Replace with your image URL
      }}
    >
      <div className="container mx-auto px-6 text-white">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="mt-4">
          I am a web developer passionate about building modern, responsive, and accessible web applications.
        </p>
      </div>
    </section>
  );
}

export default About;