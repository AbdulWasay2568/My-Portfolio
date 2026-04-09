import { useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { projects, techStackIcons, ProjectData } from '../data';

export default function ProjectDescription() {
  const { index } = useParams<{ index: string }>();
  const location = useLocation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Allow passing project via Link state; otherwise fallback to lookup by array index
  const state = (location.state as { project?: ProjectData; index?: number } | null) ?? null;
  const stateProject = state?.project;
  const stateIndex = typeof state?.index === 'number' ? state!.index : undefined;
  const paramIndex = index ? parseInt(index, 10) : undefined;
  const resolvedIndex = typeof stateIndex === 'number' ? stateIndex : (paramIndex ?? 0);
  const project = stateProject ?? projects[resolvedIndex];
  
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

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

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
          <div className="flex gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors"
            >
              <ExternalLink size={16} />
              See Live
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
            >
              <Github size={16} />
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Project Hero */}
        <section className="mb-16">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-96 object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                {project.category}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{project.title}</h1>
              <p className="text-xl text-gray-300 max-w-2xl">{project.tagline}</p>
            </div>
          </div>
        </section>

        {/* Case Study Breakdown */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div>
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
                      className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
                    >
                      <span className="text-lg">{techStackIcons[tech] || '⚙️'}</span>
                      <span className="font-medium">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-blue-400">Features Implemented</h2>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-green-400 mt-1">✓</span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges & Solutions */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-blue-400">Challenges & Solutions</h2>
                <div className="space-y-6">
                  {project.challenges.map((challenge, index) => (
                    <div key={index} className="bg-gray-900 rounded-lg p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-sm font-bold">
                            !
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-red-400 mb-2">Challenge</h3>
                          <p className="text-gray-300 mb-4">{challenge}</p>
                          <h3 className="font-semibold text-green-400 mb-2">Solution</h3>
                          <p className="text-gray-300">{project.solutions[index]}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-blue-400">Impact</h2>
                <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-lg p-6">
                  <p className="text-lg text-gray-300 leading-relaxed">{project.impact}</p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Links */}
              <div className="bg-gray-900 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-green-600 hover:bg-green-700 px-4 py-3 rounded-lg transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span>View Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 px-4 py-3 rounded-lg transition-colors"
                  >
                    <Github size={20} />
                    <span>View Source Code</span>
                  </a>
                </div>
              </div>

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
                    <span className="text-white">{project.features.length}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery/Demo Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-blue-400">Project Gallery</h2>
          <div className="relative bg-gray-900 rounded-2xl overflow-hidden">
            <div className="relative h-96">
              <img
                src={project.gallery[currentImageIndex]}
                alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              
              {/* Navigation Arrows */}
              {project.gallery.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  >
                    ←
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  >
                    →
                  </button>
                </>
              )}
            </div>
            
            {/* Image Indicators */}
            {project.gallery.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {project.gallery.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
          
          {/* Gallery Thumbnails */}
          {project.gallery.length > 1 && (
            <div className="flex gap-4 mt-6 overflow-x-auto">
              {project.gallery.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-colors ${
                    index === currentImageIndex ? 'border-blue-400' : 'border-gray-600'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
