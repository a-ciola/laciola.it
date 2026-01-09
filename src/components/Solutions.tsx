import { Briefcase, Building, Factory, Heart } from "lucide-react";
import type React from "react";

const Solutions: React.FC = () => {
	const solutions = [
		{
			icon: <Building className="h-12 w-12" />,
			title: "Enterprise IT Solutions",
			description:
				"Comprehensive IT frameworks designed for large-scale organizational transformation and technological excellence.",
			color: "emerald",
		},
		{
			icon: <Factory className="h-12 w-12" />,
			title: "Industrial Technology",
			description:
				"Specialized IT methodologies for manufacturing and industrial sectors requiring precision and reliability.",
			color: "slate",
		},
		{
			icon: <Briefcase className="h-12 w-12" />,
			title: "Professional IT Services",
			description:
				"Tailored technology approaches for professional service organizations seeking competitive advantage and growth.",
			color: "emerald",
		},
		{
			icon: <Heart className="h-12 w-12" />,
			title: "Specialized Sectors",
			description:
				"Custom IT solutions for specialized industries with unique regulatory and operational technology requirements.",
			color: "slate",
		},
	];

	return (
		<section id="solutions" className="py-20 bg-white">
			<div className="container mx-auto px-6">
				<div className="max-w-3xl mx-auto text-center mb-20">
					<h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
						Industry-Specific <span className="text-primary-800 font-medium">Solutions</span>
					</h2>
					<p className="text-lg text-gray-600 leading-relaxed font-light">
						Tailored IT solutions crafted to address unique sector-specific needs and challenges.
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-6 mb-16">
					{solutions.map((solution, index) => (
						<div
							key={index}
							className="group bg-white border-t-2 border-gray-200 p-10 hover:border-primary-500 transition-all duration-300"
						>
							<div className="text-gray-400 group-hover:text-primary-600 mb-6 transition-colors">
								{solution.icon}
							</div>
							<h3 className="text-2xl font-normal text-gray-900 mb-4">
								{solution.title}
							</h3>
							<p className="text-gray-600 leading-relaxed font-light">
								{solution.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Solutions;
