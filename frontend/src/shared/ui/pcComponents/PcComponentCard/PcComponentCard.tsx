import Button from "../../common/Button/Button";

interface PcComponentCardProps {
  id: string | number;
  name: string;
  type: string;
  price: number;
  image: string | undefined;
}

const PlaceHolderPath = "/photos/placeholder.png";

function PcComponentCard(props: PcComponentCardProps) {
  return (
    <div
      className="bg-(--bg-secondary) border border-(--border-color) rounded-xl p-4 flex flex-col gap-3 transition-shadow duration-200 hover:shadow-[0_0_15px_var(--shadow-color)]"
      data-id={props.id}
    >
      <img
        className="w-full h-70 object-cover rounded-lg"
        src={props.image || PlaceHolderPath}
        alt={props.name}
        loading="lazy"
      />
      <h3 className="text-base font-semibold text-(--text-primary) m-0">
        {props.name}
      </h3>
      <p className="text-sm text-(--text-secondary) m-0">{props.type}</p>
      <div className="flex items-center justify-between mt-auto">
        <span className="text-lg font-bold text-(--primary)">
          {props.price} ₽
        </span>
        <Button variant="secondary">
          <img src="/icons/AddIcon.svg" alt="+" />
          Добавить
        </Button>
      </div>
    </div>
  );
}

export default PcComponentCard;
