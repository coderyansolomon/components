const Section = ({ title, children }) => {
  return (
    <section className="mb-6">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {children}
    </section>
  );
};

export default Section;
