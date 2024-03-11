import { type ProductItemType } from "@/app/ui/types";
import { formatMoney } from "@/app/utils";

type ProductListItemDescriptionProps = {
  product: ProductItemType;
};

export const ProductListItemDescription = ({
  product: { category, name, price },
}: ProductListItemDescriptionProps) => {
  return (
    <div className="mt-2 flex justify-between">
      <div>
        <h3 className="text-sm font-semibold text-gray-300">{name}</h3>
        <p className="text-sm text-gray-400">
          <span className="sr-only">Kategoria</span> {category}
        </p>
      </div>
      <p className="text-sm font-medium text-gray-400">
        <span>Cena:</span> {formatMoney(price / 100)}
      </p>
    </div>
  );
};
