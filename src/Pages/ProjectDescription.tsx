import { useState, useRef } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Play } from 'lucide-react';
import StackIcon from 'tech-stack-icons';
import { projectsByDomain, techStackIcons, ProjectData } from '../data/projects';

export default function ProjectDescription() {
  const { index } = useParams<{ index: string }>();
  const location = useLocation();
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const flatProjects = Object.values(projectsByDomain).flat();

  // Allow passing project via Link state; otherwise fallback to lookup by array index
  const state = (location.state as { project?: ProjectData; index?: number } | null) ?? null;
  const project = state?.project || (index ? flatProjects[parseInt(index)] : null);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0f0f0f] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-blue-400 hover:text-blue-300">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const allMedia = [
    ...(project.video ? [{ url: project.video, type: 'video' as const }] : []),
    ...(project.gallery || []).map(url => ({ url, type: 'image' as const }))
  ];

  const nextMedia = () => {
    setCurrentMediaIndex((prev) => (prev + 1) % allMedia.length);
  };

  const prevMedia = () => {
    setCurrentMediaIndex((prev) => (prev - 1 + allMedia.length) % allMedia.length);
  };

  const currentMedia = allMedia[currentMediaIndex];

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Navigation */}
      <div className="sticky top-0 z-50 bg-[#0f0f0f]/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </Link>
          {/* <div className="flex gap-4">
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors"
            >
              <ExternalLink size={16} />
              See Live
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
            >
              <Github size={16} />
              GitHub
            </a>
          </div> */}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Project Demo Section - Only show if there are videos or images */}
        {allMedia.length > 0 && (
          <section className="mb-12">
            <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
              <div className="relative min-h-[400px] md:min-h-[600px] flex items-center justify-center bg-black">
                {currentMedia.type === 'video' ? (
                  <video
                    key={currentMedia.url}
                    ref={videoRef}
                    src={currentMedia.url}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="max-w-full max-h-[800px] w-auto h-auto"
                  />
                ) : (
                  <img
                    key={currentMedia.url}
                    src={currentMedia.url}
                    alt={`${project.title} - ${currentMediaIndex}`}
                    className="max-w-full max-h-[800px] w-auto h-auto object-contain"
                  />
                )}
                
                {/* Navigation Arrows */}
                {allMedia.length > 1 && (
                  <>
                    <button
                      onClick={prevMedia}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all hover:scale-110 z-10"
                    >
                      ←
                    </button>
                    <button
                      onClick={nextMedia}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full transition-all hover:scale-110 z-10"
                    >
                      →
                    </button>
                  </>
                )}
              </div>
              
              {/* Media Overlay Info */}
              <div className="absolute top-6 left-6 z-10">
                <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-sm font-medium text-white">Project Demo</span>
                </div>
              </div>
            </div>
            
            {/* Media Thumbnails */}
            {allMedia.length > 1 && (
              <div className="flex gap-4 mt-6 overflow-x-auto pb-4 custom-scrollbar">
                {allMedia.map((media, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentMediaIndex(idx)}
                    className={`flex-shrink-0 w-28 h-16 rounded-lg overflow-hidden border-2 transition-all relative ${
                      idx === currentMediaIndex ? 'border-blue-500 scale-105' : 'border-gray-800 opacity-50 hover:opacity-100'
                    }`}
                  >
                    <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                      {media.type === 'video' ? (
                        <Play size={20} className="text-white opacity-80" />
                      ) : (
                        <img src={media.url} className="w-full h-full object-cover" alt="" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </section>
        )}

        {/* Case Study Breakdown */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">{project.title}</h1>
                <p className="text-xl text-blue-400 mb-8">{project.tagline}</p>
                <h2 className="text-3xl font-bold mb-6 text-blue-400">Overview</h2>
                <p className="text-lg text-gray-300 leading-relaxed">{project.overview}</p>
              </div>

              {/* Tech Stack */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-blue-400">Tech Stack Used</h2>
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech) => (
                    <div
                      key={tech}
                      className="flex items-center gap-3 bg-gray-800/50 hover:bg-gray-700/50 px-4 py-2 rounded-xl transition-all border border-gray-700/50 font-medium group"
                    >
                      {techStackIcons[tech] && (
                        <div className="w-6 h-6 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all">
                          <StackIcon name={techStackIcons[tech]} />
                        </div>
                      )}
                      <span className="text-gray-200 group-hover:text-white">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-blue-400">Features Implemented</h2>
                <ul className="space-y-3">
                  {(project.features || []).map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Links */}
              {/* <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-green-600 hover:bg-green-700 px-4 py-3 rounded-lg transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span>View Live Demo</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 px-4 py-3 rounded-lg transition-colors"
                  >
                    <Github size={20} />
                    <span>View Source Code</span>
                  </a>
                </div>
              </div> */}

              {/* Project Stats */}
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Project Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Category</span>
                    <span className="text-white">{project.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Technologies</span>
                    <span className="text-white">{project.techStack.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Features</span>
                    <span className="text-white">{(project.features || []).length}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
