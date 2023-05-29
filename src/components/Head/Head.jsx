export const Head = ({ clas, id, data, children }) => {
  console.log(children);
  return (
    <>
      {children}
      <p className={clas} id={id}>
        I am Head
      </p>
    </>
  );
};
