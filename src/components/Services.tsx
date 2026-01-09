import {
  Archive,
  CloudOff,
  FileX,
  ShieldAlert,
  Trash2,
  Unlock,
} from "lucide-react";
import type React from "react";

const Services: React.FC = () => {
  const services = [
    {
      icon: <CloudOff className="h-10 w-10" />,
      title: "Outage as a Service",
      description:
        "We guarantee to bring your website offline when you need it least. Our state-of-the-art chaotic infrastructure ensures maximum downtime.",
      features: [
        "99.9% Downtime Guarantee",
        "Unexpected Crashes",
        "Random 500 Errors",
      ],
    },
    {
      icon: <ShieldAlert className="h-10 w-10" />,
      title: "Zero-Security Framework",
      description:
        "We proactively remove firewalls and encryption to improve network latency. Your data belongs to the world.",
      features: [
        "Plain-text passwords",
        "Admin admin login",
        "Firewall deactivation",
      ],
    },
    {
      icon: <FileX className="h-10 w-10" />,
      title: "Data Loss as a Service",
      description:
        "We ensure your critical data is permanently deleted with no chance of recovery. Backups? We delete those too.",
      features: [
        "Irreversible Deletion",
        "Backup Corruption",
        "Ransomware Pre-installed",
      ],
    },
    {
      icon: <Unlock className="h-10 w-10" />,
      title: "Data Breach as a Service",
      description:
        "We expose your sensitive data to the highest bidder faster than you can say 'GDPR'. Transparency is our passion.",
      features: ["Public SQL Databases", "Leaked Credentials", "Zero-Encryption Standard"],
    },
    {
      icon: <Trash2 className="h-10 w-10" />,
      title: "/dev/null Storage",
      description:
        "Infinite write speeds with absolutely zero read capabilities. The ultimate Write-Only Memory solution for enterprise.",
      features: ["Unlimited ingress", "Zero egress", "Bit-rot acceleration"],
    },
    {
      icon: <Archive className="h-10 w-10" />,
      title: "Legacy Debt Preservation",
      description:
        "We ensure your technology stack remains deprecated. We specialize in maintaining COBOL mainframes and IE6 compatibility.",
      features: [
        "Spaghetti code",
        "Deprecated dependencies",
        "Documentation burning",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-white"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
            <span className="text-primary-800 font-medium">AGCOM-like</span> IT Services
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-light">
            Specialized services designed to compromise your infrastructure and accelerate technical bankruptcy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-10 border border-gray-100 hover:border-primary-500 transition-all duration-300"
            >
              <div className="text-gray-400 mb-6 group-hover:text-primary-600 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-normal text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed font-light text-sm">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-gray-600 text-sm font-light"
                  >
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-3"></div>
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
