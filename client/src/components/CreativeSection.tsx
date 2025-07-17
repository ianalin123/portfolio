import { Instagram, ExternalLink, Play } from 'lucide-react';
import QuoteRotator from './QuoteRotator';

export default function CreativeSection() {
  const instagramImages = [
    {
      src: "../../../attached_assets/media/IMG_0069.JPG"
      alt: "Gray cat in Korean cat cafe"
    },
    {
      src: "https://images.unsplash.com/photo-1542640244-7e672d6cef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      alt: "Chinese water town canal"
    },
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      alt: "Mountain view from wooden deck"
    },
    {
      src: "https://images.unsplash.com/photo-1571566882372-1598d88abd90?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      alt: "Orange cat on concrete"
    },
    {
      src: "https://images.unsplash.com/photo-1515974256630-babc85765b1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      alt: "Chinese canal at night with lanterns"
    }
  ];

  const entrepreneurshipJourney = [
    {
      title: "Slime Business",
      subtitle: "Early digital commerce",
      description: "Built an early understanding of digital marketing, customer engagement, and creative product development through hands-on entrepreneurship.",
      color: "border-synapse-500"
    },
    {
      title: "Nonprofit Bakery",
      subtitle: "Social impact through food",
      description: "Combined passion for baking with community service, developing skills in operations, social media storytelling, and purpose-driven business.",
      color: "border-neural-500"
    },
    {
      title: "Design & Branding",
      subtitle: "Visual identity creation",
      description: "Developed logo design and social media aesthetic skills, bridging technical abilities with creative visual communication.",
      color: "border-synapse-600"
    }
  ];

  return (
    <section id="creative" className="py-20 bg-gray-50 dark:bg-gray-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-left mb-16 ragged-left">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-4 vintage-tilt">
            Creative <span className="text-synapse-600 dark:text-synapse-400">&</span> Personal
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl font-mono ragged-right">
            The intersection of art, entrepreneurship, and digital storytelling.
          </p>
          <div className="w-32 h-1 signal-wave mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="vintage-border glassmorphism rounded-2xl p-8 ragged-right">
              <h3 className="font-serif text-2xl font-semibold mb-6 flex items-center vintage-tilt">
                <Instagram className="text-synapse-500 mr-3" size={24} />
                Visual Stories
              </h3>
              
              <div className="grid grid-cols-3 gap-2 mb-6">
                {instagramImages.map((image, index) => (
                  <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className="rounded-lg aspect-square object-cover"
                  />
                ))}
              </div>
              
              <div className="text-center">
                <a
                  href="https://instagram.com/iana.lin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-synapse-600 dark:text-synapse-400 hover:text-synapse-700 dark:hover:text-synapse-300 transition-colors duration-200"
                >
                  <span className="font-medium">@iana.lin</span>
                  <ExternalLink className="ml-2" size={16} />
                </a>
              </div>
            </div>

            <div className="glassmorphism rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-semibold mb-6">Ambient Spaces</h3>
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Play className="text-4xl text-gray-400 mb-2 mx-auto" size={48} />
                    <p className="text-sm text-gray-500">Ambient workspace video</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <QuoteRotator />

            <div className="glassmorphism rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-semibold mb-6">Entrepreneurship Journey</h3>
              
              <div className="space-y-6">
                {entrepreneurshipJourney.map((item, index) => (
                  <div key={index} className={`border-l-4 ${item.color} pl-6`}>
                    <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{item.subtitle}</p>
                    <p className="text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
