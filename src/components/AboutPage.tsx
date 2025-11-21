import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

interface AboutPageProps {
  section?: string
}

const AboutPage = ({ section = 'aboutUs' }: AboutPageProps) => {
  const { t } = useLanguage()
  const [showCEOLetter, setShowCEOLetter] = useState(false)

  const content: Record<string, { title: string; description: string; details: Array<{ title: string; description: string }> }> = {
    aboutUs: {
      title: t('aboutUs'),
      description: '',
      details: [],
    },
    ourOfferings: {
      title: t('ourOfferings'),
      description: 'Uber offers a comprehensive suite of services designed to meet diverse transportation and delivery needs, from everyday rides to corporate solutions.',
      details: [
        {
          title: 'UberX - Affordable Everyday Rides',
          description: 'UberX is our most popular and affordable ride option. Perfect for everyday travel, it connects you with professional drivers in comfortable, well-maintained vehicles. Whether you\'re commuting to work, heading to the airport, or exploring a new city, UberX provides reliable transportation at an accessible price point. All drivers are background-checked and vehicles must meet our quality standards.'
        },
        {
          title: 'Uber Comfort - Extra Space and Comfort',
          description: 'Uber Comfort offers newer vehicles with extra legroom and top-rated drivers. This option is ideal for longer trips or when you want a more spacious ride. Drivers must maintain a high rating and vehicles must be newer models with additional comfort features. Perfect for business travelers or anyone who values extra space and comfort during their journey.'
        },
        {
          title: 'Uber Black - Premium Luxury Experience',
          description: 'Uber Black provides premium rides in high-end luxury vehicles with professional, commercially licensed drivers. This service offers the highest level of comfort and style, making it perfect for special occasions, business meetings, or when you want to travel in luxury. Vehicles are typically black sedans or SUVs from premium brands, and drivers are dressed professionally.'
        },
        {
          title: 'Uber Eats - Food Delivery at Your Doorstep',
          description: 'Uber Eats brings your favorite meals from local restaurants directly to your door. With thousands of restaurant partners, you can order from fast food chains, fine dining establishments, or local favorites. Track your order in real-time, customize your meals, and enjoy contactless delivery options. Available in hundreds of cities worldwide, Uber Eats makes dining at home convenient and delicious.'
        },
        {
          title: 'Uber Freight - Shipping and Logistics Solutions',
          description: 'Uber Freight connects shippers with carriers to move freight efficiently. This B2B platform helps businesses of all sizes find reliable trucking capacity, manage shipments, and track deliveries in real-time. Using technology similar to our ride-hailing platform, Uber Freight optimizes routes, reduces empty miles, and provides transparent pricing. Ideal for manufacturers, retailers, and logistics companies.'
        },
        {
          title: 'Uber for Business - Corporate Transportation',
          description: 'Uber for Business provides companies with tools to manage employee travel, meal programs, and customer transportation needs. Features include centralized billing, spending controls, policy enforcement, and detailed reporting. Companies can set up programs for employee commutes, business travel, client rides, or meal delivery. This solution helps businesses reduce transportation costs while providing convenient options for their teams.'
        },
        {
          title: 'Uber Pool - Shared Rides for Lower Costs',
          description: 'Uber Pool (where available) allows you to share your ride with others heading in the same direction, significantly reducing the cost of your trip. The app matches you with other riders along a similar route, making transportation more affordable and environmentally friendly. While it may take slightly longer than a private ride, the savings make it an excellent option for budget-conscious travelers.'
        },
        {
          title: 'Uber Green - Eco-Friendly Transportation',
          description: 'Uber Green connects you with hybrid or fully electric vehicles, helping reduce your carbon footprint. This option is perfect for environmentally conscious riders who want to make a positive impact. Uber Green rides contribute to our sustainability goals and are available in select cities. You can track your environmental impact through the app, seeing how much CO₂ you\'ve saved by choosing green options.'
        }
      ],
    },
    howUberWorks: {
      title: t('howUberWorks'),
      description: 'Uber has revolutionized transportation by making it simple, accessible, and reliable. Here\'s how our platform works for riders, drivers, and delivery partners.',
      details: [
        {
          title: 'For Riders - Getting Started',
          description: 'Download the Uber app on your smartphone, create an account with your email or phone number, and add a payment method. When you need a ride, simply open the app, enter your destination, and choose your preferred ride option. The app shows you the estimated fare, arrival time, and vehicle type. Tap "Confirm" and you\'ll be matched with a nearby driver. You can track your driver\'s location in real-time and receive notifications when they arrive.'
        },
        {
          title: 'The Matching Process',
          description: 'Our advanced algorithm matches you with the nearest available driver based on location, ride type, and driver rating. The system considers multiple factors including distance, traffic conditions, and driver availability to ensure the fastest pickup time. Once matched, you\'ll see your driver\'s name, photo, vehicle details, and license plate number. You can contact your driver directly through the app if needed.'
        },
        {
          title: 'During Your Ride',
          description: 'When your driver arrives, verify the vehicle details match what\'s shown in the app before getting in. During the ride, you can see your route in real-time, share your trip status with friends or family, and contact your driver if needed. The app provides an estimated arrival time and you can change your destination if plans change. All rides are tracked for safety, and you can access trip history anytime.'
        },
        {
          title: 'Payment and Rating',
          description: 'Payment is handled automatically through the payment method on file - no cash needed. You\'ll receive a receipt via email immediately after your trip. After each ride, you can rate your driver and provide feedback, which helps maintain quality standards. Drivers also rate riders, creating a two-way accountability system that keeps the platform safe and reliable for everyone.'
        },
        {
          title: 'For Drivers - Becoming a Partner',
          description: 'To drive with Uber, you need to meet local requirements including age, valid driver\'s license, vehicle eligibility, and background check approval. The sign-up process is straightforward: download the Driver app, complete your profile, upload required documents, and pass a background check. Once approved, you can start accepting ride requests immediately. You have complete flexibility to work when you want, making it perfect for earning extra income or as a full-time job.'
        },
        {
          title: 'Driver Experience',
          description: 'When you\'re online, the app sends you ride requests based on your location. You can see the estimated fare and destination before accepting. After accepting, you\'ll get turn-by-turn navigation to the pickup location. Complete the ride, and payment is automatically processed. You can see your earnings in real-time, cash out up to 5 times per day, and access detailed trip history. Uber provides insurance coverage, 24/7 support, and resources to help you succeed.'
        },
        {
          title: 'Safety Features',
          description: 'Safety is our top priority. All drivers undergo comprehensive background checks, and vehicles must meet safety standards. The app includes features like Share My Trip, Emergency Button, and 24/7 support. We use technology to verify trips, monitor for unusual activity, and provide assistance when needed. Both riders and drivers can report issues through the app, and our safety team reviews all reports promptly.'
        },
        {
          title: 'Technology Behind the Platform',
          description: 'Uber\'s platform uses sophisticated algorithms to optimize routes, predict demand, and match riders with drivers efficiently. Machine learning helps predict when and where rides will be needed, ensuring drivers are positioned to meet demand. Real-time data processing handles millions of trips daily, calculating fares, processing payments, and managing the entire ecosystem seamlessly. Our technology continuously improves through data analysis and user feedback.'
        }
      ],
    },
    sustainability: {
      title: t('sustainability'),
      description: 'Uber is committed to becoming a fully zero-emission platform by 2040, with 100% of rides taking place in zero-emission vehicles, on public transit, or with micromobility.',
      details: [
        {
          title: 'Our Zero-Emission Goal',
          description: 'Uber has set an ambitious goal: by 2040, 100% of rides on our platform will be in zero-emission vehicles, public transit, or micromobility (bikes and scooters). For major cities in the US, Canada, and Europe, we\'re accelerating this timeline to 2030. This commitment makes Uber one of the first major ride-sharing platforms to set such a comprehensive zero-emission target. We\'re investing billions to help drivers transition to electric vehicles and working with cities to build the necessary charging infrastructure.'
        },
        {
          title: 'Uber Green - Choose Electric',
          description: 'Uber Green allows riders to specifically request hybrid or fully electric vehicles, making it easy to make environmentally conscious choices. Available in select cities, Uber Green connects you with drivers who have made the switch to electric or hybrid vehicles. By choosing Uber Green, you\'re directly supporting the transition to sustainable transportation. The app shows you the environmental impact of choosing green options, including CO₂ savings compared to traditional rides.'
        },
        {
          title: 'Helping Drivers Go Electric',
          description: 'Transitioning to electric vehicles can be expensive for drivers. Uber is addressing this through partnerships with automakers, offering discounts on electric vehicles, and providing resources for charging infrastructure. We\'ve committed $800 million to help drivers transition to EVs by 2025. This includes partnerships with rental companies to provide electric vehicles, working with charging networks to expand access, and offering financial incentives to drivers who make the switch.'
        },
        {
          title: 'Uber Planet - Carbon Offset Program',
          description: 'Uber Planet is an optional program that allows riders to offset the carbon emissions from their trips. For a small additional fee, Uber invests in verified carbon offset projects that remove or prevent CO₂ from entering the atmosphere. These projects include reforestation, renewable energy development, and methane capture initiatives. When you opt into Uber Planet, you can see the impact of your contributions and how they\'re helping fight climate change.'
        },
        {
          title: 'Partnerships for Clean Energy',
          description: 'Uber partners with cities, NGOs, and private sector companies to accelerate the transition to clean energy. We work with city governments to expand EV charging infrastructure, support public transit integration, and promote micromobility options. Our partnerships with environmental organizations help us develop best practices and measure our impact. We also collaborate with energy companies to ensure drivers have access to renewable energy sources for charging their vehicles.'
        },
        {
          title: 'Reducing Urban Congestion',
          description: 'Beyond emissions, Uber is working to reduce urban congestion through various initiatives. We promote shared rides (Uber Pool) to reduce the number of vehicles on the road. We integrate with public transit systems, making it easier for people to combine rides with buses and trains. Our micromobility options (bikes and scooters) provide alternatives for short trips. We also use data to help cities understand traffic patterns and optimize transportation infrastructure.'
        },
        {
          title: 'Transparency and Reporting',
          description: 'Uber is committed to transparency in our sustainability efforts. We publish annual sustainability reports detailing our progress, challenges, and future plans. These reports include data on emissions reductions, EV adoption rates, and the impact of our programs. We also provide riders with information about the environmental impact of their transportation choices, empowering them to make informed decisions.'
        },
        {
          title: 'The Path Forward',
          description: 'Achieving zero emissions by 2040 requires collaboration across industries, governments, and communities. Uber is investing in research and development, supporting policy changes that promote electric vehicles, and working with partners to overcome barriers to adoption. We believe that technology and innovation, combined with commitment and partnership, can help create a more sustainable future for urban transportation.'
        }
      ],
    },
    newsroom: {
      title: t('newsroom'),
      description: 'Stay informed with the latest news, announcements, and stories from Uber. Our newsroom is your source for company updates, product launches, partnerships, and community impact stories.',
      details: [
        {
          title: 'Company Announcements',
          description: 'Get the latest updates on major company milestones, strategic initiatives, and organizational changes. We share news about new market launches, service expansions, and significant business developments. Our announcements include detailed information about what these changes mean for riders, drivers, and the communities we serve. Whether it\'s launching in a new city, introducing new features, or announcing partnerships, you\'ll find comprehensive coverage here.'
        },
        {
          title: 'Product Launches and Updates',
          description: 'Learn about new features, app updates, and service enhancements as they\'re released. We provide detailed explanations of how new products work, who they\'re designed for, and how to use them. From new ride options to safety features, payment innovations to driver tools, our product announcements help you stay current with the latest Uber has to offer. We also share the thinking behind product decisions and how they improve the experience for everyone.'
        },
        {
          title: 'Partnerships and Collaborations',
          description: 'Discover how Uber partners with other companies, organizations, and governments to improve transportation and delivery. We announce partnerships with automakers, technology companies, restaurants, retailers, and public transit agencies. These collaborations often result in new services, better experiences, or expanded availability. Learn about how these partnerships benefit riders, drivers, and the broader community.'
        },
        {
          title: 'Safety Initiatives and Policy Updates',
          description: 'Safety is our top priority, and we regularly announce new safety features, policy changes, and initiatives. Our newsroom covers background check improvements, new in-app safety tools, driver safety programs, and policy updates. We provide transparent information about how we\'re working to make rides safer for everyone. This includes updates on our safety reports, new technologies we\'re implementing, and partnerships with safety organizations.'
        },
        {
          title: 'Community Impact Stories',
          description: 'Read about how Uber is making a positive impact in communities around the world. We share stories about drivers who have achieved their goals, riders who have benefited from our services, and communities that have been transformed by improved access to transportation. These stories highlight the human side of Uber and demonstrate how our platform creates economic opportunities and improves mobility for millions of people.'
        },
        {
          title: 'Financial and Business Updates',
          description: 'Stay informed about Uber\'s financial performance, business strategy, and market position. We share quarterly earnings highlights, strategic initiatives, and insights into our business model. These updates help investors, analysts, and interested stakeholders understand how Uber is performing and where we\'re heading. We provide context and analysis to make complex financial information accessible.'
        },
        {
          title: 'Technology and Innovation',
          description: 'Learn about the technology and innovation driving Uber forward. We share insights into our engineering achievements, research and development efforts, and technological breakthroughs. From autonomous vehicle development to AI and machine learning applications, our technology updates showcase how we\'re using innovation to improve transportation and delivery. These stories appeal to tech enthusiasts and professionals interested in cutting-edge technology.'
        },
        {
          title: 'Media Resources and Press Kit',
          description: 'Journalists and media professionals can access press releases, high-resolution images, executive bios, and other resources. Our press kit makes it easy for media to cover Uber accurately and comprehensively. We provide background information, statistics, and context to help journalists tell our story. Media inquiries are handled by our communications team, who can provide additional information and arrange interviews.'
        }
      ],
    },
    investorRelations: {
      title: t('investorRelations'),
      description: 'Comprehensive financial information, corporate governance details, and strategic insights for investors, shareholders, and financial stakeholders.',
      details: [
        {
          title: 'Financial Reports and Earnings',
          description: 'Access quarterly earnings reports, annual reports, and financial statements that provide detailed insights into Uber\'s financial performance. Our quarterly earnings include revenue breakdowns by segment (Mobility, Delivery, Freight), key metrics like Gross Bookings and Adjusted EBITDA, and management commentary on results. Annual reports provide comprehensive overviews of the year\'s performance, strategic initiatives, and future outlook. All reports are prepared in accordance with accounting standards and include detailed footnotes and explanations.'
        },
        {
          title: 'Stock Information and Trading',
          description: 'Find current stock price information, historical performance data, and trading statistics. We provide links to major financial data providers, stock exchange listings, and real-time trading information. Investors can access information about stock splits, dividend policies, and share buyback programs. We also provide guidance on how to purchase Uber stock and information about our investor relations team for questions about trading or ownership.'
        },
        {
          title: 'Corporate Governance',
          description: 'Learn about Uber\'s corporate governance structure, board of directors, executive leadership team, and governance policies. We provide detailed information about board composition, committee structures, and governance best practices. Our governance documents include corporate bylaws, committee charters, and codes of conduct. We also share information about our commitment to diversity, equity, and inclusion at the board and executive levels.'
        },
        {
          title: 'Proxy Statements and Annual Meetings',
          description: 'Access proxy statements for annual shareholder meetings, which include information about board elections, executive compensation, and shareholder proposals. We provide detailed information about how to vote, attend meetings, and participate in corporate governance. Annual meeting materials include management presentations, Q&A sessions, and voting results. Shareholders can find information about how to submit proposals and engage with the company.'
        },
        {
          title: 'Strategic Initiatives and Outlook',
          description: 'Understand Uber\'s strategic direction, growth initiatives, and long-term vision. We provide detailed information about market opportunities, competitive positioning, and strategic investments. Our investor presentations and earnings calls include management discussions about strategy, market trends, and future plans. We share insights into how we\'re positioning Uber for long-term growth and value creation.'
        },
        {
          title: 'ESG and Sustainability Reporting',
          description: 'Access information about Uber\'s environmental, social, and governance (ESG) initiatives and performance. We publish detailed sustainability reports covering our environmental goals, social impact, and governance practices. These reports include metrics on emissions reductions, driver earnings, safety performance, and diversity. We also provide information about how ESG factors are integrated into our business strategy and risk management.'
        },
        {
          title: 'Investor Events and Presentations',
          description: 'Find information about upcoming investor events, earnings calls, conferences, and presentations. We provide access to webcasts, transcripts, and presentation materials from these events. Investors can register for earnings calls, submit questions in advance, and access archived recordings. We also participate in investor conferences and roadshows, providing opportunities for direct engagement with management.'
        },
        {
          title: 'Contact Investor Relations',
          description: 'Our investor relations team is available to answer questions, provide additional information, and facilitate engagement with management. You can contact us through email, phone, or our investor relations website. We respond to inquiries from current and potential investors, analysts, and other stakeholders. We also maintain a calendar of investor events and provide email alerts for important announcements and filings.'
        }
      ],
    },
    autonomous: {
      title: t('autonomous'),
      description: 'Uber is at the forefront of developing autonomous vehicle technology, working to create a safer, more efficient, and accessible future for transportation.',
      details: [
        {
          title: 'Our Vision for Autonomous Vehicles',
          description: 'Uber envisions a future where autonomous vehicles complement human drivers, making transportation safer, more affordable, and more accessible. Self-driving technology has the potential to reduce accidents caused by human error, provide transportation options for people who cannot drive, and make rides more affordable by reducing costs. We believe autonomous vehicles will work alongside human drivers, expanding transportation options rather than replacing them entirely. Our goal is to develop and deploy this technology safely and responsibly.'
        },
        {
          title: 'Research and Development',
          description: 'Uber\'s Advanced Technologies Group (ATG) is dedicated to developing self-driving technology. Our research focuses on perception systems (how vehicles see and understand their environment), prediction (anticipating the behavior of other road users), and planning (making safe driving decisions). We use a combination of sensors including cameras, lidar, and radar to create a comprehensive understanding of the vehicle\'s surroundings. Machine learning and AI are central to our approach, allowing vehicles to learn from millions of miles of driving data.'
        },
        {
          title: 'Safety-First Approach',
          description: 'Safety is the foundation of everything we do in autonomous vehicle development. All our self-driving vehicles operate with trained safety drivers who can take control if needed. We conduct extensive testing in controlled environments before public road testing. Our vehicles must pass rigorous safety assessments and demonstrate capabilities far exceeding human driver performance in specific scenarios. We work closely with regulators, safety experts, and communities to ensure our technology meets the highest safety standards.'
        },
        {
          title: 'Testing and Deployment',
          description: 'Uber conducts autonomous vehicle testing in select cities with appropriate infrastructure and regulatory support. Testing begins in controlled environments and gradually expands to more complex scenarios. We share data with local authorities and communities about our testing activities. As technology matures, we plan to gradually expand autonomous vehicle availability, always maintaining safety drivers until the technology is proven safe for fully autonomous operation. Our deployment strategy prioritizes safety and community acceptance.'
        },
        {
          title: 'Partnerships and Collaborations',
          description: 'We partner with leading technology companies, automakers, and research institutions to advance autonomous vehicle technology. These partnerships bring together expertise in software, hardware, manufacturing, and safety. We collaborate with companies that share our commitment to safety and our vision for the future of transportation. These partnerships help accelerate development while ensuring we maintain the highest standards of safety and reliability.'
        },
        {
          title: 'Benefits of Autonomous Vehicles',
          description: 'Autonomous vehicles offer numerous potential benefits: reduced accidents through elimination of human error, increased accessibility for people who cannot drive, lower costs through improved efficiency, and reduced traffic congestion through optimized routing. They can also provide transportation in areas with driver shortages and operate 24/7 without fatigue. However, we recognize that realizing these benefits requires careful development, testing, and deployment that prioritizes safety above all else.'
        },
        {
          title: 'Challenges and Considerations',
          description: 'Developing autonomous vehicles presents significant technical, regulatory, and societal challenges. Technical challenges include handling edge cases, adverse weather conditions, and complex urban environments. Regulatory challenges involve working with governments to establish appropriate safety standards and deployment frameworks. Societal considerations include addressing concerns about job impacts, privacy, and public acceptance. We\'re committed to addressing these challenges transparently and responsibly.'
        },
        {
          title: 'The Future of Autonomous Transportation',
          description: 'While fully autonomous vehicles are still in development, we\'re making steady progress toward this future. We believe autonomous vehicles will eventually become a common part of our transportation ecosystem, working alongside human drivers to provide more options and better service. The timeline for widespread deployment depends on technological maturity, regulatory approval, and public acceptance. We\'re committed to this journey and to doing it right, prioritizing safety and responsible development every step of the way.'
        }
      ],
    },
    blog: {
      title: t('blog'),
      description: 'Explore stories, insights, and updates from the Uber team. Our blog covers product innovations, company culture, technology, and the people who make Uber work.',
      details: [
        {
          title: 'Product Updates and Features',
          description: 'Stay informed about new features, app updates, and product improvements as they launch. Our product team shares detailed explanations of new functionality, how to use it, and the thinking behind product decisions. Whether it\'s a new ride option, safety feature, payment method, or driver tool, our blog provides comprehensive coverage. We also share user feedback and how it influences product development, giving readers insight into our iterative improvement process.'
        },
        {
          title: 'Driver and Rider Stories',
          description: 'Read inspiring stories from the Uber community - drivers who have achieved their goals, riders who have had meaningful experiences, and communities that have been positively impacted. These human-centered stories showcase the real-world impact of our platform. We feature drivers who have used Uber to build businesses, support families, or pursue passions. We share rider stories about how Uber has enabled important moments, from job interviews to medical appointments to celebrations.'
        },
        {
          title: 'Technology and Innovation',
          description: 'Dive deep into the technology powering Uber, from machine learning algorithms to mapping technology to payment systems. Our engineering team shares technical insights, explains complex systems in accessible ways, and discusses innovation challenges and solutions. These posts appeal to both technical and non-technical readers, explaining how technology improves the Uber experience. We cover topics like route optimization, demand prediction, fraud prevention, and platform scalability.'
        },
        {
          title: 'Company Culture and Values',
          description: 'Learn about what it\'s like to work at Uber, our company values, and how we\'re building an inclusive and diverse workplace. We share stories about employee experiences, team building, and company initiatives. Our culture blog covers topics like diversity and inclusion efforts, employee resource groups, professional development programs, and work-life balance. We also discuss how our values guide decision-making and shape our approach to business.'
        },
        {
          title: 'Safety and Trust',
          description: 'Read about our safety initiatives, new safety features, and how we\'re working to make rides safer for everyone. We share detailed information about safety technology, background check processes, and safety partnerships. Our safety blog provides transparency about our efforts and progress. We discuss topics like in-app safety features, driver safety programs, community safety initiatives, and how we use data to improve safety.'
        },
        {
          title: 'Sustainability and Environment',
          description: 'Explore our environmental initiatives, sustainability goals, and progress toward zero emissions. We share updates on electric vehicle adoption, carbon offset programs, and partnerships with environmental organizations. Our sustainability blog explains how riders and drivers can participate in environmental efforts. We discuss topics like Uber Green, charging infrastructure, renewable energy, and our path to becoming a zero-emission platform.'
        },
        {
          title: 'City Partnerships and Impact',
          description: 'Learn about how Uber works with cities to improve transportation, reduce congestion, and support local economies. We share stories about partnerships with public transit agencies, city governments, and community organizations. Our city impact blog covers topics like transit integration, economic opportunity for drivers, accessibility improvements, and how we\'re addressing urban transportation challenges. We also discuss data sharing and how cities use Uber data to improve transportation planning.'
        },
        {
          title: 'Industry Insights and Trends',
          description: 'Read analysis and commentary on transportation trends, mobility innovation, and the future of urban transportation. Our team shares insights on topics like shared mobility, electric vehicles, micromobility, and transportation policy. These posts provide context for understanding the broader transportation ecosystem and Uber\'s role within it. We discuss industry trends, competitive dynamics, regulatory developments, and emerging technologies that could shape the future of transportation.'
        }
      ],
    },
    careers: {
      title: t('careers'),
      description: 'Join Uber and help shape the future of transportation. We\'re looking for talented, passionate people who want to solve complex problems and make a meaningful impact.',
      details: [
        {
          title: 'Engineering - Build Products That Move Millions',
          description: 'Our engineering teams build the technology that powers millions of rides and deliveries every day. Engineers work on everything from mobile apps to backend systems, from machine learning algorithms to mapping technology. We use cutting-edge technology and modern development practices to solve complex problems at scale. Engineering roles include software engineers, data engineers, mobile developers, infrastructure engineers, and machine learning engineers. We offer competitive compensation, comprehensive benefits, and opportunities to work on impactful projects that affect millions of users worldwide.'
        },
        {
          title: 'Product and Design - Create Exceptional Experiences',
          description: 'Product managers and designers work together to create intuitive, user-friendly experiences for riders, drivers, and delivery partners. Product managers define strategy, prioritize features, and work cross-functionally to bring products to market. Designers create beautiful, functional interfaces that make complex technology accessible. These roles require understanding user needs, market dynamics, and technical capabilities. We look for people who are user-centric, data-driven, and passionate about creating products that solve real problems.'
        },
        {
          title: 'Operations - Help Cities Run More Efficiently',
          description: 'Operations teams work on the ground in cities around the world to ensure Uber works smoothly for everyone. They manage driver supply, optimize pricing, improve service quality, and build relationships with local communities. Operations roles include city operations managers, launch managers, driver operations specialists, and customer support leaders. These positions require analytical thinking, problem-solving skills, and the ability to work with diverse stakeholders. Operations professionals have the opportunity to make a direct impact on how Uber serves cities and communities.'
        },
        {
          title: 'Data Science and Analytics - Turn Data Into Insights',
          description: 'Data scientists and analysts help Uber make data-driven decisions about everything from pricing to safety to product features. They work with massive datasets to identify patterns, build predictive models, and provide insights that guide strategy. Data roles include data scientists, business analysts, research scientists, and analytics engineers. These positions require strong analytical skills, statistical knowledge, and the ability to communicate insights effectively. Data professionals at Uber work on challenging problems with real-world impact.'
        },
        {
          title: 'Marketing and Communications - Tell Uber\'s Story',
          description: 'Marketing and communications teams help people understand Uber\'s value and build trust in our brand. They develop campaigns, manage public relations, create content, and engage with communities. Marketing roles include brand marketers, growth marketers, content creators, and communications specialists. These positions require creativity, strategic thinking, and excellent communication skills. Marketing professionals help shape how the world sees Uber and communicate our mission, values, and impact.'
        },
        {
          title: 'Business Development and Partnerships',
          description: 'Business development teams build relationships with partners including restaurants, retailers, automakers, and technology companies. They identify opportunities, negotiate deals, and manage partnerships that expand Uber\'s capabilities and reach. These roles require relationship-building skills, business acumen, and the ability to see strategic opportunities. Business development professionals work on exciting partnerships that can transform how Uber serves customers and operates in markets.'
        },
        {
          title: 'Legal, Policy, and Compliance',
          description: 'Legal, policy, and compliance teams help Uber navigate complex regulatory environments and build constructive relationships with governments and stakeholders. They work on everything from contract negotiations to regulatory compliance to public policy. These roles require legal expertise, policy knowledge, and strong communication skills. Legal and policy professionals help ensure Uber operates responsibly and sustainably while advocating for policies that support innovation and economic opportunity.'
        },
        {
          title: 'Why Work at Uber',
          description: 'Uber offers competitive compensation, comprehensive benefits, and opportunities for professional growth. We provide health insurance, retirement plans, equity compensation, and generous time off. Our culture values diversity, inclusion, and belonging, and we\'re committed to creating an environment where everyone can thrive. We offer flexible work arrangements, professional development programs, and opportunities to work on meaningful projects that impact millions of people. At Uber, you\'ll work with talented colleagues, solve challenging problems, and help shape the future of transportation.'
        }
      ],
    },
  }

  const currentContent = content[section] || content.aboutUs

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto pt-[70px] sm:pt-[80px]">
      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-12 md:py-16">
        {section === 'aboutUs' ? (
          <>
            {/* Hero Section */}
            <div className="mb-16 text-center relative overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black -z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent -z-10"></div>
              {/* Decorative grid pattern */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '50px 50px'
              }}></div>
              <div className="py-20 px-8 relative z-10">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight px-4">
                  We reimagine the way the world moves for the better
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-4xl mx-auto px-4">
                  Movement is what we power. It's our lifeblood. It runs through our veins. It's what gets us out of bed each morning. It pushes us to constantly reimagine how we can move better. For you. For all the places you want to go. For all the things you want to get. For all the ways you want to earn. Across the entire world. In real time. At the incredible speed of now.
                </p>
              </div>
            </div>

            {/* A letter from our CEO */}
            <div className="mb-16 p-8 bg-white rounded-lg border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-bold text-black mb-4">A letter from our CEO</h2>
              <p className="text-base text-gray-700 mb-6 leading-relaxed">
                Read about our team's commitment to provide everyone on our global platform with the technology that can help them move ahead.
              </p>
              <button 
                onClick={() => setShowCEOLetter(true)}
                className="text-blue-600 hover:underline font-normal text-base"
              >
                Read Dara's letter
              </button>
            </div>

            {/* Sustainability */}
            <div className="mb-16 p-8 bg-gradient-to-br from-green-50 to-white rounded-2xl border-2 border-green-200 hover:shadow-xl transition-all">
              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3 sm:mb-4">Sustainability</h2>
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                Uber is committing to becoming a fully electric, zero-emission platform by 2040, with 100% of rides taking place in zero-emission vehicles, on public transit, or with micromobility. It is our responsibility as the largest mobility platform in the world to more aggressively tackle the challenge of climate change. We will do this by offering riders more ways to ride green, helping drivers go electric, making transparency a priority and partnering with NGOs and the private sector to help expedite a clean and just energy transition.
              </p>
              <button className="text-blue-600 hover:underline font-semibold text-lg">
                Learn more
              </button>
            </div>

            {/* Rides and beyond */}
            <div className="mb-16 p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border-2 border-blue-200 hover:shadow-xl transition-all">
              <h2 className="text-3xl font-bold text-black mb-4">Rides and beyond</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                In addition to helping riders find a way to go from point A to point B, we're helping people order food quickly and affordably, removing barriers to healthcare, creating new freight-booking solutions, and helping companies provide a seamless employee travel experience. And always helping drivers and couriers earn.
              </p>
            </div>

            {/* How to use the Uber app */}
            <div className="mb-16 p-8 bg-gradient-to-br from-purple-50 to-white rounded-2xl border-2 border-purple-200 hover:shadow-xl transition-all">
              <h2 className="text-3xl font-bold text-black mb-4">How to use the Uber app</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our offerings
              </p>
            </div>

            {/* Your safety drives us */}
            <div className="mb-16 p-8 bg-gradient-to-br from-red-50 to-white rounded-2xl border-2 border-red-200 hover:shadow-xl transition-all">
              <h2 className="text-3xl font-bold text-black mb-4">Your safety drives us</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Whether you're in the back seat or behind the wheel, your safety is essential. We are committed to doing our part, and technology is at the heart of our approach. We partner with safety advocates and develop new technologies and systems to help improve safety and help make it easier for everyone to get around.
              </p>
              <button className="text-blue-600 hover:underline font-semibold text-lg">
                Learn more
              </button>
            </div>

            {/* Company info */}
            <div className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6 sm:mb-8">Company info</h2>
              
              {/* Who's driving Uber */}
              <div className="mb-8 p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-200 hover:shadow-xl transition-all">
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">Who's driving Uber</h3>
                <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                  We're building a culture within Uber that emphasizes doing the right thing, period, for riders, drivers, and employees. Find out more about the team that's leading the way.
                </p>
                <button className="text-blue-600 hover:underline font-semibold text-lg">
                  See our leadership
                </button>
              </div>

              {/* Acting with integrity */}
              <div className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-200 hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold text-black mb-4">Acting with integrity</h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Uber's Ethics & Compliance Program Charter outlines our commitment to integrity at the highest levels within the company. Transparency is critical to an ethical culture; we achieve this through our Integrity Helpline and suite of scalable and effective compliance initiatives.
                </p>
                <button className="text-blue-600 hover:underline font-semibold text-lg">
                  Learn more
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="mb-12 text-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 -z-10 rounded-3xl"></div>
              <div className="py-12 px-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6">
                  {currentContent.title}
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto px-4">
                  {currentContent.description}
                </p>
              </div>
            </div>
            <div className="space-y-6 sm:space-y-8">
              {currentContent.details.map((detail, index) => (
                <div key={index} className="p-6 sm:p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-200 hover:border-black hover:shadow-xl transition-all group">
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <span className="text-white font-bold text-base sm:text-lg">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4 group-hover:text-gray-800 transition-colors">
                        {detail.title}
                      </h3>
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        {detail.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* CEO Letter Modal */}
      {showCEOLetter && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-50"
            onClick={() => setShowCEOLetter(false)}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-8 overflow-y-auto">
            <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-black">A letter from our CEO</h2>
                <button
                  onClick={() => setShowCEOLetter(false)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors group"
                >
                  <svg className="w-5 h-5 text-gray-600 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-base font-medium text-gray-700 group-hover:text-black">Close</span>
                </button>
              </div>

              {/* Modal Content */}
              <div className="px-8 py-8">
                <div className="mb-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-black mb-2">
                    A letter from Dara Khosrowshahi, Chief Executive Officer
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">letter from CEO</p>
                  <p className="text-sm sm:text-base text-gray-500">April 2019</p>
                </div>

                <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
                  <p>
                    Ten years ago, Uber was born out of a watershed moment in technology. The rise of smartphones, the advent of app stores, and the desire for on-demand work supercharged Uber's growth and created an entirely new standard of consumer convenience. What began as "Tap a button, get a ride" has become something much more profound: ridesharing and carpooling; meal delivery and freight; electric bikes and scooters; and self-driving cars and urban aviation.
                  </p>

                  <p>
                    Of course, in getting from point A to point B we didn't get everything right. Some of the attributes that made Uber a wildly successful startup—a fierce sense of entrepreneurialism, our willingness to take risks that others might not, and that famous Uber hustle—led to missteps along the way. In fact, when I joined Uber as CEO, many people asked me why I would leave the stability of my previous job for one that was anything but. My answer was simple: Uber is a once-in-a-generation company, and the opportunity ahead of it is enormous.
                  </p>

                  <p>
                    Today, Uber accounts for less than 1% of all miles driven globally. Just a small percentage of people in countries where Uber is available have ever used our services. And we are still barely scratching the surface when it comes to huge industries like food and logistics, and how the future of urban mobility will reshape cities for the better.
                  </p>

                  <p>
                    Building this platform has required a willingness to challenge orthodoxies and reinvent—sometimes even disrupt—ourselves. Over the last decade, as the needs and preferences of our customers have changed, we've changed too. Now we're becoming something different once again: a public company.
                  </p>

                  <p>
                    Taking this step means that we have even greater responsibilities—to our shareholders, our customers, and our colleagues. That's why, over the past 18 months, we've improved our governance and board oversight; built a stronger and more cohesive management team; and made the changes necessary to ensure that our company culture rewards teamwork and encourages employees to commit for the long term.
                  </p>

                  <p>
                    Because we're not even 1% done with our work, we will operate with an eye toward the future. We will optimize for the happiness and loyalty of our customers rather than marginal trip or transaction growth. And we will not shy away from making short-term financial sacrifices where we see clear long-term benefits.
                  </p>

                  <p>
                    Our continued success will come from stellar execution and the strength of the platform we have worked so hard to build. Our network spans tens of millions of consumers and partners and represents one of the world's largest platforms for independent work. Our engineering and product teams are solving some of the most difficult problems at the intersection of the physical and digital worlds. And our regional operations teams let us build and run our business as true citizens of the cities we serve.
                  </p>

                  <p>
                    I want to close with my commitment to you: I won't be perfect, but I will listen to you; I will ensure that we treat our customers, our colleagues, and our cities with respect; and I will run our business with passion, humility, and integrity.
                  </p>

                  <p className="mt-8 font-semibold text-black">
                    Dara Khosrowshahi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default AboutPage

