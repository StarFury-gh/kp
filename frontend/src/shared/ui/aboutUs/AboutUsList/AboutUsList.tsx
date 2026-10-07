import AboutUsFactCard from "../AboutUsFactCard";

interface Fact {
  title: string;
  content: string;
}

const Facts: Fact[] = [
  {
    title: "Fact 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ornare facilisis turpis eu suscipit. Aliquam egestas purus id purus maximus, sed bibendum lectus bibendum. Duis venenatis rhoncus blandit. Fusce fermentum, nisl sed tristique consequat, odio lacus venenatis metus, at sodales augue ante in odio. Nam in quam ac nulla eleifend fringilla. Aenean blandit mollis auctor. Nam sit amet risus quis dolor venenatis luctus eget at urna.",
  },
  {
    title: "Fact 2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ornare facilisis turpis eu suscipit. Aliquam egestas purus id purus maximus, sed bibendum lectus bibendum. Duis venenatis rhoncus blandit. Fusce fermentum, nisl sed tristique consequat, odio lacus venenatis metus, at sodales augue ante in odio. Nam in quam ac nulla eleifend fringilla. Aenean blandit mollis auctor. Nam sit amet risus quis dolor venenatis luctus eget at urna.",
  },
  {
    title: "Fact 3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ornare facilisis turpis eu suscipit. Aliquam egestas purus id purus maximus, sed bibendum lectus bibendum. Duis venenatis rhoncus blandit. Fusce fermentum, nisl sed tristique consequat, odio lacus venenatis metus, at sodales augue ante in odio. Nam in quam ac nulla eleifend fringilla. Aenean blandit mollis auctor. Nam sit amet risus quis dolor venenatis luctus eget at urna.",
  },
  {
    title: "Fact 4",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ornare facilisis turpis eu suscipit. Aliquam egestas purus id purus maximus, sed bibendum lectus bibendum. Duis venenatis rhoncus blandit. Fusce fermentum, nisl sed tristique consequat, odio lacus venenatis metus, at sodales augue ante in odio. Nam in quam ac nulla eleifend fringilla. Aenean blandit mollis auctor. Nam sit amet risus quis dolor venenatis luctus eget at urna.",
  },
];

function AboutUsList() {
  return (
    <div className="grid grid-cols-2 p-4 gap-4">
      {Facts.map((fact) => (
        <AboutUsFactCard title={fact.title} content={fact.content} />
      ))}
    </div>
  );
}

export default AboutUsList;
