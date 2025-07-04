import { ArrowRight, Play } from "lucide-react";
import type React from "react";

const Hero: React.FC = () => {
	return (
		<section
			id="home"
			className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden"
		>
			<div className="absolute inset-0 bg-black/30"></div>

			{/* Animated background elements */}
			<div className="absolute inset-0">
				<div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
			</div>

			<div className="container mx-auto px-6 relative z-10">
				<div className="max-w-4xl mx-auto text-center">
					<h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
						Transforming
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
							{" "}
							Information{" "}
						</span>
						Technology
					</h1>

					<p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
						We deliver cutting-edge information technology solutions that drive
						innovation, optimize performance, and unlock unprecedented value for
						global enterprises across diverse industries.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Hero;
