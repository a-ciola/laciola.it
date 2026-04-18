import { QuoteHero } from './quotes/QuoteHero'
import { HowItWorks } from './quotes/HowItWorks'
import { QuoteConfigurator } from './quotes/QuoteConfigurator'

const Quote: React.FC = () => {
  return (
    <>
      <QuoteHero />
      <HowItWorks />
      <QuoteConfigurator />
    </>
  )
}

export default Quote
