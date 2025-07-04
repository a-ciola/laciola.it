import React from 'react';
import { Building, Factory, Briefcase, Heart } from 'lucide-react';

const Solutions: React.FC = () => {
  const solutions = [
    {
      icon: <Building className="h-12 w-12" />,
      title: 'Enterprise IT Solutions',
      description: 'Comprehensive IT frameworks designed for large-scale organizational transformation and technological excellence.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Factory className="h-12 w-12" />,
      title: 'Industrial Technology',
      description: 'Specialized IT methodologies for manufacturing and industrial sectors requiring precision and reliability.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Briefcase className="h-12 w-12" />,
      title: 'Professional IT Services',
      description: 'Tailored technology approaches for professional service organizations seeking competitive advantage and growth.',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      icon: <Heart className="h-12 w-12" />,
      title: 'Specialized Sectors',
      description: 'Custom IT solutions for specialized industries with unique regulatory and operational technology requirements.',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Industry-Specific
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> IT Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We understand that every industry has unique technological challenges and requirements. 
            Our specialized IT solutions are crafted to address sector-specific needs while 
            maintaining the highest standards of quality and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              <div className="relative z-10">
                <div className={`text-white mb-6 p-4 rounded-lg bg-gradient-to-r ${solution.gradient} inline-block`}>
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                <p className="text-gray-300 leading-relaxed">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;