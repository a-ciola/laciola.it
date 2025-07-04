import { Mail, MapPin } from "lucide-react";
import type React from "react";

interface FooterProps {
	onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
	return (
		<footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white py-20 relative overflow-hidden">
			{/* Background elements */}
			<div className="absolute inset-0">
				<div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
				<div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
			</div>

			<div className="container mx-auto px-6 relative z-10">
				<div className="grid md:grid-cols-4 gap-12 mb-16">
					<div className="col-span-2">
						<div className="flex items-center space-x-4 mb-8">
							<img
								src="/Logo.png"
								alt="Laciola"
								className="h-14 w-auto filter brightness-0 invert"
							/>
							<div className="flex flex-col">
								<span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
									Laciola
								</span>
								<span className="text-sm font-medium tracking-wider uppercase text-gray-400">
									Information Technology
								</span>
							</div>
						</div>
						<p className="text-gray-300 leading-relaxed mb-8 max-w-lg text-lg">
							Pioneering innovative solutions that transform enterprises and
							drive sustainable growth across global markets. Your success is
							our unwavering commitment to excellence.
						</p>
						<div className="space-y-4">
							<div className="flex items-center space-x-3 text-gray-300">
								<Mail className="h-5 w-5 text-blue-400" />
								<span>info@laciola.it</span>
							</div>
							<div className="flex items-center space-x-3 text-gray-300">
								<MapPin className="h-5 w-5 text-blue-400" />
								<span>Milano, Italia</span>
							</div>
						</div>
					</div>

					<div>
						<h3 className="text-xl font-bold mb-8 text-white">
							Excellence Areas
						</h3>
						<ul className="space-y-4 text-gray-300">
							<li className="hover:text-blue-400 transition-colors cursor-pointer">
								Strategic Consulting
							</li>
							<li className="hover:text-blue-400 transition-colors cursor-pointer">
								Digital Transformation
							</li>
							<li className="hover:text-blue-400 transition-colors cursor-pointer">
								Process Innovation
							</li>
							<li className="hover:text-blue-400 transition-colors cursor-pointer">
								Technology Integration
							</li>
							<li className="hover:text-blue-400 transition-colors cursor-pointer">
								Performance Optimization
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-xl font-bold mb-8 text-white">
							Global Presence
						</h3>
						<ul className="space-y-4 text-gray-300">
							<li className="hover:text-blue-400 transition-colors cursor-pointer">
								European Markets
							</li>
							<li className="hover:text-blue-400 transition-colors cursor-pointer">
								North America
							</li>
							<li className="hover:text-blue-400 transition-colors cursor-pointer">
								Asia Pacific
							</li>
							<li className="hover:text-blue-400 transition-colors cursor-pointer">
								Emerging Markets
							</li>
							<li className="hover:text-blue-400 transition-colors cursor-pointer">
								Strategic Partnerships
							</li>
						</ul>
					</div>
				</div>

				<div className="border-t border-gray-700/50 pt-12">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="text-gray-400 text-sm mb-4 md:mb-0">
							© 2025 Laciola. All rights reserved. Excellence in innovation
							since 2009.
						</div>
						<div className="flex space-x-8">
							<button
								onClick={() => onNavigate("privacy")}
								className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer"
							>
								Privacy & Compliance
							</button>
							<button
								onClick={() => onNavigate("terms")}
								className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer"
							>
								Terms of Engagement
							</button>
							<button
								onClick={() => onNavigate("legal")}
								className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer"
							>
								Legal Framework
							</button>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
