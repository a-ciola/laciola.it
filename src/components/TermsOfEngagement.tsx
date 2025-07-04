import {
	Award,
	Briefcase,
	Clock,
	Handshake,
	Target,
	Users,
} from "lucide-react";
import type React from "react";

const TermsOfEngagement: React.FC = () => {
	const engagementPrinciples = [
		{
			icon: <Target className="h-8 w-8" />,
			title: "Strategic Alignment",
			description:
				"All engagements are structured to align with client strategic objectives and organizational priorities.",
		},
		{
			icon: <Clock className="h-8 w-8" />,
			title: "Delivery Excellence",
			description:
				"Commitment to timely delivery while maintaining the highest standards of quality and precision.",
		},
		{
			icon: <Award className="h-8 w-8" />,
			title: "Performance Standards",
			description:
				"Adherence to industry-leading performance metrics and continuous improvement methodologies.",
		},
		{
			icon: <Users className="h-8 w-8" />,
			title: "Collaborative Approach",
			description:
				"Partnership-based engagement model fostering knowledge transfer and capability development.",
		},
	];

	const serviceCategories = [
		"Strategic Consulting and Advisory Services",
		"Technology Implementation and Integration",
		"Process Optimization and Transformation",
		"Risk Management and Compliance",
		"Performance Analytics and Reporting",
		"Change Management and Training",
	];

	const engagementPhases = [
		{
			phase: "Discovery & Assessment",
			description:
				"Comprehensive analysis of current state and strategic requirements",
		},
		{
			phase: "Solution Design",
			description:
				"Development of tailored solutions and implementation roadmaps",
		},
		{
			phase: "Implementation",
			description:
				"Execution of agreed solutions with continuous monitoring and adjustment",
		},
		{
			phase: "Optimization",
			description:
				"Performance enhancement and knowledge transfer for sustained value",
		},
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
							Terms of
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
								{" "}
								Engagement
							</span>
						</h1>
						<p className="text-xl text-gray-300 leading-relaxed">
							Our engagement framework establishes clear expectations and
							deliverables for successful partnership outcomes and mutual value
							creation.
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-8 mb-16">
						{engagementPrinciples.map((principle, index) => (
							<div
								key={index}
								className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20"
							>
								<div className="text-blue-400 mb-4">{principle.icon}</div>
								<h3 className="text-2xl font-bold text-white mb-4">
									{principle.title}
								</h3>
								<p className="text-gray-300 leading-relaxed">
									{principle.description}
								</p>
							</div>
						))}
					</div>

					<div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 mb-16">
						<h2 className="text-3xl font-bold text-white mb-8 flex items-center">
							<Briefcase className="h-8 w-8 text-purple-400 mr-4" />
							Service Categories
						</h2>
						<div className="grid md:grid-cols-2 gap-4">
							{serviceCategories.map((category, index) => (
								<div key={index} className="flex items-center text-gray-300">
									<div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-4"></div>
									{category}
								</div>
							))}
						</div>
					</div>

					<div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 mb-16">
						<h2 className="text-3xl font-bold text-white mb-8 flex items-center">
							<Handshake className="h-8 w-8 text-green-400 mr-4" />
							Engagement Phases
						</h2>
						<div className="space-y-6">
							{engagementPhases.map((phase, index) => (
								<div key={index} className="flex items-start space-x-4">
									<div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
										{index + 1}
									</div>
									<div>
										<h4 className="text-xl font-bold text-white mb-2">
											{phase.phase}
										</h4>
										<p className="text-gray-300">{phase.description}</p>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
						<h2 className="text-3xl font-bold text-white mb-6">
							Engagement Framework
						</h2>
						<p className="text-gray-300 leading-relaxed mb-6">
							These terms of engagement establish the foundation for
							professional services delivery and are subject to specific project
							requirements and contractual agreements. All engagements are
							governed by applicable laws and industry standards.
						</p>
						<p className="text-sm text-gray-400">
							Framework version: 2024.1 | Effective date: January 2024
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TermsOfEngagement;
