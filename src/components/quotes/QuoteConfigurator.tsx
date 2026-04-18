import { useState, useMemo } from 'react'
import {
  Layout, Globe, ShoppingCart, Settings, PenTool, Code,
  Check, ArrowLeft, ArrowRight, Send, Loader2,
} from 'lucide-react'
import { projectTypes, type ProjectType, type Feature } from '../../lib/quote-data'
import { Button } from './Button'
import { FadeUp } from './Motion'
import { motion, AnimatePresence, type Easing } from 'framer-motion'

const iconMap: Record<string, React.ElementType> = {
  layout: Layout,
  globe: Globe,
  'shopping-cart': ShoppingCart,
  settings: Settings,
  'pen-tool': PenTool,
  code: Code,
}

const ease: Easing = [0.22, 1, 0.36, 1] as unknown as Easing

const slideVariants = {
  enter: (direction: number) => ({ x: direction > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction > 0 ? -80 : 80, opacity: 0 }),
}

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { delay: i * 0.08, duration: 0.45, ease },
  }),
}

const featureVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: (i: number) => ({
    opacity: 1, x: 0,
    transition: { delay: i * 0.04, duration: 0.35, ease },
  }),
}

export function QuoteConfigurator() {
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [direction, setDirection] = useState(1)
  const [selectedType, setSelectedType] = useState<ProjectType | null>(null)
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', notes: '' })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const totalPrice = useMemo(() => {
    if (!selectedType) return 0
    return selectedType.basePrice +
      selectedType.features
        .filter((f) => selectedFeatures.includes(f.id))
        .reduce((sum, f) => sum + f.price, 0)
  }, [selectedType, selectedFeatures])

  const priceRange = useMemo(() => ({
    min: totalPrice,
    max: Math.round(totalPrice * 1.3),
  }), [totalPrice])

  function goToStep(newStep: 1 | 2 | 3) {
    setDirection(newStep > step ? 1 : -1)
    setStep(newStep)
  }

  function handleSelectType(type: ProjectType) {
    setSelectedType(type)
    setSelectedFeatures(type.features.filter((f) => f.included).map((f) => f.id))
    goToStep(2)
  }

  function toggleFeature(featureId: string) {
    const feature = selectedType?.features.find((f) => f.id === featureId)
    if (feature?.included) return
    setSelectedFeatures((prev) =>
      prev.includes(featureId) ? prev.filter((id) => id !== featureId) : [...prev, featureId]
    )
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!selectedType) return
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const res = await fetch('/api/send-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          projectType: selectedType.name,
          includedFeatures: selectedType.features.filter((f) => f.included).map((f) => f.name),
          extraFeatures: selectedType.features
            .filter((f) => selectedFeatures.includes(f.id) && !f.included)
            .map((f) => ({ name: f.name, price: f.price })),
          priceMin: priceRange.min,
          priceMax: priceRange.max,
        }),
      })
      if (!res.ok) throw new Error()
      setSubmitted(true)
    } catch {
      setSubmitError('An error occurred while sending. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClass = 'w-full border border-gray-200 bg-white px-3.5 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-primary-800 focus:outline-none focus:ring-1 focus:ring-primary-800'

  return (
    <section id="configurator" className="scroll-mt-20 px-6 py-24 bg-gray-50">
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900">
              Build Your <span className="font-medium text-primary-800">Quote</span>
            </h2>
          </div>
        </FadeUp>

        {/* Progress steps */}
        <FadeUp delay={0.1}>
          <div className="mx-auto mb-12 max-w-md">
            <div className="flex items-center justify-between">
              {([1, 2, 3] as const).map((s) => (
                <div key={s} className="flex items-center gap-2">
                  <motion.div
                    animate={{ scale: step === s ? 1.1 : 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium transition-colors duration-300 ${step >= s ? 'bg-primary-800 text-white' : 'bg-gray-100 text-gray-500'}`}
                  >
                    {step > s ? (
                      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 400, damping: 15 }}>
                        <Check className="h-4 w-4" />
                      </motion.div>
                    ) : s}
                  </motion.div>
                  <span className={`hidden text-sm font-medium sm:block ${step >= s ? 'text-gray-900' : 'text-gray-400'}`}>
                    {s === 1 ? 'Type' : s === 2 ? 'Features' : 'Summary'}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-3 flex gap-1">
              {([1, 2, 3] as const).map((s) => (
                <div key={s} className={`h-1 flex-1 rounded-full transition-colors duration-300 ${step >= s ? 'bg-primary-800' : 'bg-gray-200'}`} />
              ))}
            </div>
          </div>
        </FadeUp>

        <AnimatePresence mode="wait" custom={direction}>
          {/* Step 1: Select Type */}
          {step === 1 && (
            <motion.div
              key="step1"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease }}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {projectTypes.map((type, i) => {
                const Icon = iconMap[type.icon] || Code
                return (
                  <motion.button
                    key={type.id}
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleSelectType(type)}
                    className={`group flex flex-col items-start bg-white p-6 text-left border transition-all duration-300 hover:shadow-md ${selectedType?.id === type.id ? 'border-primary-800 ring-1 ring-primary-800' : 'border-gray-100 hover:border-primary-500'}`}
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 text-gray-500 transition-colors duration-300 group-hover:bg-primary-800 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mb-1 text-lg font-normal text-gray-900">{type.name}</h3>
                    <p className="mb-4 text-sm font-light leading-relaxed text-gray-600">{type.description}</p>
                    <p className="mt-auto text-sm text-gray-500 font-light">
                      Starting from{' '}
                      <span className="text-lg font-medium text-gray-900">{type.basePrice}&euro;</span>
                    </p>
                  </motion.button>
                )
              })}
            </motion.div>
          )}

          {/* Step 2: Select Features */}
          {step === 2 && selectedType && (
            <motion.div
              key="step2"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease }}
              className="grid gap-8 lg:grid-cols-3"
            >
              <div className="lg:col-span-2">
                <div className="mb-6 flex items-center gap-3">
                  <Button variant="ghost" size="sm" onClick={() => goToStep(1)} className="gap-1">
                    <ArrowLeft className="h-4 w-4" /> Back
                  </Button>
                  <h3 className="text-xl font-normal text-gray-900">{selectedType.name}</h3>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {selectedType.features.map((feature: Feature, i: number) => {
                    const isSelected = selectedFeatures.includes(feature.id)
                    const isIncluded = feature.included
                    return (
                      <motion.button
                        key={feature.id}
                        custom={i}
                        variants={featureVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => toggleFeature(feature.id)}
                        disabled={isIncluded}
                        className={`flex flex-col border p-4 text-left transition-all duration-200 ${isIncluded ? 'border-primary-800/30 bg-primary-800/5' : isSelected ? 'border-primary-800 bg-primary-800/5 shadow-sm' : 'border-gray-100 bg-white hover:border-primary-500 hover:shadow-sm'}`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex-1">
                            <p className="font-normal text-gray-900">{feature.name}</p>
                            <p className="mt-0.5 text-xs font-light leading-relaxed text-gray-500">{feature.description}</p>
                          </div>
                          <div className="flex-shrink-0">
                            {isIncluded ? (
                              <span className="inline-flex items-center rounded-full bg-primary-100 px-2 py-0.5 text-xs font-medium text-primary-800">
                                Included
                              </span>
                            ) : (
                              <span className="text-sm font-medium text-gray-900">+{feature.price}&euro;</span>
                            )}
                          </div>
                        </div>
                        {!isIncluded && (
                          <div className="mt-3 flex items-center gap-2">
                            <div className={`flex h-4 w-4 items-center justify-center rounded border transition-colors duration-200 ${isSelected ? 'border-primary-800 bg-primary-800 text-white' : 'border-gray-400 bg-transparent'}`}>
                              <AnimatePresence>
                                {isSelected && (
                                  <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    exit={{ scale: 0 }}
                                    transition={{ type: 'spring', stiffness: 500, damping: 20 }}
                                  >
                                    <Check className="h-3 w-3" />
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                            <span className="text-xs text-gray-500">{isSelected ? 'Selected' : 'Click to add'}</span>
                          </div>
                        )}
                      </motion.button>
                    )
                  })}
                </div>
              </div>

              {/* Sidebar summary */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5, ease }}
                  className="sticky top-24 bg-white border border-gray-100 p-6"
                >
                  <h4 className="mb-4 text-lg font-normal text-gray-900">Summary</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500 font-light">Base ({selectedType.name})</span>
                      <span className="font-medium text-gray-900">{selectedType.basePrice}&euro;</span>
                    </div>
                    <AnimatePresence>
                      {selectedType.features
                        .filter((f) => selectedFeatures.includes(f.id) && !f.included)
                        .map((f) => (
                          <motion.div
                            key={f.id}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25, ease: 'easeOut' }}
                            className="flex justify-between overflow-hidden"
                          >
                            <span className="text-gray-500 font-light">{f.name}</span>
                            <span className="font-medium text-gray-900">+{f.price}&euro;</span>
                          </motion.div>
                        ))}
                    </AnimatePresence>
                  </div>
                  <div className="my-4 border-t border-gray-100" />
                  <div className="flex items-end justify-between">
                    <span className="text-sm font-light text-gray-500">Estimated Total</span>
                    <div className="text-right">
                      <motion.p
                        key={priceRange.min}
                        initial={{ scale: 1.08, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        className="text-2xl font-medium text-gray-900"
                      >
                        {priceRange.min}&ndash;{priceRange.max}&euro;
                      </motion.p>
                      <p className="text-xs text-gray-400 font-light">VAT excluded</p>
                    </div>
                  </div>
                  <Button onClick={() => goToStep(3)} size="lg" className="mt-6 w-full gap-2">
                    Proceed <ArrowRight className="h-4 w-4" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* Step 3: Summary + Contact */}
          {step === 3 && selectedType && !submitted && (
            <motion.div
              key="step3"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease }}
              className="grid gap-8 lg:grid-cols-2"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="bg-white border border-gray-100 p-6"
              >
                <div className="mb-4">
                  <Button variant="ghost" size="sm" onClick={() => goToStep(2)} className="gap-1">
                    <ArrowLeft className="h-4 w-4" /> Back
                  </Button>
                </div>
                <h4 className="mb-6 text-lg font-normal text-gray-900">Quote Summary</h4>
                <div className="mb-4 bg-gray-50 p-4">
                  <p className="text-sm text-gray-500 font-light">Project Type</p>
                  <p className="text-lg font-medium text-gray-900">{selectedType.name}</p>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="mb-2 font-medium text-gray-900">Included features:</p>
                  {selectedType.features.filter((f) => f.included).map((f) => (
                    <div key={f.id} className="flex items-center gap-2 text-gray-600 font-light">
                      <Check className="h-3.5 w-3.5 text-primary-600 flex-shrink-0" />
                      {f.name}
                    </div>
                  ))}
                  {selectedType.features.filter((f) => selectedFeatures.includes(f.id) && !f.included).length > 0 && (
                    <>
                      <p className="mb-2 mt-4 font-medium text-gray-900">Extra features:</p>
                      {selectedType.features
                        .filter((f) => selectedFeatures.includes(f.id) && !f.included)
                        .map((f) => (
                          <div key={f.id} className="flex items-center justify-between text-gray-600 font-light">
                            <div className="flex items-center gap-2">
                              <Check className="h-3.5 w-3.5 text-primary-600 flex-shrink-0" />
                              {f.name}
                            </div>
                            <span className="font-medium text-gray-900">+{f.price}&euro;</span>
                          </div>
                        ))}
                    </>
                  )}
                </div>
                <div className="my-4 border-t border-gray-100" />
                <div className="flex items-end justify-between">
                  <span className="text-sm font-light text-gray-500">Estimated Total</span>
                  <div className="text-right">
                    <p className="text-3xl font-medium text-gray-900">
                      {priceRange.min}&ndash;{priceRange.max}&euro;
                    </p>
                    <p className="text-xs text-gray-400 font-light">VAT excluded</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="bg-white border border-gray-100 p-6"
              >
                <h4 className="mb-6 text-lg font-normal text-gray-900">Your Details</h4>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700">Full Name *</label>
                    <input id="name" type="text" required value={formData.name}
                      onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                      className={inputClass} placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">Email *</label>
                    <input id="email" type="email" required value={formData.email}
                      onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                      className={inputClass} placeholder="john@email.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-gray-700">Phone</label>
                    <input id="phone" type="tel" value={formData.phone}
                      onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
                      className={inputClass} placeholder="+1 555 123 4567" />
                  </div>
                  <div>
                    <label htmlFor="notes" className="mb-1.5 block text-sm font-medium text-gray-700">Additional Notes</label>
                    <textarea id="notes" rows={4} value={formData.notes}
                      onChange={(e) => setFormData((p) => ({ ...p, notes: e.target.value }))}
                      className={inputClass} placeholder="Briefly describe your project or specific requirements..." />
                  </div>
                  {submitError && (
                    <p className="bg-red-50 px-3 py-2 text-center text-sm text-red-600">{submitError}</p>
                  )}
                  <Button type="submit" size="lg" className="mt-2 w-full gap-2" disabled={isSubmitting}>
                    {isSubmitting ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</> : <><Send className="h-4 w-4" /> Send Quote Request</>}
                  </Button>
                  <p className="text-center text-xs text-gray-400 font-light">You will be contacted within 24 business hours</p>
                </form>
              </motion.div>
            </motion.div>
          )}

          {/* Success */}
          {submitted && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease }}
              className="mx-auto max-w-lg bg-white border border-gray-100 p-10 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 300, damping: 15 }}
                className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-800 text-white"
              >
                <Check className="h-8 w-8" />
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.4 }}
                className="mb-3 text-2xl font-light text-gray-900"
              >
                Request Sent!
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ delay: 0.45, duration: 0.4 }}
                className="mb-2 text-gray-600 font-light"
              >
                Thank you <strong className="font-medium text-gray-900">{formData.name}</strong>, we have received your quote request.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                transition={{ delay: 0.55, duration: 0.4 }}
                className="mb-6 text-gray-600 font-light"
              >
                We will contact you at <strong className="font-medium text-gray-900">{formData.email}</strong> within 24 business hours.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="bg-gray-50 p-4"
              >
                <p className="text-sm text-gray-700">
                  <strong className="font-medium">{selectedType?.name}</strong> &mdash; Estimate:{' '}
                  <span className="font-medium">{priceRange.min}&ndash;{priceRange.max}&euro;</span>
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.4 }}>
                <Button
                  onClick={() => { goToStep(1); setSelectedType(null); setSelectedFeatures([]); setFormData({ name: '', email: '', phone: '', notes: '' }); setSubmitted(false) }}
                  variant="outline"
                  className="mt-6"
                >
                  New Quote
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
