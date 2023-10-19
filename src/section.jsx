function Section({ children, headingLevel = 1, headingText }) {
  const H = `h${headingLevel}`;
  return (
    <section>
      <H>{headingText}</H>
      {children}
    </section>
  );
}

export default Section;
