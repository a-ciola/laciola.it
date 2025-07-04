import React from 'react';
import { Target, Users, Award, Zap } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: '15+', label: 'Years Excellence' },
    { number: '500+', label: 'Global Clients' },
    { number: '50+', label: 'Countries Served' },
    { number: '99.9%', label: 'Success Rate' },
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Strategic Vision',
      description: 'We leverage advanced IT methodologies to deliver transformative outcomes that align with your organizational objectives.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Expert Leadership',
      description: 'Our seasoned IT professionals bring decades of experience in driving technological innovation across multiple industry verticals.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Proven Excellence',
      description: 'Recognition from industry leaders validates our commitment to delivering exceptional IT value and measurable results.'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Innovation Focus',
      description: 'Cutting-edge technologies and forward-thinking IT approaches enable us to stay ahead of market dynamics.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Leading the Future of
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Information Technology</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            For over a decade, we have been at the forefront of technological advancement, 
            partnering with organizations worldwide to unlock their full potential through 
            innovative IT strategies and comprehensive technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="group p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-blue-600 mb-4 group-hover:text-purple-600 transition-colors">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;