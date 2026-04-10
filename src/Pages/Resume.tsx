import { ArrowLeft, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Resume() {
  const resumeUrl = "https://drive.google.com/file/d/1Go72XH-51jejt5rkI-tzrCfSzLWiOx7n/preview";
  const downloadUrl = "https://drive.google.com/uc?export=download&id=1Go72XH-51jejt5rkI-tzrCfSzLWiOx7n";

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white flex flex-col">
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
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg transition-colors text-sm font-medium"
            >
              <Download size={18} />
              Download PDF
            </a>
          </div>
        </div>
      </div>

        <iframe 
        src={resumeUrl} 
        className="w-full h-full absolute inset-0 border-none"
        allow="autoplay"
        title="Resume Preview"
        ></iframe>
    </div>
  );
}
