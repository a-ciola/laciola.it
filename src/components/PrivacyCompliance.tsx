import React from 'react';
import { Shield, Lock, Eye, FileText, CheckCircle, AlertTriangle } from 'lucide-react';

const PrivacyCompliance: React.FC = () => {
  const complianceFrameworks = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'GDPR Compliance',
      description: 'Full adherence to European General Data Protection Regulation standards and requirements.'
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: 'ISO 27001',
      description: 'Information security management systems certified to international standards.'
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: 'SOC 2 Type II',
      description: 'Service Organization Control reporting for security, availability, and confidentiality.'
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: 'Industry Standards',
      description: 'Compliance with sector-specific regulatory requirements and best practices.'
    }
  ];

  const dataProtectionPrinciples = [
    'Data minimization and purpose limitation',
    'Transparent processing and lawful basis',
    'Security by design and default',
    'Regular compliance auditing and monitoring',
    'Cross-border transfer safeguards',
    'Individual rights and consent management'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Privacy &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Compliance</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Our commitment to data protection and regulatory compliance forms the foundation 
              of trust with our global clientele and stakeholders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {complianceFrameworks.map((framework, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
                <div className="text-blue-400 mb-4">
                  {framework.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{framework.title}</h3>
                <p className="text-gray-300 leading-relaxed">{framework.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <CheckCircle className="h-8 w-8 text-green-400 mr-4" />
              Data Protection Principles
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {dataProtectionPrinciples.map((principle, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-4"></div>
                  {principle}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <AlertTriangle className="h-8 w-8 text-yellow-400 mr-4" />
              Compliance Notice
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              This privacy and compliance framework is subject to periodic review and updates 
              in accordance with evolving regulatory requirements and industry best practices. 
              All stakeholders are advised to consult with their legal and compliance teams 
              regarding specific implementation requirements.
            </p>
            <p className="text-sm text-gray-400">
              Last updated: January 2024 | Next review: July 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyCompliance;