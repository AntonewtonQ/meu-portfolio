import { AlertCircle } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <AlertCircle className="w-16 h-16 text-red-600 mb-4" />
      <h1 className="text-4xl font-bold text-gray-800">
        404: Página Não Encontrada
      </h1>
      <p className="text-gray-600 mt-2">
        A página que você está procurando não existe.
      </p>
    </div>
  );
};

export default NotFound;
