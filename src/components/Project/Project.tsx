import { ArrowRight, CodeXml } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { db } from "../../firebase/firebase.config";
import { collection, getDocs } from "firebase/firestore";
import back from "../../assets/back_pro01.avif";
import { useEffect, useState } from "react";

// Definição do tipo para os projetos
interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  icon: React.ComponentType<{ className?: string }>; // Tipo para o ícone
  url: string; // URL do projeto
}

const Project = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const querySnapshot = await getDocs(collection(db, "projects"));

      const projectData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Project[]; // Cast para o tipo Project
      setProjects(projectData);
    };

    fetchProjects();
  }, []);

  const handleProjectClick = (url: string) => {
    // Redireciona para a URL do projeto
    window.open(url, "_blank");
  };

  return (
    <>
      <h1 className="font-bold text-2xl my-6 flex">
        PROJETOS <ArrowRight className="w-[35px] h-[35px] text-white " />
      </h1>

      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div
                onClick={() => handleProjectClick(project.url)}
                className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[230px] w-[215px] lg:h-[270px] lg:w-[350px] overflow-hidden cursor-pointer"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${back})` }}
                />
                <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                <div className="relative flex flex-col gap-3">
                  <CodeXml className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" />
                  <h1 className="text-xl lg:text-2xl">{project.title}</h1>
                  <p className="hidden lg:block lg:text-[18px]">
                    {project.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Project;
