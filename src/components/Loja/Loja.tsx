import { useEffect, useState } from "react";
import HeroLoja from "../HeroLoja/HeroLoja";
import ProductCard from "../ProductCard/ProductCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase.config";

interface Item {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

const Loja = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      const querySnapshot = await getDocs(collection(db, "items"));
      setItems(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Item[]
      );
    };
    fetchItems();
  }, []);

  return (
    <>
      <HeroLoja />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {items.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default Loja;
