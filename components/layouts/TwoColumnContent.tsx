import { cn } from "@/lib/utils"
import type { ReactElement } from "react"

interface TwoColumnContentProps {
	children: [ReactElement, ReactElement]
	className?: string
	firstColumnClassName?: string
	secondColumnClassName?: string
}

function TwoColumnContent({
	children,
	className,
	firstColumnClassName,
	secondColumnClassName,
}: TwoColumnContentProps) {
	const [leftColumn, rightColumn] = children

	return (
		<section
			className={cn(
				"grid lg:grid-cols-2 h-full lg:justify-between text-start",
				className,
			)}
		>
			<div
				className={cn(
					"left-column flex flex-col lg:items-start  gap-4",
					firstColumnClassName,
				)}
			>
				{leftColumn}
			</div>
			<div
				className={cn(
					"right-column flex flex-col lg:items-start  gap-4",
					secondColumnClassName,
				)}
			>
				{rightColumn}
			</div>
		</section>
	)
}

export { TwoColumnContent }
