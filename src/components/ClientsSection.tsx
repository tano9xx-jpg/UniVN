import React, { useState } from 'react';
import { CLIENT_PARTNERS } from '../data/siteData';
import { CLIENT_PROJECTS, findProjectForPartner, ClientProjectItem } from '../data/clientProjectsData';
import { ClientProjectModal } from './ClientProjectModal';
import { Sparkles, Building2 } from 'lucide-react';

export const ClientsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ClientProjectItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenProject = (partnerIdentifier: string) => {
    const proj = findProjectForPartner(partnerIdentifier);
    setSelectedProject(proj);
    setIsModalOpen(true);
  };

  const handlePrev = () => {
    if (!selectedProject) return;
    const currentIndex = CLIENT_PROJECTS.findIndex(p => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + CLIENT_PROJECTS.length) % CLIENT_PROJECTS.length;
    setSelectedProject(CLIENT_PROJECTS[prevIndex]);
  };

  const handleNext = () => {
    if (!selectedProject) return;
    const currentIndex = CLIENT_PROJECTS.findIndex(p => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % CLIENT_PROJECTS.length;
    setSelectedProject(CLIENT_PROJECTS[nextIndex]);
  };

  return (
    <section className="space-y-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#91c544]/15 border border-[#91c544]/30 rounded-full text-xs font-semibold text-[#68942b]">
          <Sparkles className="w-3.5 h-3.5 text-[#0baba0]" />
          <span>Uy Tín Khẳng Định Qua Hơn 2.500+ Khách Hàng</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
          Khách Hàng Tin Dùng
        </h2>
        <p className="text-slate-500 text-xs sm:text-sm">
          Sự hài lòng của khách hàng chính là thành công lớn nhất của Uni Creation
        </p>
      </div>

      {/* Modern Logo Grid (matching exact grid arrangement in image.png) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
        {CLIENT_PARTNERS.map((client, idx) => (
          <div
            key={idx}
            onClick={() => handleOpenProject(client.name)}
            title={`Bấm để xem thông tin dự án ${client.name}`}
            className="p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-[#0baba0] hover:shadow-lg hover:shadow-[#0baba0]/10 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 flex flex-col items-center justify-center text-center group min-h-[90px] cursor-pointer"
          >
            <div className="font-black tracking-wider text-slate-700 group-hover:text-[#0baba0] transition-colors font-mono text-xs sm:text-sm uppercase text-center line-clamp-1">
              {client.logoText}
            </div>
            <span className="text-[10px] text-slate-400 group-hover:text-slate-600 transition-colors mt-1 truncate max-w-full">
              {client.category}
            </span>
          </div>
        ))}
      </div>

      {/* Client Project Details Modal Popup */}
      <ClientProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
};
