import { useTranslations } from "next-intl";

export const HeadingWithTranslations = ({
    className = "",
    type,
    name,
}: {
    className?: string;
    type: string;
    name?: string;
}) => {
    const t = useTranslations("Home.heading");
    return (
        <h3
            className={` ${className} text-lg font-medium leading-tight md:text-xl`}
        >
            {name ? `${t(type)} ${name}` : t(type)}
        </h3>
    );
};
