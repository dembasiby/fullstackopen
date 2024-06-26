const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  const parts = props.parts.map((part, id) => {
    return <Part key={id} part={part.name} exercises={part.exercises} />;
  });
  return <div>{parts}</div>;
};

const Total = (props) => {
  const total = props.parts.reduce((acc, part) => {
    return acc + part.exercises;
  }, 0);

  return <p>Number of excercises = {total}</p>;
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
  const courseInfo = {
    name: "Half Stack Application Development",
    parts: [
      { name: "Fundamentals of React", exercises: 10 },
      { name: "Using props to pass data", exercises: 7 },
      { name: "State of a component", exercises: 14 },
    ],
  };

  const { course, parts } = courseInfo;

  return (
    <>
      <div>
        <Header course={course} />
        <Content parts={parts} />
        <Total parts={parts} />
      </div>
    </>
  );
};

export default App;
