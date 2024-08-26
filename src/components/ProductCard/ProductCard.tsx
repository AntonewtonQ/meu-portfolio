import { useState } from "react";

const ProductCard = () => {
  const [isDisabled] = useState(true);

  return (
    <div className="border border-neutral-800 bg-dark text-white w-full max-w-sm rounded-lg overflow-hidden shadow-md">
      <div>
        <img
          src="https://rsv-ink-images-production.s3.sa-east-1.amazonaws.com/images/product_v2/main_image/1a373401e3585049d880fa94c63a5903.png"
          alt="Cafeina"
          className="w-full h-80 object-cover"
        />
      </div>
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold">VS Code</h3>
        <div className="flex items-center justify-between">
          {/* Se o botão estiver habilitado, o preço será exibido */}
          {!isDisabled && (
            <span className="text-2xl font-bold">10.000,00 AOA</span>
          )}
          <a>
            <button
              className={`w-full rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                isDisabled
                  ? "bg-neutral-300 text-black cursor-not-allowed"
                  : "bg-white text-black hover:bg-neutral-200"
              }`}
              disabled={isDisabled} // Desabilita o botão
            >
              COMPRAR
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
