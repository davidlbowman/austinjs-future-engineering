import { ConclusionAlert } from "@/components/ConclusionAlert"
import { ContentCard } from "@/components/ContentCard"
import { WageComparistonChart } from "@/components/WageComparistonChart"
import { TwoColumnContent } from "@/components/layouts/TwoColumnContent"
import Link from "next/link"

export default function Home() {
	return (
		<main>
			<h1>{"Navigating Complexity & Change"}</h1>
			<h2>{"The Evolving Landscape of Software Engineering"}</h2>
			<TwoColumnContent className="items-center">
				<>
					<h3>{"Historical Perspective (1960s to Present)"}</h3>
					<ul>
						<li>
							{
								"From specialized roles (algorithmic engineers, UI specialists, backend developers) to full-stack expectations"
							}
						</li>
						<li>{"Evolution of programming languages and paradigms"}</li>
						<li>{"Increasing importance of cybersecurity and data privacy"}</li>
					</ul>
					<h3>{"Current Trends"}</h3>
					<ul>
						<li>
							{
								"Job market fluctuations tied to economic factors (e.g., interest rates)"
							}
						</li>
						<ul>
							<li>{"Engineers in financially unstable companies"}</li>
							<li>{"Those who haven't kept their skills current"}</li>
						</ul>
						<li>{"Layoffs primarily affecting:"}</li>
						<li>{"High demand persists for skilled, adaptable engineers"}</li>
					</ul>
				</>
				<WageComparistonChart className="w-4/5" />
			</TwoColumnContent>
			<section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 p-4">
				<div className="col-span-full">
					<h2 className="font-bold mb-4">{"Navigating the Future of SWE"}</h2>
				</div>
				<ContentCard
					className="h-full"
					title="Embrace Continuous Learning"
					description="Never stop learning"
					list={[
						"Technology evolves rapidly; your skills must too",
						"Dedicate time to explore new languages, frameworks, and methodologies",
						"Approach: Start with official documentation, experiment hands-on",
					]}
					asset="https://www.amazon.com/Elements-Computing-Systems-Building-Principles/dp/0262640686/ref=ed_oe_p"
					assetTitle="The Elements of Computing Systems: Building a Modern Computer from First Principles by Noam Nisan and Shimon Schocken"
				/>
				<ContentCard
					className="h-full"
					title="Develop a Problem-Solving Mindset"
					description="Think critically, solve creatively"
					list={[
						"Focus on foundational engineering skills",
						"Break complex issues into manageable parts",
						"Cultivate creativity in finding solutions",
					]}
					asset="https://www.amazon.com/Symbolic-Logic-Game-Dover-Recreational/dp/0486204928/ref=sr_1_4?crid=9W0HTT3MDSIR&dib=eyJ2IjoiMSJ9.6fUpgMD2Dvix2OOUKs37uVEX8LsGOrpE8TxjKR7g0EYLRAvTBUf1QxzgyTWA0WZJixycrBuY6iKY-EbwcULoNJP5Kch_TY2s1ZadBU61tqm7idlpImrHwWVovl0Pfvy5KfOm0UpNMGgp6wwTxkkiWx4rNxX7DE3QXX80SyVol2JHRGdmDOygZzeStymlZ3tgaAJB6TzN5WwjM8M3TW2dSWAr9Gjyu4uDuIh0GPUPABR2Zrp_KgTim2znc2x6Y3TE5eSefv5XxFNIIQ5QIhdtvd3qN8d8nsFc8N-MLYq8OzQ.RzJmYWb47qDHEfVka9GFlrY0sZXhegTtWXEt6b5TPHk&dib_tag=se&keywords=Symbolic+Logic&qid=1721165335&s=books&sprefix=symbolic+logi%2Cstripbooks%2C95&sr=1-4"
					assetTitle="Symbolic Logic and the Game of Logic by Lewis Carroll"
				/>
				<ContentCard
					className="h-full"
					title="Find Your Passion"
					description="Align interests with career"
					list={[
						"Identify where your interests intersect with market demands",
						"Pursue projects and roles that excite you",
						"Passion fuels perseverance in challenging times",
					]}
					asset="https://www.amazon.com/Unlimited-Power-Science-Personal-Achievement/dp/0684845776/ref=tmm_pap_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.6v71lNmq4xkgO_gevy7-r5xr2u0Enwq_i4pd9XHbggcysc8FAlfomIFtwHoXQTVel6L7r0imc1DCoJkYdRsXyfhqCAatqt2IMkiJVosUgTLynxbz6qUOBve2N1eZpC6IGbHa9-E0nmFmzMNmUA8OajfmqTBHqdBsHHwQgCS8Ao9YUnsFjQTDL2_0iT6hkdYLjeyJpVc_EaB_ANoWWOMn-mA2dadY77VPZbpMSGuC1JA._aQ6MLcQo_fMg0AKPaK7vr_Ml7eWDcKPsNgwdDn8x-c&qid=1721165376&sr=1-1"
					assetTitle="Unlimited Power : The New Science Of Personal Achievement by Tony Robbins"
				/>
				<ContentCard
					className="h-full"
					title="Adapt to Blurred Roles"
					description="Embrace versatility in development"
					list={[
						"Understand both frontend and backend concepts",
						"Embrace the full-stack mentality, even if you specialize",
						"Recognize the value of understanding the entire development process",
					]}
					asset="https://www.amazon.com/How-Fail-Almost-Everything-Still/dp/1591847745/ref=sr_1_1?crid=20TEGJI838XID&dib=eyJ2IjoiMSJ9.Q9dVZWXKzqS6sT83hIBzJQ.GZB48q6M-9rMkYWncD_y4k_X5e1-rWAxcoSX5ehUexA&dib_tag=se&keywords=how+to+lose+everything+and+win+bigly&qid=1721166080&s=books&sprefix=how+to+lose+everythign+and+win+bigly%2Cstripbooks%2C97&sr=1-1"
					assetTitle="How to Fail at Almost Everything and Still Win Big"
				/>
				<ContentCard
					className="h-full"
					title='Cultivate Essential "Soft" Skills'
					description="Develop interpersonal abilities"
					list={[
						"Enhance communication: Practice active listening and clear writing",
						"Strengthen organizational skills: Master project management techniques",
						"Build emotional intelligence: Develop empathy and conflict resolution abilities",
						"Hone leadership qualities: Take initiative and mentor others",
						"Embrace adaptability: Be open to change and resilient in the face of challenges",
					]}
					asset="https://www.amazon.com/How-Win-Friends-Influence-People/dp/0671027034"
					assetTitle="How to Win Friends & Influence People"
				/>
				<ContentCard
					className="h-full"
					title="Practical Advice for Growth"
					description="Actionable steps for improvement"
					list={[
						"Set aside dedicated learning time each week",
						"Start with official documentation and work through examples",
						"Build small projects to apply new skills",
						"Participate in coding challenges and hackathons",
						"Attend conferences and meetups (virtual or in-person)",
						"Follow thought leaders and stay updated on industry trends",
					]}
					asset="https://www.amazon.com/Habits-Highly-Effective-People-Powerful-ebook/dp/B07WF972WK/ref=sr_1_1?crid=32BKK6OI13KCJ&dib=eyJ2IjoiMSJ9.3MC1NT6pihWUeydbil65n0wq6fT0ek_kh9qK-IfJygEC3piQ-w5KgVKSo7a7HetQ2flMAXkiZFZGOf-8pFXqUH7qVUxfFmWTh2bpyz4zP_3ZTVzwLdQC01cfhy-xXol63Dj7MXdwGDSH42Nd12ifVRuTYOktJulRmyCqgcM_0_fTC5icLgXcdz_9LDWDGrgO7M_tZ-9TzsKTzuAQeGMvMfZGkCEsx3ntw4w0QHQeu-Q.eul9nlEv6xmJ4KifgU1Xb67UaQcFvb0nMKNnfuOYYdY&dib_tag=se&keywords=7+habits+of+highly+effective+people&qid=1721165483&s=digital-text&sprefix=habits+of+highly+effective+%2Cdigital-text%2C97&sr=1-1"
					assetTitle="The 7 Habits of Highly Effective People by Stephen R. Covey"
				/>
			</section>
			<ConclusionAlert />
		</main>
	)
}
