import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react"
import Link from "next/link"

function ConclusionAlert() {
	return (
		<Alert className="flex flex-col gap-2">
			<Terminal className="h-5 w-5" />
			<AlertTitle className="scroll-m-20 text-3xl font-semibold tracking-tight pt-2">
				Conclusion
			</AlertTitle>
			<AlertDescription className="text-lg">
				{
					"The future of software engineering is bright for those who embrace change, continue to learn, and focus on adding value. By cultivating passion, developing a problem-solving mindset, and continuously expanding your skills, you can secure your place in the industry and contribute to shaping a better world through technology. Remember, the most successful engineers combine technical expertise with creativity, adaptability, and a genuine love for their craft. As you navigate your career, strive to be an engineer, innovator, problem-solver, and lifelong learner. Your journey in software engineering is more than just a job—it's an opportunity to create, solve, and impact the world positively. Embrace the challenges, celebrate the victories, and never stop learning. The future is yours to shape."
				}
			</AlertDescription>
			<Link href="https://www.davidlbowman.com/navigating-complexity-and-change">
				{"You can also read my stupid blog article"}
			</Link>
		</Alert>
	)
}

export { ConclusionAlert }
