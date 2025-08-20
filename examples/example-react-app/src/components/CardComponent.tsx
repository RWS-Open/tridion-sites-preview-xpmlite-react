import type { IComponentProps } from "@/types"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

interface CardComponentProps {
    componentData: IComponentProps
}
const CardComponent = ({ componentData }: CardComponentProps) => {
    return (
        <Card className="w-full h-auto shadow-lg">
            <CardHeader>
                <CardTitle className="mt-2">{componentData?.headline}</CardTitle>
                <CardDescription>{componentData?.articleBody[0]?.subheading}</CardDescription>
            </CardHeader>
            <CardContent dangerouslySetInnerHTML={{ __html: componentData?.articleBody[0]?.content?.html as string }} />
        </Card>
    )
}

export default CardComponent