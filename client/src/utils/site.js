export const siteConfig = {
    name: 'Revuze',
    description: 'A Comprehensive Feedback Management Platform',
    company: {
      email: 'mdashsharm95@gmail.com',
      logo: 'MessageSquare',
    },
    features: [
      {
        title: 'Customizable Feedback Widget',
        description: 'Generate and customize feedback widgets that align with your brand identity.',
        icon: 'Sliders'
      },
      {
        title: 'Real-Time Reporting',
        description: 'Analyze feedback instantly with interactive dashboards and visual reports.',
        icon: 'LineChart'
      },
      {
        title: 'Data Ownership',
        description: 'Host Revuze on your infrastructure using Docker for full data control.',
        icon: 'Shield'
      },
      {
        title: 'Cross-Platform Integration',
        description: 'Deploy feedback forms across websites, emails, and WordPress.',
        icon: 'Share2'
      }
    ],
    pricing: {
      currency: 'Rs',
      plans: [
        {
          name: 'Starter',
          price: 149,
          billing: 'monthly',
          features: [
            'Up to 1,000 responses/month',
            'Basic widget customization',
            'Email support',
            'Basic analytics',
            'Data export (CSV)'
          ],
          cta: 'Start Free Trial',
          popular: false
        },
        {
          name: 'Professional',
          price: 249,
          billing: 'monthly',
          features: [
            'Up to 10,000 responses/month',
            'Advanced widget customization',
            'Priority support',
            'Advanced analytics',
            'Data export (CSV, PDF)',
            'Multiple team members',
            'API access'
          ],
          cta: 'Get Started',
          popular: true
        },
        {
          name: 'Enterprise',
          price: 499,
          billing: 'monthly',
          features: [
            'Unlimited responses',
            'White-label solution',
            'Dedicated support',
            'Custom integrations',
            'Advanced security features',
            'SLA guarantee',
            'Custom analytics'
          ],
          cta: 'Contact Sales',
          popular: false
        }
      ]
    },
    testimonials: [
      {
        name: 'Sarah Johnson',
        role: 'Product Manager at TechCorp',
        content: 'Revuze has transformed how we collect and analyze customer feedback. The real-time insights have been invaluable for our product development.',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
      },
      {
        name: 'Michael Chen',
        role: 'CTO at StartupX',
        content: 'The self-hosted solution gives us complete control over our data while providing enterprise-grade features. Exactly what we needed.',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop'
      },
      {
        name: 'Emily Rodriguez',
        role: 'Customer Success Lead at GrowthCo',
        content: 'Outstanding customization options and the WordPress integration made implementation a breeze. Our customers love the feedback widget.',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop'
      }
    ],
    stats: {
      uptime: {
        api: 99.99,
        dashboard: 99.98,
        widget: 99.99
      },
      metrics: [
        {
          label: 'Active Users',
          value: '10,000+'
        },
        {
          label: 'Feedback Collected',
          value: '1M+'
        },
        {
          label: 'Data Centers',
          value: '5'
        }
      ]
    },
    ratingData : [
      { month: 'Jan', rating: 4.5, responses: 120 },
      { month: 'Feb', rating: 4.6, responses: 145 },
      { month: 'Mar', rating: 4.7, responses: 165 },
      { month: 'Apr', rating: 4.8, responses: 180 },
      { month: 'May', rating: 4.7, responses: 220 },
      { month: 'Jun', rating: 4.9, responses: 250 }
  ]
  };