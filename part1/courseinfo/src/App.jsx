const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const exercises = {
  1: 10,
  2: 7,
  3: 14,
};

const Content = () => {
  const part1 = "Fundamentals of React";
  const exercises1 = exercises[1];
  const part2 = "Using props to pass data";
  const exercises2 = exercises[2];
  const part3 = "State of a component";
  const exercises3 = exercises[3];

  return (
    <>
      <Part part={part1} exercises={exercises1} />
      <Part part={part2} exercises={exercises2} />
      <Part part={part3} exercises={exercises3} />
    </>
  );
};

const Total = (props) => {
  return <p>Number of excercises {props.total}</p>;
};

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};

const App = () => {
  const course = "Half Stack application development";
  return (
    <>
      <div>
        <Header course={course} />
        <Content />
        <Total total={exercises[1] + exercises[2] + exercises[3]} />
      </div>
    </>
  );
};

export default App;
