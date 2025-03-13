export const HOW_INFU_WORKS = {
    investors: [
      {
        step: 1,
        title: "Register and Choose Your Role",
        description:
          "Sign up easily using your email. Select the role of an Investor during registration. Complete your KYC to start investing.",
      },
      {
        step: 2,
        title: "Browse Investment Pools",
        description:
          "Explore curated investment pools based on your budget (starting from ₹1) and interests, including stocks, real estate, crowdfunding projects, or small businesses.",
      },
      {
        step: 3,
        title: "Analyze and Invest",
        description:
          "View detailed risk and return metrics for each opportunity. Make an informed investment decision.",
      },
      {
        step: 4,
        title: "Track and Earn",
        description:
          "Monitor your investments in real-time. Receive profit shares directly in your Infu wallet or bank account based on the agreed timeline.",
      },
      {
        step: 5,
        title: "Instant Withdrawals",
        description:
          "Withdraw your profits or entire investment with just a click, subject to lock-in periods.",
      },
    ],
    businesses: [
      {
        step: 1,
        title: "Register and Pitch Your Idea",
        description:
          "Choose the Profit Creator role. Share your business idea, funding requirements, and expected ROI. Complete basic compliance (e.g., PAN/KYC).",
      },
      {
        step: 2,
        title: "AI Evaluation and Listing",
        description:
          "Infu’s AI evaluates your proposal for feasibility and profitability. If approved, your project is listed on our platform.",
      },
      {
        step: 3,
        title: "Receive Funding",
        description:
          "Start receiving investments from our pool of verified investors. Funds are disbursed securely through our escrow mechanism upon meeting predefined conditions.",
      },
      {
        step: 4,
        title: "Profit Sharing",
        description:
          "Share profits with investors based on the agreed terms. Transparency and trust are at the core of Infu’s process.",
      },
    ],
  };
  
  export const TERMS_AND_CONDITIONS = {
    general: [
      "By registering on Infu, you agree to comply with all applicable laws, rules, and regulations.",
      "Infu acts as a facilitator, connecting investors and businesses. It does not guarantee returns or assume liability for any investment losses.",
    ],
    investor: [
      "Investors must complete KYC and comply with Anti-Money Laundering (AML) requirements.",
      "Investments are subject to lock-in periods, which vary based on the project.",
      "Returns on investments depend on business performance and market conditions.",
    ],
    business: [
      "Businesses must provide accurate and complete information about their operations, funding needs, and projected returns.",
      "Misrepresentation of data or fraudulent activities will result in immediate termination and legal action.",
      "Businesses are required to deposit agreed profits and repayments before the lock-in period ends.",
    ],
    platform: [
      "Infu reserves the right to modify its features, services, and policies at any time.",
      "Users must not engage in illegal activities or misuse the platform for unauthorized transactions.",
      "Disputes will be resolved through arbitration as per Indian law.",
    ],
  };
  
  export const FAQS = {
    investors: [
      {
        question: "What is the minimum investment amount?",
        answer: "You can start investing with as little as ₹1.",
      },
      {
        question: "Is my investment guaranteed?",
        answer:
          "Infu does not guarantee returns. However, we ensure transparency, and businesses must meet predefined conditions before receiving funds.",
      },
      {
        question: "How are profits distributed?",
        answer:
          "Profits are shared based on the agreed terms and credited to your Infu wallet or bank account.",
      },
      {
        question: "Can I withdraw my funds anytime?",
        answer:
          "You can withdraw your funds after the lock-in period ends, depending on the project.",
      },
      {
        question: "Are there any fees for investors?",
        answer:
          "Infu charges a small platform fee for managing and facilitating transactions.",
      },
    ],
    businesses: [
      {
        question: "What documents are required to register my business?",
        answer:
          "You need a valid PAN, basic KYC, and other minimal compliance documents based on your business type.",
      },
      {
        question: "How does the funding process work?",
        answer:
          "After your project is listed, investors can fund it. The money is disbursed from the escrow account once you meet the specified conditions.",
      },
      {
        question: "What if I cannot deliver the promised returns?",
        answer:
          "Infu ensures transparency and accountability. In case of unforeseen circumstances, we mediate to resolve the issue with investors.",
      },
      {
        question: "Can I list multiple projects?",
        answer: "Yes, as long as you meet the criteria for each project.",
      },
      {
        question: "Are there any fees for businesses?",
        answer:
          "Infu charges a nominal fee for listing and successfully raising funds.",
      },
    ],
    general: [
      {
        question: "Is Infu regulated by SEBI or RBI?",
        answer:
          "Infu acts as a facilitator, not a fund manager. It complies with all regulations and uses licensed NBFCs or banks for escrow transactions.",
      },
      {
        question: "How is my data secured?",
        answer:
          "Infu uses encryption and advanced security measures to protect your personal and financial data.",
      },
      {
        question: "Can international users access Infu?",
        answer:
          "Yes, Infu is designed to be globally accessible, allowing users from different countries to invest or list projects.",
      },
    ],
  };

  export  const features = [
    {
      title: "Democratized Investment Access",
      description: "Start investing with as little as ₹1 or $1, enabling financial inclusion for all.",
    },
    {
      title: "Diverse Investment Options",
      description: "Explore opportunities across creative indian sme and msme, real estate, and crowdfunding projects.",
    },
    {
      title: "Fractional Ownership",
      description: "Invest fractionally in large projects like real estate or businesses.",
    },
    {
      title: "Escrow Mechanism for Security",
      description: "Securely handle funds via licensed NBFCs or banks.",
    },
    {
      title: "AI-Driven Insights",
      description: "Real-time analytics for risk-return analysis and investor decision-making.",
    },
    {
      title: "Transparent Profit Sharing",
      description: "Regular updates and proportional profit sharing for investors.",
    },
  ];


  export const categories = [
    {
      name: "Beginner’s Guide",
      subcategories: [
        { name: "Step 1: Register on Infu", route: "/beginners-guide/register-on-infu" },
        { name: "Step 2: Add Funds to Your Infu Wallet", route: "/beginners-guide/add-funds-to-wallet" },
        { name: "Step 3: Explore Investment Opportunities", route: "/beginners-guide/explore-investment-opportunities" },
        { name: "Step 4: Make Your First Investment", route: "/beginners-guide/make-first-investment" },
        { name: "Step 5: Track Your Investment", route: "/beginners-guide/track-your-investment" },
      ],
    },
    {
      name: "Infu Pools",
      subcategories: [
        { name: "What Are Infu Pools?", route: "/infu-pools/what-are-infu-pools" },
        { name: "Types of Infu Pools", route: "/infu-pools/types-of-pools" },
        { name: "How Infu Pools Work", route: "/infu-pools/how-pools-work" },
        { name: "Benefits of Investing in Infu Pools", route: "/infu-pools/benefits-of-investing" },
        { name: "How to Choose the Right Pool", route: "/infu-pools/choose-the-right-pool" },
        { name: "Success Stories", route: "/infu-pools/success-stories" },
      ],
    },
    {
      name: "Power of Compounding",
      subcategories: [
        { name: "What Is Compounding?", route: "/power-of-compounding/what-is-compounding" },
        { name: "How Infu Helps You Leverage Compounding", route: "/power-of-compounding/leverage-compounding" },
        { name: "The Math Behind Small Investments", route: "/power-of-compounding/math-behind-small-investments" },
        { name: "Steps to Build Wealth with Small Investments", route: "/power-of-compounding/build-wealth" },
        { name: "Case Study: Turning ₹1 Daily into ₹1 Lakh", route: "/power-of-compounding/case-study-daily-to-lakh" },
        { name: "Why Small Investments Are Powerful", route: "/power-of-compounding/why-small-investments" },
      ],
    },
    {
      name: "Risk Management",
      subcategories: [
        { name: "What is Diversification?", route: "/risk-management/what-is-diversification" },
        { name: "How Infu Enables Diversification", route: "/risk-management/enables-diversification" },
        { name: "Steps to Diversify Your Portfolio on Infu", route: "/risk-management/steps-to-diversify" },
        { name: "Diversification in Action: Sample Portfolio", route: "/risk-management/sample-portfolio" },
        { name: "Mistakes to Avoid When Diversifying", route: "/risk-management/mistakes-to-avoid" },
        { name: "Benefits of Diversification on Infu", route: "/risk-management/benefits-of-diversification" },
      ],
    },
    {
      name: "Profits and Withdraw",
      subcategories: [
        { name: "Introduction to Infu's Dashboard", route: "/profits-and-withdraw/dashboard-introduction" },
        { name: "Step 1: Access the Infu Dashboard", route: "/profits-and-withdraw/access-dashboard" },
        { name: "Step 2: Analyze Investment Performance", route: "/profits-and-withdraw/analyze-performance" },
        { name: "Step 3: Withdrawing Profits", route: "/profits-and-withdraw/withdrawing-profits" },
        { name: "Step 4: Reinvesting Profits", route: "/profits-and-withdraw/reinvesting-profits" },
        { name: "Tips for Effective Fund Management", route: "/profits-and-withdraw/effective-fund-management" },
        { name: "Common Questions About Withdrawals", route: "/profits-and-withdraw/withdrawal-questions" },
      ],
    },
    {
      name: "High-Potential Businesses",
      subcategories: [
        { name: "Introduction to Identifying High-Potential Businesses", route: "/high-potential-businesses/introduction" },
        { name: "Step 1: Understand What Makes a Business High-Potential", route: "/high-potential-businesses/understanding-high-potential" },
        { name: "Step 2: Use Infu’s Tools to Identify Opportunities", route: "/high-potential-businesses/tools-to-identify" },
        { name: "Step 3: Analyze Business Metrics", route: "/high-potential-businesses/analyze-metrics" },
        { name: "Step 4: Evaluate Risk Levels", route: "/high-potential-businesses/evaluate-risks" },
        { name: "Step 5: Stay Updated on Market Trends", route: "/high-potential-businesses/market-trends" },
        { name: "Step 6: Diversify Your Investments", route: "/high-potential-businesses/diversify-investments" },
        { name: "Case Studies: Success Stories on Infu", route: "/high-potential-businesses/success-stories" },
        { name: "Tips for Spotting High-Potential Businesses", route: "/high-potential-businesses/tips-for-spotting" },
        { name: "Conclusion: Start Exploring Opportunities on Infu", route: "/high-potential-businesses/start-exploring" },
      ],
    },
    {
      name: "Fractional Real Estate",
      subcategories: [
        { name: "Introduction to Fractional Real Estate Investment", route: "/fractional-real-estate/introduction" },
        { name: "What is Fractional Real Estate Investment?", route: "/fractional-real-estate/what-is-investment" },
        { name: "Benefits of Infu’s Fractional Real Estate", route: "/fractional-real-estate/benefits" },
        { name: "How to Invest in Real Estate on Infu", route: "/fractional-real-estate/how-to-invest" },
        { name: "How You Earn Passive Income", route: "/fractional-real-estate/passive-income" },
        { name: "Real Estate Investment Strategies on Infu", route: "/fractional-real-estate/strategies" },
        { name: "Case Study: Fractional Ownership Success", route: "/fractional-real-estate/success-case-study" },
        { name: "Frequently Asked Questions", route: "/fractional-real-estate/faqs" },
        { name: "Conclusion: Build Your Passive Income Portfolio with Infu", route: "/fractional-real-estate/build-portfolio" },
      ],
    },
    {
      name: "Tools to Make Smart Investment Decisions",
      subcategories: [
        { name: "Introduction to Risk-Return Visual Tools", route: "/investment-tools/introduction" },
        { name: "What Are Risk-Return Visual Tools?", route: "/investment-tools/what-are-tools" },
        { name: "Key Features of Infu’s Visualization Tools", route: "/investment-tools/key-features" },
        { name: "How to Use Risk-Return Tools Effectively", route: "/investment-tools/use-tools" },
        { name: "Example: Analyzing a High-Potential Pool", route: "/investment-tools/analyzing-pool" },
        { name: "Benefits of Using Visual Tools", route: "/investment-tools/benefits" },
        { name: "Tips for Maximizing Returns with Infu’s Tools", route: "/investment-tools/maximizing-returns" },
        { name: "Conclusion: Smarter Investment Decisions with Infu’s Visual Tools", route: "/investment-tools/smarter-decisions" },
      ],
    },
    {
      name: "AI Tools for Smarter Investments",
     
      subcategories: [
        { name: "Introduction to Infu’s AI Tools", route: "/ai-tools/introduction" },
        { name: "How Infu’s AI Tools Work", route: "/ai-tools/how-tools-work" },
        { name: "Key Features of Infu’s AI Tools", route: "/ai-tools/key-features" },
        { name: "Steps to Use Infu’s AI Tools Effectively", route: "/ai-tools/use-tools-effectively" },
        { name: "Case Study: How AI Transforms Investing", route: "/ai-tools/ai-case-study" },
        { name: "Tips for Maximizing AI Tools", route: "/ai-tools/tips-maximizing" },
        { name: "Benefits of Using Infu’s AI Tools", route: "/ai-tools/benefits" },
        { name: "Conclusion: Transform Your Investment Journey with Infu’s AI", route: "/ai-tools/transform-journey" },
      ],
    },
  ];
  