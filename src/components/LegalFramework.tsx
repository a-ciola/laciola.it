import {
  AlertCircle,
  BookOpen,
  FileText,
  Globe,
  Scale,
  Shield,
} from "lucide-react";
import type React from "react";

const LegalFramework: React.FC = () => {
  const jurisdictions = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "European Union",
      description:
        "Compliance with EU regulations including GDPR, Digital Services Act, and sector-specific directives.",
    },
    {
      icon: <Scale className="h-8 w-8" />,
      title: "Italian Law",
      description:
        "Adherence to Italian commercial law, data protection regulations, and professional standards.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "International Standards",
      description:
        "Alignment with global best practices and cross-border regulatory requirements.",
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Industry Frameworks",
      description:
        "Compliance with sector-specific regulations and professional certification requirements.",
    },
  ];

  const legalAreas = [
    "Intellectual Property Protection",
    "Data Processing and Privacy Rights",
    "Commercial Contract Law",
    "Professional Liability and Insurance",
    "Cross-Border Transaction Compliance",
    "Regulatory Reporting and Disclosure",
    "Employment and Labor Relations",
    "Environmental and Sustainability Standards",
  ];

  const governanceStructure = [
    {
      title: "Legal Compliance Committee",
      description:
        "Oversight of regulatory adherence and risk management protocols",
    },
    {
      title: "Data Protection Officer",
      description:
        "Dedicated privacy and data protection compliance management",
    },
    {
      title: "Risk Management Framework",
      description:
        "Systematic identification and mitigation of legal and operational risks",
    },
    {
      title: "External Legal Counsel",
      description:
        "Specialized legal expertise for complex regulatory and commercial matters",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-light text-primary-950 mb-6">
              Legal
              <span className="font-medium text-primary-600">
                {" "}
                Framework
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed font-light">
              Our comprehensive legal framework ensures full compliance with
              applicable regulations while protecting the interests of all
              stakeholders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {jurisdictions.map((jurisdiction, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:border-primary-300 transition-colors"
              >
                <div className="text-primary-600 mb-4">{jurisdiction.icon}</div>
                <h3 className="text-2xl font-normal text-gray-900 mb-4">
                  {jurisdiction.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  {jurisdiction.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm mb-16">
            <h2 className="text-3xl font-light text-primary-900 mb-8 flex items-center">
              <BookOpen className="h-8 w-8 text-primary-500 mr-4" />
              Legal Coverage Areas
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {legalAreas.map((area, index) => (
                <div key={index} className="flex items-center text-gray-700 font-light">
                  <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-4"></div>
                  {area}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm mb-16">
            <h2 className="text-3xl font-light text-primary-900 mb-8">
              Governance Structure
            </h2>
            <div className="space-y-6">
              {governanceStructure.map((structure, index) => (
                <div
                  key={index}
                  className="border-l-4 border-primary-200 pl-6 hover:border-primary-500 transition-colors"
                >
                  <h4 className="text-xl font-normal text-gray-900 mb-2">
                    {structure.title}
                  </h4>
                  <p className="text-gray-600 font-light">{structure.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
            <h2 className="text-3xl font-light text-primary-900 mb-6 flex items-center">
              <AlertCircle className="h-8 w-8 text-primary-500 mr-4" />
              Legal Disclaimer
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 font-light">
              This legal framework provides general information about our
              compliance approach and should not be construed as legal advice.
              Specific legal matters require consultation with qualified legal
              professionals familiar with applicable jurisdictions and
              circumstances.
            </p>
            <div className="border-t border-gray-100 pt-6">
              <p className="text-sm text-gray-500 mb-2 font-light">
                <strong>Governing Law:</strong> Italian Law and European Union
                Regulations
              </p>
              <p className="text-sm text-gray-500 mb-2 font-light">
                <strong>Jurisdiction:</strong> Courts of Milano, Italy
              </p>
              <p className="text-sm text-gray-500 font-light">
                <strong>Last Updated:</strong> January 2024 |{" "}
                <strong>Review Cycle:</strong> Annual
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalFramework;
