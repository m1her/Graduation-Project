"use client";
import CategoryBarCard from "featuers/pages/Categories/CategoryBarCard";
import ArticleCard from "featuers/pages/Categories/ArticleCard";
import CategoryExpertList from "featuers/pages/Categories/CategoryExpertList";
import PostCard from "featuers/pages/Profile/Posts/PostCard";
import { Card } from "components";
import Image from "next/image";
import { usePathname } from "next/navigation";

const EncouragingCardText = {
  finance:
    "Embrace the challenges of finance with unwavering determination, or within every obstacle lies an opportunity for growth and success.",
  investment:
    "Secure your financial future with professional expertise and tailor-made investment solutions that align with your goals and risk tolerance.",
  realestate:
    "Unlock the potential of real estate with the guidance of experienced professionals, offering personalized strategies to maximize returns and build a strong property portfolio.",
  socialmedia:
    "Elevate your online presence and reach with expert guidance in social media marketing, providing customized solutions to grow your brand and engage your target audience effectively.",
  technology:
    "Embrace the future of technology with specialized insights and personalized recommendations, empowering you to make informed decisions that drive innovation and propel your business forward.",
};

const ArticleCardContent = {
  finance: {
    title: "Budgeting: How to create a budget and stick with it",
    text: "Making and sticking to a budget is a key step towards getting a handle on your debt and working towards a savings goal, of any kind. Let’s say you want to set money aside for emergencies or you aspire to save up for a much larger goal like a car, down payment on a house, or retirement. Until you get a realistic picture of how much money you’re bringing in and where it’s going, it’s difficult to know whether you’ll have enough left over to put away.",
    link: "https://www.consumerfinance.gov/about-us/blog/budgeting-how-to-create-a-budget-and-stick-with-it/",
  },
  investment: {
    title:
      "Is Amazon a Retailer, a Tech Firm, or a Media Company? How AI Can Help Investors Decide",
    text: "More companies are bringing seemingly unrelated businesses together in new ways, challenging traditional stock categories. MarcAntonio Awada and Suraj Srinivasan discuss how applying machine learning to regulatory data could reveal new opportunities for investors.",
    link: "https://hbswk.hbs.edu/item/is-amazon-retailer-tech-firm-media-company-how-ai-can-help-investors-decide",
  },
  realestate: {
    title:
      "David Spade’s Former Home Hits The Market In Los Angeles For $32.5 Million",
    text: "The former Los Angeles home of David Spade is back on the market for $32.5 million, or about 66% more than what the comic actor sold the property for earlier this year—$19.5 million. Spade, who this year reprised his voice role of the Invisible Man in Hotel Transylvania: Tranformania, listed the property in January 2022 for just under $20 million and had an offer in hand after less than a week on the market, according to the Los Angeles Times. Records show the actor-comedian bought the home in 2001 for roughly $4 million. Located near the Trousdale Estates section of Beverly Hills, the streamlined midcentury modern home is situated on a roomy three-quarter-acre lot that centers on some of the best views in Los Angeles, according to listing agent Stuart Vetterick with Beverly Hills-based brokerage Hilton & Hyland.",
    link: "https://www.forbes.com/sites/forbes-global-properties/2022/11/28/david-spades-former-home-hits-the-market-in-los-angeles-for-325-million/?sh=45b6c54f3c26",
  },
  socialmedia: {
    title: "Top 7 Impacts of Social Media: Advantages and Disadvantages",
    text: "nformation and communication technology has changed rapidly over the past 20 years, with a key development being the emergence of social media. The pace of change is accelerating. For example, the development of mobile technology has played an essential role in shaping the impact of social media. Across the globe, mobile devices dominate in terms of total minutes spent online. They put the means to connect anywhere, at any time on any device in everyone’s hands.",
    link: "https://www.simplilearn.com/real-impact-social-media-article",
  },
  technology: {
    title: "Google Testing New AI Technology to Generate News Articles",
    text: "Google is reportedly testing a new AI technology codenamed “Genesis” that has the capability to generate news articles. The tech giant has showcased the tool to The New York Times, The Washington Post, and News Corp, the owner of The Wall Street Journal. Observers have witnessed Genesis swiftly generating text based on the fed data, including current events and other forms of information. The purpose of this technology, according to Google, is to assist journalists in automating tasks and freeing up their time for other responsibilities.",
    link: "https://fagenwasanni.com/news/google-testing-new-ai-technology-to-generate-news-articles/64912/",
  },
};

