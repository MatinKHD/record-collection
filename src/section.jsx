import "./section.css";

function Section({ children, headingLevel = 1, headingText }) {
  const H = `h${headingLevel}`;
  return (
    <section className="section-container">
      <H>{headingText}</H>
      {children}
    </section>
  );
}

export default Section;
