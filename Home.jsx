function Home() {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('https://via.placeholder.com/1920x1080')", // Replace with your image URL
      }}
    >
      <div className="text-center">
        <h1 className="text-6xl font-bold text-indigo-600">
          Welcome to Deng Luxury's Website
        </h1>
        <p className="mt-4 text-green-700">
          Creating amazing web experiences with React and Tailwind CSS
        </p>
      </div>
    </section>
  );
}

export default Home;