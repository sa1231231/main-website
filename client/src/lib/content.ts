/**
 * ============================================================
 * SERVICE CALL SAVER — CONTENT FILE
 * ============================================================
 * Edit all copy, testimonials, and links here.
 * No need to touch any React components.
 *
 * TODO: Replace the demo phone number with your actual demo line.
 * TODO: Replace testimonial data with real customer quotes.
 * TODO: Replace video URL with your actual VSL link.
 *
 * UPLOADING REVIEW HEADSHOTS:
 * 1. Place headshot images in: client/public/images/reviews/
 *    (Create that folder if it doesn't exist)
 * 2. Name them descriptively, e.g., maria-rossi.jpg
 * 3. Update the `image` field below to: "/images/reviews/maria-rossi.jpg"
 * 4. Recommended size: 150x150px, square crop, JPEG or WebP
 * ============================================================
 */

export const content = {
  header: {
    logo: "Service Call Saver",
    nav: [
      { label: "How It Works", href: "how-it-works" },
      { label: "Results", href: "results" },
      { label: "Pricing & Free Trial", href: "pricing" },
    ],
    cta: "Hear Your New Receptionist Answer A Real Call",
    demoPhone: "(661) 605-2827",
  },

  hero: {
    headline: "Still stuck answering business calls nights and weekends?",
    subtitle:
      "Staff are overwhelmed. Customers hit voicemail.\nYou never really clock out.",
    description:
      "Use Service Call Saver so you can finally step away from the phone.",
    cta: "Hear Your New Receptionist Answer A Real Call",
    trialNote: "60\u2011second live demo \u2022 14\u2011day free trial \u00b7 No credit card required",
    rating: "4.7",
    ratingLabel: "Google Reviews",
    chatDemo: {
      title: "AI ANSWERING \u2014 LIVE",
      time: "9:47 PM \u00b7 After Hours",
      messages: [
        {
          sender: "customer" as const,
          text: "Hi, are you still open? I want to place a large takeout order for 12 people.",
        },
        {
          sender: "ai" as const,
          text: "Hi there! Our kitchen closed at 9, but I can help you place an order for tomorrow. What time would you like to pick up? I'll make sure everything is ready for your group.",
        },
        {
          sender: "customer" as const,
          text: "Perfect \u2014 noon tomorrow works. Can I get a menu?",
        },
        {
          sender: "ai" as const,
          text: "Absolutely! I just texted you a link to our catering menu. For 12 guests I'd recommend our family platters \u2014 great value and easy to share. Want me to pencil in noon pickup?",
        },
      ],
      bottomLine: "You wake up \u2192 $480 in new orders captured overnight",
    },
  },

  painPoints: {
    sectionLabel: "Sound Familiar?",
    headline: "Running a business\nshouldn't feel like constant firefighting",
    subtitle: "If any of this sounds like your day, Service Call Saver is for you:",
    items: [
      {
        icon: "users-x",
        title: "Burned Out Staff",
        description:
          "Your best people quit because they're juggling phones, orders, and customers at the same time. Now you need to spend money and time re-hiring and re-training. Turnover costs you thousands.",
      },
      {
        icon: "phone-missed",
        title: "Missed Calls = Lost Revenue",
        description:
          "We both know what happens when a place doesn't answer our phone call. We go on to call the next number and purchase from them instead.",
      },
      {
        icon: "alarm-clock",
        title: "Everyone is Off Except You",
        description:
          "You're still answering calls at night. Still checking voicemails on Sundays. Still \u201con\u201d when you should be off.",
      },
      {
        icon: "brain-cog",
        title: "You're Drowning in Chaos",
        description:
          "Peak hours overwhelm your team. Customers wait. Reviews suffer. Chaos compounds.",
      },
    ],
  },

  howItWorks: {
    sectionLabel: "How It Works",
    headline: "Three steps. Zero stress.",
    subtitle: "Get started in minutes, not weeks. No tech skills needed.",
    steps: [
      {
        number: "01",
        title: "Plug In",
        description:
          "Forward your missed and after\u2011hours calls to us. Takes under 5 minutes. No hardware, no apps, no IT team.",
      },
      {
        number: "02",
        title: "We Answer",
        description:
          "Your new receptionist picks up every call through an advanced voice system. It sounds and acts like a real person: takes orders, books appointments, answers questions, and can text links or info.",
      },
      {
        number: "03",
        title: "You Run The Business, Not The Phone",
        description:
          "Your team stays focused. Your customers get helped. You stop losing revenue to missed calls and finally get your weekends back.",
      },
    ],
  },

  whatWeHandle: {
    sectionLabel: "What We Handle",
    headline: "Every call. Every time.",
    items: [
      { title: "Appointments", icon: "calendar" },
      { title: "General Info", icon: "info" },
      { title: "Orders", icon: "shopping-bag" },
      { title: "Inquiries", icon: "utensils" },
      { title: "After-Hours Calls", icon: "moon" },
      { title: "FAQs & Directions", icon: "map-pin" },
    ],
  },

  featuredTestimonial: {
    sectionLabel: "Featured",
    quote:
      "We're going to be faced with different constraints like how do you fulfill $200,000 worth of paperwork a week, which is a great problem to have.",
    name: "Cole Bingham",
    role: "Wingman Insurance",
    website: "wingmanofficial.com",
    vimeoUrl: "https://vimeo.com/1167020283/344ef52587",
  },

  videoCarousel: {
    sectionLabel: "What Clients Say",
    headline: "Real results from real businesses.",
    videos: [
      {
        id: "video-kimberly",
        title: '"You Executed It Perfectly."',
        thumbnail: "",
        previewClip: "https://vimeo.com/1167140991/3c11d694cf",
        vimeoUrl: "https://vimeo.com/1167013951/45ecb41e90",
        owner: "Kimberly Lorah",
        role: "Blossom Coaching",
        website: "https://kimberlylorahcoaching.com",
      },
      {
        id: "video-jill",
        title: '"My Leads Were Dropping.  Now They\'re All in a Funnel"',
        thumbnail: "",
        previewClip: "https://vimeo.com/1167141000/52765e516a",
        vimeoUrl: "https://vimeo.com/1167126760/34da8cb75a",
        owner: "Jill Kaufman",
        role: "Divorce Network Pro",
        website: "https://divorcenetworkpro.com",
      },
      {
        id: "video-jane",
        title: '"It Saved Me a Ton of Time and a Lot of Brain Space."',
        thumbnail: "",
        previewClip: "https://vimeo.com/1167141021/c697097723",
        vimeoUrl: "https://vimeo.com/1167128055/dbe76257c7",
        owner: "Jane Garee",
        role: "Showstopping Sales",
        website: "https://www.linkedin.com/in/jane-garee-55639a9/",
      },
      {
        id: "video-jeffrey",
        title: '"Seven Steps Down to Two.  I\'m Not Missing Anything Now"',
        thumbnail: "",
        previewClip: "https://vimeo.com/1167141010/fc375eb811",
        vimeoUrl: "https://vimeo.com/1167128039/c959d2f139",
        owner: "Jeffery Melara",
        role: "Melara's Coffee",
        website: "https://melarascoffee.com",
      },
      {
        id: "video-kristen",
        title: '"It Requires Less of Me.  The Process Is Sped Up"',
        thumbnail: "",
        previewClip: "https://vimeo.com/1167141033/63df7cb425",
        vimeoUrl: "https://vimeo.com/1167014670/8f56ab351b",
        owner: "Kristen Alvarez",
        role: "Happy Paws",
        website: "https://happypawscare.com",
      },
    ],
  },

  aboutSam: {
    sectionLabel: "Designed by Sam",
    headline: "Built by a 15+ Year Engineer\nWho You Can Trust With Your Business.",
    paragraphs: [
      "Forwarding your phone line is a big deal. You're trusting someone with your money, your customers and your reputation.",
      "You only do it if you're sure someone will handle it properly.",
      "Most voice systems are slapped together, annoy callers, and fall apart the moment real customers hit them. I’ve spent over 15 years engineering critical federal cybersecurity systems where failure wasn’t an option and “good enough” meant putting people at risk.",
      "That same standard is built into the receptionist that answers your phones.",
    ],
    closingLine:
      "You shouldn't have to choose between fixing the problem and trusting the solution.",
    closingPunchline: "You can have both.",
  },

  clientReactions: {
    sectionLabel: "One Word From Each Client",
    headline: "Hear it straight from them.",
    vimeoUrl: "",
  },

  riskFree: {
    sectionLabel: "Risk-Free",
    headline: "Start small so you \nfeel confident.",
    subtitle:
      "Trying a new receptionist can feel risky. That\u2019s why we made it safe to start.",
    items: [
      {
        title: "14\u2011Day Free Trial",
        description:
          "Let it answer real calls for two weeks. If it doesn\u2019t clearly reduce missed calls and chaos, turn it off. No hassle.",
      },
      {
        title: "Start With Missed Calls Only",
        description:
          "We begin with calls you\u2019re already missing, so there\u2019s zero disruption to your staff.",
      },
      {
        title: "Turn It On / Off Anytime",
        description:
          "Simple monthly pricing. No long\u2011term contracts or hidden fees. Use it as long as it makes you money.",
      },
      {
        title: "Done\u2011For\u2011You Onboarding Included",
        description:
          "We handle setup, scripting, and testing with you on a quick call so it \u201Cjust works\u201D from day one.",
      },
    ],
  },

  calendly: {
    url: "https://cal.com/servicecallsaver/demo",
    buttonText: "Book Your Free 14-Day Receptionist Setup",
    prompt: "Prefer to skip the demo and just get it set up?",
  },

  demo: {
    sectionLabel: "Live Demo",
    headline: "Hear what your customers will\nexperience instead of voicemail.",
    subtitle:
      "Tap the button to call our demo line and talk to your new receptionist. Ask about hours, bookings, or orders and hear how it handles a real call.",
    afterReveal:
      "Tap the button to call our demo line and talk to your new receptionist. Ask about hours, bookings, or orders and hear how it handles a real call.",
    demoCallVimeoUrl: "",
  },

  footer: {
    company: "Service Call Saver",
    copyright: `\u00a9 ${new Date().getFullYear()} Service Call Saver. All rights reserved.`,
    contactEmail: "",
    tagline: "",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
};
