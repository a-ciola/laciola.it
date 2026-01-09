import type React from "react";

const Hero: React.FC = () => {
	return (
		<section
			id="home"
			className="relative min-h-screen flex items-center justify-center bg-gray-50 overflow-hidden"
		>
			{/* Minimal accent line */}
			<div className="absolute top-0 left-0 right-0 h-1 bg-primary-800"></div>

			{/* Faded Background Logo */}
			<div className="hidden lg:block absolute -right-20 md:-right-10 top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none z-0">
				<img
					src="/Logo.png"
					alt=""
					className="h-[50vh] md:h-[85vh] w-auto max-w-none grayscale"
				/>
			</div>

			<div className="container mx-auto px-6 relative z-10">
				<div className="max-w-5xl mx-auto text-center">
					<h1 className="text-6xl md:text-8xl font-light text-gray-900 mb-8 leading-tight tracking-tight">
						Transforming
						<span className="font-medium text-primary-800">
							{" "}
							Information
						</span>
						<br />
						Technology
					</h1>

					<p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
						Cutting-edge information technology solutions that drive
						innovation and unlock value for global enterprises.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Hero;
