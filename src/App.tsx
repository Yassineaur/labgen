import AnimatedBackground from './components/AnimatedBackground';
import { useState } from 'react';
import { Zap, Sun, Moon} from 'lucide-react';
import { useTheme } from './hooks/useTheme';
import PasteModal from './components/PasteModal';
import DemoSequence from './components/DemoSequence';
import FeatureSection from './components/FeatureSection';
import ReportSlider from './components/ReportSlider';
import UploadSection from './components/UploadSection';
import TemplateSection from './components/TemplateSection';
import './styles/theme.css';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [showModal, setShowModal] = useState(false);

  const features = [
    {
      title: 'Dive depp with us',
      description: 'Check how to use our service flawlessly !',
      videoUrl:
        'https://www.youtube.com/watch?v=uXlWYZ022zU&ab_channel=AdamSaunders',
    },
  ];

  return (
    <div
      className={`min-h-screen ${theme} text-foreground bg-gradient-to-br from-background via-background/95 to-background`}
    >
      <AnimatedBackground />
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a
              href="#"
              className="flex items-center space-x-2 text-xl font-bold"
            >
              <Zap className="w-6 h-6 text-primary" />
              <span>GenSolutions</span>
            </a>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition"
              >
                Features
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition"
              >
                Templates
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition"
              >
                For Business
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition"
              >
                Pricing
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-muted transition"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
              <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition">
                Log in
              </button>
              <button className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Upload */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold leading-tight bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Professional Reports in a Flash!
            </h1>
            <p className="text-xl text-muted-foreground">
              Turn raw data into polished, professional reports in minutes. No
              hassle, just results!
              <span className="ml-2 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900">
                Free Trial
              </span>
            </p>
            <DemoSequence />
          </div>
          <div className="space-y-6">
            <UploadSection />
            <TemplateSection />
          </div>
        </div>
      </main>

      {/* Feature Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-32">
        {features.map((feature, index) => (
          <FeatureSection key={index} {...feature} />
        ))}
      </section>

      {/* Report Examples Slider */}
      <section className="bg-gradient-to-b from-transparent to-background/50 py-24">
        <ReportSlider />
      </section>

      <PasteModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
