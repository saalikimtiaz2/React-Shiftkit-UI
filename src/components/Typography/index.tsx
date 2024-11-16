import React from "react";

export const Title = ({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <h1
            className={` ${className} mb-4 text-3xl font-bold leading-tight md:text-4xl`}
        >
            {children}
        </h1>
    );
};
export const LeadText = ({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) => <p className={` ${className} text-md mb-4 md:text-lg`}>{children}</p>;

export const FooterHeading = ({
    children,
    isFooter = false,
}: {
    children: React.ReactNode;
    isFooter?: boolean;
}) => (
    <h5
        className={`mb-3 text-lg font-semibold md:font-normal ${
            isFooter ? "text-white md:text-white" : "text-black md:text-black"
        }`}
    >
        {children}
    </h5>
);

export const H1 = ({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <h1
            className={` ${className} text-xl font-semibold leading-tight md:text-2xl`}
        >
            {children}
        </h1>
    );
};

export const H2 = ({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <h2
            className={` ${className} text-xl font-semibold leading-tight md:text-2xl`}
        >
            {children}
        </h2>
    );
};

export const H3 = ({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <h3
            className={` ${className} text-lg font-medium leading-tight md:text-xl`}
        >
            {children}
        </h3>
    );
};

export const H4 = ({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <h4
            className={` ${className} text-lg font-medium leading-tight md:text-xl`}
        >
            {children}
        </h4>
    );
};
export const H5 = ({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <h5 className={` ${className} font-semibold leading-tight md:text-lg`}>
            {children}
        </h5>
    );
};

export const H6 = ({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <h6 className={` ${className} text-base font-semibold leading-tight`}>
            {children}
        </h6>
    );
};
