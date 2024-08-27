// ProjectForm.tsx
import { useState } from "react";

// Tipagem das props do formulário
interface ProjectFormProps {
  initialData?: { title: string; description: string };
  onSubmit: (data: { title: string; description: string }) => void;
}

const ProjectForm: React.FC<ProjectFormProps> = ({
  initialData = { title: "", description: "" },
  onSubmit,
}) => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Título do Projeto"
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Descrição do Projeto"
      />
      <button type="submit">Salvar</button>
    </form>
  );
};

export default ProjectForm;
