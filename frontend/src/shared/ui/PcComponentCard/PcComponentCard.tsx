import Button from "../Button/Button";

interface PcComponentCardProps {
  id: string | number;
  name: string;
  type: string;
  price: number;
  image: string | undefined;
}

function PcComponentCard(props: PcComponentCardProps) {
  return (
    <div
      className="bg-(--bg-secondary) border border-(--border-color) rounded-xl p-4 flex flex-col gap-3 transition-shadow duration-200 hover:shadow-[0_0_15px_var(--shadow-color)] hover:border-(--primary)"
      data-id={props.id}
    >
      {props.image && (
        <img
          className="w-full h-45 object-cover rounded-lg"
          src={props.image}
          alt={props.name}
          loading="lazy"
        />
      )}
      <h3 className="text-base font-semibold text-(--text-primary) m-0">
        {props.name}
      </h3>
      <p className="text-sm text-(--text-secondary) m-0">{props.type}</p>
      <div className="flex items-center justify-between mt-auto">
        <span className="text-lg font-bold text-(--primary)">
          {props.price} ₽
        </span>
        <Button>Добавить</Button>
      </div>
    </div>
  );
}

export default PcComponentCard;
