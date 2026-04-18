export type ProjectType = {
  id: string
  name: string
  description: string
  basePrice: number
  icon: string
  features: Feature[]
}

export type Feature = {
  id: string
  name: string
  description: string
  price: number
  included?: boolean
}

export const projectTypes: ProjectType[] = [
  {
    id: 'landing',
    name: 'Landing Page',
    description: 'Single page to promote a product, service or event. Ideal for marketing campaigns.',
    basePrice: 240,
    icon: 'layout',
    features: [
      { id: 'landing-responsive', name: 'Responsive Design', description: 'Optimized for all devices', price: 0, included: true },
      { id: 'landing-seo', name: 'Basic SEO', description: 'Search engine optimization', price: 0, included: true },
      { id: 'landing-form', name: 'Contact Form', description: 'Form to collect inquiries', price: 60 },
      { id: 'landing-animations', name: 'Advanced Animations', description: 'Transitions and micro-interactions', price: 100 },
      { id: 'landing-analytics', name: 'Analytics Integration', description: 'Google Analytics and conversion tracking', price: 50 },
      { id: 'landing-multilang', name: 'Multilingual', description: 'Support for multiple languages', price: 120 },
    ],
  },
  {
    id: 'showcase',
    name: 'Showcase Website',
    description: 'Multi-page site to present your company, services and portfolio. Perfect for SMBs.',
    basePrice: 400,
    icon: 'globe',
    features: [
      { id: 'showcase-responsive', name: 'Responsive Design', description: 'Optimized for all devices', price: 0, included: true },
      { id: 'showcase-seo', name: 'Basic SEO', description: 'Search engine optimization', price: 0, included: true },
      { id: 'showcase-pages', name: 'Up to 5 Pages', description: 'Home, About, Services, Portfolio, Contact', price: 0, included: true },
      { id: 'showcase-extra-pages', name: 'Extra Pages (+5)', description: 'Block of 5 additional pages', price: 160 },
      { id: 'showcase-blog', name: 'Blog Section', description: 'News and articles area', price: 140 },
      { id: 'showcase-gallery', name: 'Photo Gallery', description: 'Portfolio with lightbox and filters', price: 100 },
      { id: 'showcase-maps', name: 'Interactive Map', description: 'Integrated Google Maps with locations', price: 50 },
      { id: 'showcase-multilang', name: 'Multilingual', description: 'Support for multiple languages', price: 160 },
    ],
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce',
    description: 'Complete online store with product catalog, shopping cart and secure payments.',
    basePrice: 900,
    icon: 'shopping-cart',
    features: [
      { id: 'ecommerce-responsive', name: 'Responsive Design', description: 'Optimized for all devices', price: 0, included: true },
      { id: 'ecommerce-catalog', name: 'Product Catalog', description: 'Product management with categories and filters', price: 0, included: true },
      { id: 'ecommerce-cart', name: 'Cart & Checkout', description: 'Complete purchase process', price: 0, included: true },
      { id: 'ecommerce-payments', name: 'Online Payments', description: 'Stripe, PayPal and other gateways', price: 0, included: true },
      { id: 'ecommerce-inventory', name: 'Inventory Management', description: 'Stock tracking and notifications', price: 160 },
      { id: 'ecommerce-coupons', name: 'Coupons & Discounts', description: 'Discount codes and promotions system', price: 100 },
      { id: 'ecommerce-reviews', name: 'Product Reviews', description: 'Rating and review system', price: 80 },
      { id: 'ecommerce-shipping', name: 'Shipping Calculator', description: 'Carrier integration and tracking', price: 120 },
      { id: 'ecommerce-multilang', name: 'Multilingual & Multi-currency', description: 'International support', price: 240 },
    ],
  },
  {
    id: 'management',
    name: 'Management / Web App',
    description: 'Custom web application to manage business processes, staff and data.',
    basePrice: 400,
    icon: 'settings',
    features: [
      { id: 'management-auth', name: 'User Authentication', description: 'Login, roles and permissions', price: 0, included: true },
      { id: 'management-dashboard', name: 'Dashboard', description: 'Control panel with statistics', price: 0, included: true },
      { id: 'management-crud', name: 'Basic Data Management', description: 'Create, edit, delete records', price: 0, included: true },
      { id: 'management-staff', name: 'Staff Management', description: 'Employee list with contract information', price: 80 },
      { id: 'management-attendance', name: 'Attendance & Hours', description: 'Clock-in, clock-out, breaks and absences tracking', price: 100 },
      { id: 'management-reports', name: 'Reports & Export', description: 'PDF/Excel report generation', price: 90 },
      { id: 'management-notifications', name: 'Notifications', description: 'Email and in-app alerts', price: 70 },
      { id: 'management-calendar', name: 'Calendar', description: 'Shift scheduling and appointments', price: 80 },
      { id: 'management-api', name: 'External APIs', description: 'Third-party service integration', price: 120 },
    ],
  },
  {
    id: 'portfolio',
    name: 'Portfolio / Blog',
    description: 'Personal site to showcase your work, write articles and build your brand.',
    basePrice: 300,
    icon: 'pen-tool',
    features: [
      { id: 'portfolio-responsive', name: 'Responsive Design', description: 'Optimized for all devices', price: 0, included: true },
      { id: 'portfolio-projects', name: 'Projects Section', description: 'Portfolio with details and images', price: 0, included: true },
      { id: 'portfolio-blog', name: 'Integrated Blog', description: 'Article system with categories', price: 100 },
      { id: 'portfolio-cms', name: 'Headless CMS', description: 'No-code content management', price: 140 },
      { id: 'portfolio-contact', name: 'Contact Form', description: 'Form for inquiries and collaborations', price: 50 },
      { id: 'portfolio-social', name: 'Social Integration', description: 'Social feed and sharing', price: 60 },
    ],
  },
  {
    id: 'custom',
    name: 'Custom Project',
    description: 'Tailored solution for specific needs. Contact us for a detailed quote.',
    basePrice: 600,
    icon: 'code',
    features: [
      { id: 'custom-consulting', name: 'Initial Consulting', description: 'Requirements analysis and planning', price: 0, included: true },
      { id: 'custom-design', name: 'UI/UX Design', description: 'Custom interface design', price: 160 },
      { id: 'custom-backend', name: 'Dedicated Backend', description: 'Custom server and database', price: 240 },
      { id: 'custom-mobile', name: 'Mobile Version', description: 'Responsive app or PWA', price: 200 },
      { id: 'custom-hosting', name: 'Hosting Setup', description: 'Server and domain configuration', price: 80 },
      { id: 'custom-maintenance', name: 'Annual Maintenance', description: 'Ongoing updates and support', price: 300 },
    ],
  },
]
