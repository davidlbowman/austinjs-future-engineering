"use client"

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import {
	type ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

const chartData = [
	{ percentile: "10th", national: 30000, tech: 50000 },
	{ percentile: "25th", national: 35000, tech: 70000 },
	{ percentile: "50th", national: 45000, tech: 105000 },
	{ percentile: "75th", national: 70000, tech: 150000 },
	{ percentile: "90th", national: 115000, tech: 185000 },
]

const chartConfig = {
	national: {
		label: "National Wage Percentiles",
		color: "hsl(var(--primary))",
	},
	tech: {
		label: "Tech Wage Percentiles",
		color: "hsl(var(--text-secondary-foreground))",
	},
} satisfies ChartConfig

interface WageComparistonChartProps {
	className?: string
}

function WageComparistonChart({ className }: WageComparistonChartProps) {
	return (
		<Card className={cn("bg-background", className)}>
			<CardHeader>
				<CardTitle>Annual Wage Comparison Across Occupations</CardTitle>
				<CardDescription>National vs Tech Wage Percentiles</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig}>
					<BarChart accessibilityLayer data={chartData}>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="percentile"
							tickLine={false}
							tickMargin={10}
							axisLine={false}
						/>
						<YAxis
							tickFormatter={(value) => `$${value / 1000}k`}
							tickLine={false}
							axisLine={false}
						/>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent indicator="dashed" />}
						/>
						<Bar dataKey="national" fill="var(--color-national)" radius={4} />
						<Bar dataKey="tech" fill="var(--color-tech)" radius={4} />
					</BarChart>
				</ChartContainer>
			</CardContent>
			<CardFooter className="flex-col items-start gap-2 text-sm">
				<div className="flex gap-2 font-medium leading-none">
					{
						"Tech wages are significantly higher across all. The 50th percentile (median) tech wage is 130% higher than the national median"
					}
				</div>
				<Link
					href="https://comptiacdn.azureedge.net/webcontent/docs/default-source/research-reports/comptia-state-of-the-tech-workforce-2024.pdf?sfvrsn=a8aa5246_2"
					className="leading-none text-muted-foreground text-sm"
				>
					{
						'CompTIA. "CompTIA State of the Tech Workforce 2024." CompTIA, 2024, comptiacdn.azureedge.net/webcontent/docs/default-source/research-reports/comptia-state-of-the-tech-workforce-2024.pdf?sfvrsn=a8aa5246_2. Accessed 16 Jul. 2024.'
					}
				</Link>
			</CardFooter>
		</Card>
	)
}

export { WageComparistonChart }
