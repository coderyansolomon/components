import Button from "../_components/Button";
import Card from "../_components/Card";
import Form from "../_components/Form";
import Modal from "../_components/Modal";
import Navbar from "../_components/Nav";
import Section from "../_components/Section";


const UiComponents = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Navbar />
      <header className="p-6 bg-gray-800 text-center text-3xl font-bold">
        UI Components Showcase
      </header>
      <main className="flex-grow p-6 space-y-6">
        <Section title="Button Component">
          <Button />
        </Section>
        <Section title="Card Component">
          <Card />
        </Section>
        <Section title="Form Component">
          <Form />
        </Section>
        <Section title="Modal Component">
          <Modal />
        </Section>
      </main>
      <footer className="p-6 bg-gray-800 text-center">
        © 2024 Code Ryan. All rights reserved.
      </footer>
    </div>
  );
};

export default UiComponents;
