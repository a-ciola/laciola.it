import { Award, Target, Users, Zap } from "lucide-react";
import type React from "react";

const About: React.FC = () => {
	const stats = [
		{ number: "15+", label: "Years Excellence" },
		{ number: "500+", label: "Global Clients" },
		{ number: "50+", label: "Countries Served" },
		{ number: "99.9%", label: "Success Rate" },
	];

	const values = [
		{
			icon: <Target className="h-8 w-8" />,
			title: "Strategic Vision",
			description:
				"We leverage advanced IT methodologies to deliver transformative outcomes that align with your organizational objectives.",
		},
		{
			icon: <Users className="h-8 w-8" />,
			title: "Expert Leadership",
			description:
				"Our seasoned IT professionals bring decades of experience in driving technological innovation across multiple industry verticals.",
		},
		{
			icon: <Award className="h-8 w-8" />,
			title: "Proven Excellence",
			description:
				"Recognition from industry leaders validates our commitment to delivering exceptional IT value and measurable results.",
		},
		{
			icon: <Zap className="h-8 w-8" />,
			title: "Innovation Focus",
			description:
				"Cutting-edge technologies and forward-thinking IT approaches enable us to stay ahead of market dynamics.",
		},
	];

	return (
		<section id="about" className="py-20 bg-white">
			<div className="container mx-auto px-6">
				<div className="max-w-3xl mx-auto text-center mb-20">
					<h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">
						Leading the Future of <span className="text-primary-800 font-medium">Information Technology</span>
					</h2>
					<p className="text-lg text-gray-600 leading-relaxed font-light">
						For over a decade, we've partnered with organizations worldwide to unlock their
						full potential through innovative IT strategies.
					</p>
				</div>

				<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
					{stats.map((stat, index) => (
						<div
							key={index}
							className="text-center p-8 bg-white border border-gray-100 hover:border-primary-500 transition-all duration-300"
						>
							<div className="text-5xl md:text-6xl font-light text-gray-900 mb-3">
								{stat.number}
							</div>
							<div className="text-gray-500 text-sm font-light tracking-wide">{stat.label}</div>
						</div>
					))}
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
					{values.map((value, index) => (
						<div
							key={index}
							className="group p-8 bg-white border-l-2 border-gray-200 hover:border-primary-500 transition-all duration-300"
						>
							<div className="text-gray-400 mb-6 group-hover:text-primary-600 transition-colors">
								{value.icon}
							</div>
							<h3 className="text-xl font-normal text-gray-900 mb-3">
								{value.title}
							</h3>
							<p className="text-gray-600 leading-relaxed font-light text-sm">
								{value.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default About;
