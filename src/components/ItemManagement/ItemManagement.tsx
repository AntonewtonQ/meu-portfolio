import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../firebase/firebase.config";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

// Definição da interface para o item da loja
interface Item {
  id: string;
  name: string;
  price: number;
  imageUrl: string; // Property for item image URL
}

const ItemManagement: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newItem, setNewItem] = useState<Omit<Item, "id">>({
    name: "",
    price: 0,
    imageUrl: "", // Initializing imageUrl property
  });

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

  const handleAddItem = async () => {
    if (newItem.name && newItem.price && newItem.imageUrl) {
      const docRef = await addDoc(collection(db, "items"), newItem);

      // Update item list after adding
      setItems((prevItems) => [...prevItems, { id: docRef.id, ...newItem }]);

      setIsModalOpen(false);
      setNewItem({ name: "", price: 0, imageUrl: "" });
    }
  };

  const handleEditItem = async (id: string, updatedItem: Partial<Item>) => {
    const itemRef = doc(db, "items", id);
    await updateDoc(itemRef, updatedItem);

    // Update item list after editing
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item
      )
    );
  };

  const handleDeleteItem = async (id: string) => {
    const itemRef = doc(db, "items", id);
    await deleteDoc(itemRef);

    // Update item list after deleting
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Gerenciar Itens da Loja</h2>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={() => setIsModalOpen(true)}
      >
        Adicionar Item
      </button>

      {/* Listagem e Botões de Editar/Deletar */}
      {items.map((item) => (
        <div key={item.id} className="flex justify-between mt-4">
          <span>{item.name}</span>
          <div>
            <button
              className="bg-yellow-400 text-black px-3 py-1 rounded-md mr-2"
              onClick={() =>
                handleEditItem(item.id, { name: "Item Editado", price: 2000 })
              }
            >
              Editar
            </button>
            <button
              className="bg-red-500 text-white px-3 py-1 rounded-md"
              onClick={() => handleDeleteItem(item.id)}
            >
              Deletar
            </button>
          </div>
        </div>
      ))}

      {/* Modal de Adicionar Item */}
      <Dialog
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        className="relative z-10 focus:outline-none"
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-black p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-white"
              >
                Adicionar Novo Item
              </DialogTitle>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleAddItem();
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium text-neutral-200">
                    Nome do Item
                  </label>
                  <input
                    type="text"
                    value={newItem.name}
                    onChange={(e) =>
                      setNewItem({ ...newItem, name: e.target.value })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-200">
                    Preço
                  </label>
                  <input
                    type="number"
                    value={newItem.price}
                    onChange={(e) =>
                      setNewItem({
                        ...newItem,
                        price: parseFloat(e.target.value),
                      })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-200">
                    URL da Imagem
                  </label>
                  <input
                    type="url"
                    value={newItem.imageUrl}
                    onChange={(e) =>
                      setNewItem({ ...newItem, imageUrl: e.target.value })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                    required
                  />
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                  >
                    Adicionar
                  </button>
                </div>
              </form>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default ItemManagement;
