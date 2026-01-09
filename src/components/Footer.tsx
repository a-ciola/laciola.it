import { Link } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";
import type React from "react";

const Footer: React.FC = () => {
	return (
		<footer className="bg-primary-950 text-white py-16 relative overflow-hidden border-t border-primary-900">
			{/* Accent line */}
			<div className="absolute top-0 left-0 right-0 h-1 bg-primary-800"></div>

			<div className="container mx-auto px-6 relative z-10">
				<div className="grid md:grid-cols-3 gap-12">
					<div className="col-span-2">
						<div className="flex items-center space-x-4 mb-8">
							<img
								src="/Logo.png"
								alt="Laciola"
								className="h-10 w-auto filter brightness-0 invert"
							/>
							<div className="flex flex-col">
								<span className="text-3xl font-bold text-white tracking-tight">
									Laciola
								</span>
								<span className="text-xs font-medium tracking-wider uppercase text-gray-300">
									Information Technology
								</span>
							</div>
						</div>
						<p className="text-gray-300 leading-relaxed mb-8 max-w-lg text-lg font-light">
							Pioneering innovative solutions that transform enterprises and
							drive sustainable growth across global markets. Your success is
							our unwavering commitment to excellence.
						</p>
						<div className="space-y-4">
							<div className="flex items-center space-x-3 text-gray-300 font-light">
								<Mail className="h-4 w-4 text-primary-300" />
								<span>info@laciola.it</span>
							</div>
							<div className="flex items-center space-x-3 text-gray-300 font-light">
								<MapPin className="h-4 w-4 text-primary-300" />
								<span>Milano, Italia</span>
							</div>
						</div>
					</div>

					<div className="flex flex-col justify-center">
						<h3 className="text-lg font-medium mb-6 text-white border-b border-primary-800 pb-2 inline-block w-max">
							Legal
						</h3>
						<div className="flex flex-col space-y-4">
							<Link
								to="/privacy"
								className="text-gray-300 hover:text-white text-left transition-colors cursor-pointer font-light"
							>
								Privacy & Compliance
							</Link>
							<Link
								to="/terms"
								className="text-gray-300 hover:text-white text-left transition-colors cursor-pointer font-light"
							>
								Terms of Engagement
							</Link>
							<Link
								to="/legal"
								className="text-gray-300 hover:text-white text-left transition-colors cursor-pointer font-light"
							>
								Legal Framework
							</Link>
						</div>
					</div>
				</div>

				<div className="pt-12 border-t border-primary-900 mt-12">
					<div className="text-center">
						<div className="text-gray-400 text-xs font-light">
							© {new Date().getFullYear()} Laciola. All rights reserved.
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
