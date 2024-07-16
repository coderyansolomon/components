import TutorialList from "./_components/TutorialList";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <header className="p-6 bg-gray-800 text-center text-3xl font-bold">
        React.js Components
      </header>
      <main className="flex-grow">
        <TutorialList />
      </main>
      <footer className="p-6 bg-gray-800 text-center">
        © 2024 Code Ryan. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
