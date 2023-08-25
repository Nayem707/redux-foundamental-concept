import { useGlobalContext } from '../../STATE MANAGEMENT/context/mealsContext';

const About = () => {
  const { data } = useGlobalContext();

  return (
    <div>
      <h1>About page</h1>
      {data.length < 1 ? (
        <h1>no item</h1>
      ) : (
        data.map((d) => {
          return <h1 key={d.name}>{d.name}</h1>;
        })
      )}
    </div>
  );
};

export default About;