const CategoryBarCardText = {
  finance:
    "Take control of your financial future with expert guidance and personalized solutions",
  investment:
    "Take charge of your financial destiny with expert advice and tailored investment solutions.",
  realestate:
    "Seize control of your real estate ventures through professional guidance and personalized strategies.",
  socialmedia:
    "Empower your brand's future with expert guidance and customized solutions for maximum engagement.",
  technology:
    "Take the lead in the tech world with expert insights and Tailored suggestions for innovative growth.",
};
const CategoryBarCardImage = {
  finance: "/CattegoryPageImages/FinanceCategory.jpg",
  investment: "/CattegoryPageImages/InvestmentCategory.jpg",
  realestate: "/CattegoryPageImages/RealestateCategory.jpg",
  socialmedia: "/CattegoryPageImages/SocialMediaCategory.jpg",
  technology: "/CattegoryPageImages/TechnologyCategory.jpg",
};

const Category = () => {
  const pathname = usePathname();

  return (
    <div className="w-[80%] flex-col mt-2 px-4 py-2">
      <div className="text-2xl font-semibold leading-6 text-gray-900 my-6">
        {pathname.replace(/-/g, " ").slice(14)}
      </div>
      <CategoryBarCard
        bg={
          CategoryBarCardImage[
            pathname
              .replace(/-/g, " ")
              .slice(14)
              .toLowerCase()
              .replace(/ /g, "")
          ]
        }
        text={
          CategoryBarCardText[
            pathname
              .replace(/-/g, " ")
              .slice(14)
              .toLowerCase()
              .replace(/ /g, "")
          ]
        }
      />
      <div className="w-full flex justify-between items-start mt-4">
        <ArticleCard
          article={
            ArticleCardContent[
              pathname
                .replace(/-/g, " ")
                .slice(14)
                .toLowerCase()
                .replace(/ /g, "")
            ]
          }
        />
        <CategoryExpertList type={pathname.replace(/-/g, " ").slice(14)} />
      </div>
      <div className="text-2xl font-light leading-6 text-gray-900 my-6">
        {pathname.replace(/-/g, " ").slice(14) + " Posts"}
      </div>
      <div className="flex items-start justify-between">
        <div className=" w-[60%]">
          <div className="w-full bg-white shadow-md rounded-lg px-4 pt-4">
            <PostCard />
          </div>
          <div className="w-full bg-white shadow-md rounded-lg px-4 pt-4">
            <PostCard />
          </div>
          <div className="w-full bg-white shadow-md rounded-lg px-4 pt-4">
            <PostCard />
          </div>
          <div className="w-full bg-white shadow-md rounded-lg px-4 pt-4">
            <PostCard />
          </div>
        </div>
        <div className=" w-[38%]">
          <div className=" text-xl text-justify aspect-square w-full flex justify-center items-end relative shadow-md rounded-lg">
            <div className=" bg-[#ffffffd8] rounded-lg p-4 select-none">
              {
                CategoryBarCardText[
                  pathname
                    .replace(/-/g, " ")
                    .slice(14)
                    .toLowerCase()
                    .replace(/ /g, "")
                ]
              }
            </div>
            <Image
              src="/CattegoryPageImages/FinanceInspirational.jpeg"
              fill
              alt=" "
              className="object-cover object-top rounded-lg -z-10"
            />
            <div className="-z-10 rounded-lg absolute top-0 left-0 bg-indigo-500 mix-blend-color h-full w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Category;
