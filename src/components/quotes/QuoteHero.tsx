import { motion, type Variants, type Easing } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number] as unknown as Easing

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

export function QuoteHero() {
  return (
    <section className="relative flex min-h-[50vh] flex-col items-center justify-center bg-gray-50 px-6 py-24 text-center overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-primary-800" />
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-3xl"
      >
        <motion.p
          variants={fadeUp}
          className="mb-4 text-sm font-medium uppercase tracking-widest text-gray-500"
        >
          Laciola Information Technology
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="text-4xl md:text-6xl font-light text-gray-900 leading-tight tracking-tight"
        >
          Configure your{' '}
          <span className="font-medium text-primary-800">quote</span>
          {' '}in a few clicks
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-xl text-lg text-gray-600 font-light leading-relaxed"
        >
          Select the type of project, choose the features you need and get an
          instant cost estimate. Simple, transparent, fast.
        </motion.p>
        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href="#configurator"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary-800 text-white font-medium rounded-md hover:bg-primary-900 transition-colors min-w-[200px]"
          >
            Start Your Quote
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-gray-900 font-medium rounded-md hover:bg-gray-100 transition-colors min-w-[200px]"
          >
            How It Works
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
