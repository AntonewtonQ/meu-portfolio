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

// Definição da interface para o projeto
interface Project {
  id: string;
  title: string;
  description: string;
  url: string; // Nova propriedade para a URL do projeto
}

const ProjectManagement: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProject, setNewProject] = useState<Omit<Project, "id">>({
    title: "",
    description: "",
    url: "", // Inicializando a propriedade de URL
  });

  useEffect(() => {
    const fetchProjects = async () => {
      const querySnapshot = await getDocs(collection(db, "projects"));
      setProjects(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Project[]
      );
    };
    fetchProjects();
  }, []);

  const handleAddProject = async () => {
    if (newProject.title && newProject.description && newProject.url) {
      const docRef = await addDoc(collection(db, "projects"), newProject);

      // Atualizar lista de projetos após adicionar
      setProjects((prevProjects) => [
        ...prevProjects,
        { id: docRef.id, ...newProject },
      ]);

      setIsModalOpen(false);
      setNewProject({ title: "", description: "", url: "" });
    }
  };

  const handleEditProject = async (
    id: string,
    updatedProject: Partial<Project>
  ) => {
    const projectRef = doc(db, "projects", id);
    await updateDoc(projectRef, updatedProject);

    // Atualizar lista de projetos após editar
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === id ? { ...project, ...updatedProject } : project
      )
    );
  };

  const handleDeleteProject = async (id: string) => {
    const projectRef = doc(db, "projects", id);
    await deleteDoc(projectRef);

    // Atualizar lista de projetos removendo o projeto deletado
    setProjects((prevProjects) =>
      prevProjects.filter((project) => project.id !== id)
    );
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Gerenciar Projetos</h2>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={() => setIsModalOpen(true)}
      >
        Adicionar Projeto
      </button>

      {/* Listagem e Botões de Editar/Deletar */}
      {projects.map((project) => (
        <div key={project.id} className="flex justify-between mt-4">
          <span>{project.title}</span>
          <div>
            <button
              className="bg-yellow-400 text-black px-3 py-1 rounded-md mr-2"
              onClick={() =>
                handleEditProject(project.id, { title: "Título Editado" })
              }
            >
              Editar
            </button>
            <button
              className="bg-red-500 text-white px-3 py-1 rounded-md"
              onClick={() => handleDeleteProject(project.id)}
            >
              Deletar
            </button>
          </div>
        </div>
      ))}

      {/* Modal de Adicionar Projeto */}
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
                Adicionar Novo Projeto
              </DialogTitle>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleAddProject();
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium text-neutral-200">
                    Título
                  </label>
                  <input
                    type="text"
                    value={newProject.title}
                    onChange={(e) =>
                      setNewProject({ ...newProject, title: e.target.value })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-200">
                    Descrição
                  </label>
                  <textarea
                    value={newProject.description}
                    onChange={(e) =>
                      setNewProject({
                        ...newProject,
                        description: e.target.value,
                      })
                    }
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                    rows={4}
                    required
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-200">
                    URL do Projeto
                  </label>
                  <input
                    type="url"
                    value={newProject.url}
                    onChange={(e) =>
                      setNewProject({
                        ...newProject,
                        url: e.target.value,
                      })
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

export default ProjectManagement;
