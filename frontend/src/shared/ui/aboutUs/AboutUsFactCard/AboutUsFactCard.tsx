interface AboutUsFactCardProps {
  title: string;
  content: string;
}

function AboutUsFactCard(props: AboutUsFactCardProps) {
  return (
    <div className="flex flex-col gap-4 bg-(--bg-secondary) px-8 py-4 rounded-xl">
      <h3 className="text-tprimary text-2xl">{props.title}</h3>
      <p className="text-tsecondary text-xs">{props.content}</p>
    </div>
  );
}

export default AboutUsFactCard;
