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
				"w-[400px] hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800 border-2 border-gray-400 flex flex-col",
				className,
			)}
		>
			<div className="flex-grow flex flex-col">
				<CardHeader className="space-y-1">
					<CardTitle className="text-2xl font-bold text-gray-800 dark:text-white">
						{title}
					</CardTitle>
					<CardDescription className="text-sm text-gray-500 dark:text-gray-400">
						{description}
					</CardDescription>
				</CardHeader>
				<CardContent className="flex-grow overflow-auto">
					<ul className="space-y-2">
						{list.map((item) => (
							<li key={item} className="flex items-start">
								<span className="mr-2 text-green-500">•</span>
								<span className="text-gray-700 dark:text-gray-300">{item}</span>
							</li>
						))}
					</ul>
				</CardContent>
			</div>
			<CardFooter className="pt-4 border-t border-gray-200 dark:border-gray-700 mt-auto h-16 flex items-center">
				<Link
					href={asset}
					className="flex items-center hover:text-blue-800 transition-colors duration-200 w-full"
				>
					<span className="mr-2 flex-grow truncate">{assetTitle}</span>
					<ExternalLink size={16} className="flex-shrink-0" />
				</Link>
			</CardFooter>
		</Card>
	)
}

export { ContentCard }
