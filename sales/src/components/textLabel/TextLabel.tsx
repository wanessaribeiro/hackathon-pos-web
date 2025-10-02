import "./TextLabel.css";

type TextLabel = {
  label: string;
  text: string;
  row?: boolean;
  boldRow?: boolean;
};

export default function TextLabel({ label, text, row, boldRow }: TextLabel) {
  return (
    <div className={row || boldRow ? "containerRow" : "containerColumn"}>
      <p className={row ? "desc" : boldRow ? "boldRow" : "label"}>{label}</p>
      <p className={"desc"}>{text}</p>
    </div>
  );
}
