function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-16 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://via.placeholder.com/1920x1080')", // Replace with your image URL
      }}
    >
      <div className="container mx-auto px-6 text-white">
        <h2 className="text-3xl font-bold">My Portfolio</h2>
        <p className="mt-4">
          Check out some of my projects that showcase my skills in web development.
        </p>
      </div>
    </section>
  );
}

export default Portfolio;