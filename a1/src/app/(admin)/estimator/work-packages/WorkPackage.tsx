import Search from "@/components/icons/Search";
import { Input } from "@/components/ui/input";
import Card, { CardProps } from "./Card";

const fetchDataCards: CardProps[] = [
  {
    name: "Work package 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa ea, dolorem velit consequuntur ex eveniet, voluptatum deleniti, eligendi temporibus animi mollitia facilis fuga. Aliquam eos commodi distinctio iusto debitis! 1.",
  },
  {
    name: "Work package 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa ea, dolorem velit consequuntur ex eveniet, voluptatum deleniti, eligendi temporibus animi mollitia facilis fuga. Aliquam eos commodi distinctio iusto debitis! 2.",
  },
  {
    name: "Work package 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa ea, dolorem velit consequuntur ex eveniet, voluptatum deleniti, eligendi temporibus animi mollitia facilis fuga. Aliquam eos commodi distinctio iusto debitis! 3.",
  },
  {
    name: "Work package 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa ea, dolorem velit consequuntur ex eveniet, voluptatum deleniti, eligendi temporibus animi mollitia facilis fuga. Aliquam eos commodi distinctio iusto debitis! 3.",
  },
  {
    name: "Work package 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa ea, dolorem velit consequuntur ex eveniet, voluptatum deleniti, eligendi temporibus animi mollitia facilis fuga. Aliquam eos commodi distinctio iusto debitis! 3.",
  },
  {
    name: "Work package 6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa ea, dolorem velit consequuntur ex eveniet, voluptatum deleniti, eligendi temporibus animi mollitia facilis fuga. Aliquam eos commodi distinctio iusto debitis! 3.",
  },
  {
    name: "Work package 7",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa ea, dolorem velit consequuntur ex eveniet, voluptatum deleniti, eligendi temporibus animi mollitia facilis fuga. Aliquam eos commodi distinctio iusto debitis! 3.",
  },
  {
    name: "Work package 8",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa ea, dolorem velit consequuntur ex eveniet, voluptatum deleniti, eligendi temporibus animi mollitia facilis fuga. Aliquam eos commodi distinctio iusto debitis! 3.",
  },
  {
    name: "Work package 9",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa ea, dolorem velit consequuntur ex eveniet, voluptatum deleniti, eligendi temporibus animi mollitia facilis fuga. Aliquam eos commodi distinctio iusto debitis! 3.",
  },
];

function WorkPackage() {
  return (
    <div className="flex flex-col gap-4">
      <Input
        className="h-[32px] border border-[#D3D3D3] rounded-[4px] focus-visible:border-[#D3D3D3] focus-visible:outline-none focus-visible:shadow-none focus-visible:ring-0"
        icon={<Search />}
      />
      <div className="grid grid-cols-3 gap-6">
        {fetchDataCards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
    </div>
  );
}

export default WorkPackage;
