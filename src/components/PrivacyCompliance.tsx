import {
  AlertTriangle,
  CheckCircle,
  Eye,
  FileText,
  Lock,
  Shield,
} from "lucide-react";
import type React from "react";

const PrivacyCompliance: React.FC = () => {
  const complianceFrameworks = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "GDPR Compliance",
      description:
        "Full adherence to European General Data Protection Regulation standards and requirements.",
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "ISO 27001",
      description:
        "Information security management systems certified to international standards.",
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "SOC 2 Type II",
      description:
        "Service Organization Control reporting for security, availability, and confidentiality.",
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Industry Standards",
      description:
        "Compliance with sector-specific regulatory requirements and best practices.",
    },
  ];

  const dataProtectionPrinciples = [
    "Data minimization and purpose limitation",
    "Transparent processing and lawful basis",
    "Security by design and default",
    "Regular compliance auditing and monitoring",
    "Cross-border transfer safeguards",
    "Individual rights and consent management",
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-light text-primary-950 mb-6">
              Privacy &
              <span className="font-medium text-primary-600">
                {" "}
                Compliance
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed font-light">
              Our commitment to data protection and regulatory compliance forms
              the foundation of trust with our global clientele and
              stakeholders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {complianceFrameworks.map((framework, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:border-primary-300 transition-colors"
              >
                <div className="text-primary-600 mb-4">{framework.icon}</div>
                <h3 className="text-2xl font-normal text-gray-900 mb-4">
                  {framework.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  {framework.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm mb-16">
            <h2 className="text-3xl font-light text-primary-900 mb-8 flex items-center">
              <CheckCircle className="h-8 w-8 text-emerald-500 mr-4" />
              Data Protection Principles
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {dataProtectionPrinciples.map((principle, index) => (
                <div key={index} className="flex items-center text-gray-700 font-light">
                  <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-4"></div>
                  {principle}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
            <h2 className="text-3xl font-light text-primary-900 mb-6 flex items-center">
              <AlertTriangle className="h-8 w-8 text-amber-500 mr-4" />
              Compliance Notice
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 font-light">
              This privacy and compliance framework is subject to periodic
              review and updates in accordance with evolving regulatory
              requirements and industry best practices. All stakeholders are
              advised to consult with their legal and compliance teams regarding
              specific implementation requirements.
            </p>
            <p className="text-sm text-gray-500 font-light">
              Last updated: January 2024 | Next review: July 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyCompliance;
