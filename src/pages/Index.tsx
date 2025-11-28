import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/FeatureCard";
import { Microscope, Table2, Beaker, MessageSquare, Sparkles, Zap, Cpu, Move, Thermometer, Stars } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import chemvisionImg from "@/assets/chemvision.jpg";
import periodicTableImg from "@/assets/periodic-table.jpg";
import biolabImg from "@/assets/biolab-3d.jpg";
import aiChatbotImg from "@/assets/ai-chatbot.jpg";
import rayOpticsImg from "@/assets/ray-optics.jpg";
import digitalElectronicsImg from "@/assets/digital-electronics.jpg";
import kinematicsImg from "@/assets/kinematics.jpg";
import thermodynamicsImg from "@/assets/thermodynamics.jpg";
import astrologyImg from "@/assets/astrology.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(135deg, hsl(187 85% 45% / 0.95), hsl(210 90% 55% / 0.95)), url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center text-white space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-4">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Explore Science Like Never Before</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Your Gateway to Scientific Discovery
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Dive into chemistry, biology, and AI-powered learning with our comprehensive suite of interactive tools
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold text-lg px-8">
                Learn More
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Powerful Tools for Every Explorer
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From molecular visualization to AI assistance, everything you need to explore the world of science
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <FeatureCard
            title="ChemVision"
            description="Visualize complex molecular structures in stunning 3D. Explore chemical compounds, understand bonding patterns, and dive deep into the molecular world with our advanced visualization tools."
            image={chemvisionImg}
            icon={<Microscope className="h-6 w-6" />}
          />
          
          <FeatureCard
            title="Periodic Table Explorer"
            description="Interactive periodic table with detailed information about every element. Discover properties, electron configurations, and fascinating facts about the building blocks of our universe."
            image={periodicTableImg}
            icon={<Table2 className="h-6 w-6" />}
          />
          
          <FeatureCard
            title="BioLab 3D"
            description="Step into a virtual 3D biology laboratory. Conduct experiments, examine cells under microscopes, study organisms, and explore biological processes in an immersive 3D environment."
            image={biolabImg}
            icon={<Beaker className="h-6 w-6" />}
          />
          
          <FeatureCard
            title="AI Chatbot"
            description="Your personal science tutor powered by AI. Ask questions, get instant explanations, and receive personalized learning support for all your chemistry and biology inquiries."
            image={aiChatbotImg}
            icon={<MessageSquare className="h-6 w-6" />}
          />
          
          <FeatureCard
            title="Ray Optics"
            description="Explore the behavior of light through interactive simulations. Study reflection, refraction, lens systems, and optical phenomena with real-time ray tracing and visualization tools."
            image={rayOpticsImg}
            icon={<Zap className="h-6 w-6" />}
          />
          
          <FeatureCard
            title="Digital Electronics"
            description="Learn digital logic design with interactive circuit simulations. Build and test logic gates, combinational circuits, sequential circuits, and understand the fundamentals of digital systems."
            image={digitalElectronicsImg}
            icon={<Cpu className="h-6 w-6" />}
          />
          
          <FeatureCard
            title="Kinematics"
            description="Master the physics of motion through interactive simulations. Analyze velocity, acceleration, projectile motion, and understand the principles of classical mechanics with visual demonstrations."
            image={kinematicsImg}
            icon={<Move className="h-6 w-6" />}
          />
          
          <FeatureCard
            title="Thermodynamics"
            description="Dive into the science of heat and energy transfer. Explore temperature, entropy, heat engines, and thermodynamic processes with interactive visualizations and simulations."
            image={thermodynamicsImg}
            icon={<Thermometer className="h-6 w-6" />}
          />
          
          <FeatureCard
            title="Astrology"
            description="Journey through the cosmos and explore celestial bodies. Study star charts, zodiac constellations, planetary positions, and discover the mysteries of the universe through interactive sky maps."
            image={astrologyImg}
            icon={<Stars className="h-6 w-6" />}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-accent rounded-3xl p-12 text-center text-white shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Exploring?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of students, educators, and science enthusiasts using our tools
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8">
            Start Your Journey
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p>© 2024 Science Explorer. Empowering curiosity through technology.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
