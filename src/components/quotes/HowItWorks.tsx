import { MousePointerClick, ListChecks, FileText } from 'lucide-react'
import { FadeUp, StaggerContainer, StaggerItem } from './Motion'
import { motion } from 'framer-motion'

const steps = [
  {
    icon: MousePointerClick,
    title: '1. Choose the Type',
    description: 'Select the type of website or application you want to build from the available options.',
  },
  {
    icon: ListChecks,
    title: '2. Configure Features',
    description: 'Customize the project by adding the specific features you need.',
  },
  {
    icon: FileText,
    title: '3. Get Your Quote',
    description: 'Get an instant cost estimate and send us your request to be contacted.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 py-24 bg-white">
      <div className="container mx-auto px-6">
        <FadeUp>
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">
              How It <span className="font-medium text-primary-800">Works</span>
            </h2>
          </div>
        </FadeUp>
        <StaggerContainer className="grid gap-6 md:grid-cols-3" staggerDelay={0.15}>
          {steps.map((step) => (
            <StaggerItem key={step.title}>
              <motion.div
                whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                className="group flex flex-col items-center bg-white p-10 border border-gray-100 hover:border-primary-500 transition-all duration-300 text-center"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-500 group-hover:bg-primary-800 group-hover:text-white transition-colors duration-300">
                  <step.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-lg font-normal text-gray-900">{step.title}</h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed">{step.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
