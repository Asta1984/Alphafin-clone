import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HTMLAttributes } from "react";

type CardProps = React.ComponentProps<typeof Card>;

interface CardDemoProps extends Omit<CardProps, 'content'> {
  title: string;
  description: string;
  content?: React.ReactNode;
  footer?: React.ReactNode;
}

export function CardDemo({
  className,
  title,
  description,
  content,
  footer,
  ...props
}: CardDemoProps) {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      {content && (
        <CardContent className="grid gap-4">
          {content}
        </CardContent>
      )}
      {footer && (
        <CardFooter>
          {footer}
        </CardFooter>
      )}
    </Card>
  );
}
