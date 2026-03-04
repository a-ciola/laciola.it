import type React from 'react';
import { ExternalLink } from 'lucide-react';

const QuoteSection: React.FC = () => {
	return (
		<section id="quote" className="pt-20 pb-40 bg-white">
			<div className="container mx-auto px-6">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
						Request a Quote
					</h2>
					<p className="text-gray-600 text-lg mb-8 leading-relaxed">
						Get a tailored proposal for your project on our dedicated quote
						platform.
					</p>
					<a
						href="https://quote.laciola.it"
						target="_blank"
						rel="noreferrer"
						className="inline-flex items-center gap-2 px-6 py-3 bg-primary-800 text-white font-medium rounded-md hover:bg-primary-900 transition-colors"
					>
						Go to Quote Website
						<ExternalLink className="h-4 w-4" aria-hidden="true" />
					</a>
				</div>
			</div>
		</section>
	);
};

export default QuoteSection;
