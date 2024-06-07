const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const exercises = {
  1: 10,
  2: 7,
  3: 14,
};

const Content = () => {
  const part1 = { name: "Fundamentals of React", exercises: 10 };
  const part2 = { name: "Using props to pass data", exercises: 7 };
  const part3 = { name: "State of a component", exercises: 14 };

  return (
    <>
      <Part part={part1.name} exercises={part1.exercises} />
      <Part part={part2.name} exercises={part2.exercises} />
      <Part part={part3.name} exercises={part3.exercises} />
    </>
  );
};

const Total = (props) => {
  return <p>Number of excercises {props.total}</p>;
};

const Part = (props) => {
  console.log(props);
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
