import React from 'react';
import { Globe, Shield, Settings, TrendingUp, Database, Cloud } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Globe className="h-10 w-10" />,
      title: 'System Integration',
      description: 'Seamlessly connect disparate IT systems and processes across multiple platforms with our comprehensive integration frameworks.',
      features: ['Cross-platform compatibility', 'Scalable architecture', 'Real-time synchronization']
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: 'Cybersecurity',
      description: 'Advanced protection protocols and security frameworks ensure your critical IT assets remain secure and compliant.',
      features: ['Enterprise-grade encryption', 'Threat detection', 'Security assessment']
    },
    {
      icon: <Settings className="h-10 w-10" />,
      title: 'IT Optimization',
      description: 'Streamline IT operations through intelligent automation and workflow enhancement methodologies tailored to your requirements.',
      features: ['Process automation', 'Performance analytics', 'System optimization']
    },
    {
      icon: <TrendingUp className="h-10 w-10" />,
      title: 'Business Intelligence',
      description: 'Harness the power of data-driven insights to make informed decisions and identify new technological opportunities.',
      features: ['Data analytics', 'Reporting systems', 'Predictive modeling']
    },
    {
      icon: <Database className="h-10 w-10" />,
      title: 'Data Management',
      description: 'Comprehensive data governance and management solutions that ensure accuracy, accessibility, and actionable insights.',
      features: ['Database optimization', 'Data migration', 'Backup solutions']
    },
    {
      icon: <Cloud className="h-10 w-10" />,
      title: 'Cloud Solutions',
      description: 'Leverage cloud-native technologies to enhance scalability, reduce costs, and accelerate digital transformation initiatives.',
      features: ['Cloud migration', 'Infrastructure management', 'Hybrid solutions']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> IT Service Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Our diverse range of specialized IT services addresses the complex technological challenges 
            facing modern enterprises, delivering measurable value across all operational dimensions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="text-blue-600 mb-6 group-hover:text-purple-600 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;