import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

interface ContentCardProps {
	title: string
	description: string
	list: string[]
	assetTitle: string
	asset: string
	className?: string
}

function ContentCard({
	title,
	description,
	list,
	assetTitle,
	asset,
	className,
}: ContentCardProps) {
	return (
		<Card
			className={cn(
				"w-[350px] md:w-[400px] hover:shadow-lg transition-shadow duration-300 border-border flex flex-col bg-background",
				className,
			)}
		>
			<div className="flex-grow flex flex-col">
				<CardHeader className="space-y-1">
					<CardTitle className="text-2xl font-bold text-balance">
						{title}
					</CardTitle>
					<CardDescription className="text-sm text-muted-foreground">
						{description}
					</CardDescription>
				</CardHeader>
				<CardContent className="flex-grow overflow-auto">
					<ul className="space-y-2">
						{list.map((item) => (
							<li key={item} className="flex items-start">
								<span className="mr-2 text-secondary-foreground">•</span>
								<span>{item}</span>
							</li>
						))}
					</ul>
				</CardContent>
			</div>
			<CardFooter className="pt-4 border-t border-gray-400 dark:border-gray-700 mt-auto h-16 flex items-center">
				<Link
					href={asset}
					className="flex items-center transition-colors duration-200 w-full"
				>
					<span className="mr-2 flex-grow truncate">{assetTitle}</span>
					<ExternalLink size={16} className="flex-shrink-0" />
				</Link>
			</CardFooter>
		</Card>
	)
}

export { ContentCard }
