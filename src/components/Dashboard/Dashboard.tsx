// Dashboard.tsx
import ProjectManagement from "../ProjectManagement/ProjectManagement";
import ItemManagement from "../ItemManagement/ItemManagement";

const Dashboard: React.FC = () => {
  return (
    <div className="p-4 md:p-6">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
        Gestão de Projetos e Itens da Loja
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <ProjectManagement />
        <ItemManagement />
      </div>
    </div>
  );
};

export default Dashboard;
