/* eslint-disable no-unused-vars */
import { Avatar } from "@/components/Avatar";
import { useTranslations } from "next-intl";
import React from "react";
import { TailSpin } from "react-loader-spinner";

interface Suggestion {
    id: string;
    breedId?: string;
    name: string;
    image: string;
}

interface SuggestionsDropdownProps {
    suggestions: Suggestion[];
    isLoading: boolean;
    type: "breed" | "adopt" | "breeder" | "group" | "event";
    searchTerm: string;
    onSuggestionClick: (suggestion: Suggestion) => void;
}

const SuggestionsDropdown: React.FC<SuggestionsDropdownProps> = ({
    suggestions,
    isLoading,
    type,
    searchTerm,
    onSuggestionClick,
}) => {
    const t = useTranslations();

    const getType = () => {
        let translatedType = "";
        switch (type) {
            case "breed":
                translatedType = t("common.breed");
                break;
            case "adopt":
                translatedType = t("common.adopt");
                break;

            case "breeder":
                translatedType = t("common.breeder");
                break;

            case "group":
                translatedType = t("common.group");
                break;

            case "event":
                translatedType = t("common.event");
                break;

            default:
                return "";
        }
        return translatedType.toLowerCase();
    };

    const renderSuggestionContent = () => {
        if (searchTerm.trim().length === 0) {
            return (
                <div className='flex flex-col items-center justify-center p-4'>
                    <svg
                        className='h-16 w-16 text-primary-100'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={1}
                            d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                        />
                    </svg>
                    <p className='mt-4 text-center text-gray-500'>
                        {t("search.placeholder", { type: getType() })}
                    </p>
                </div>
            );
        }

        if (isLoading) {
            return (
                <div className='flex justify-center p-4'>
                    <TailSpin color='blue' height={20} width={20} />
                </div>
            );
        }

        if (suggestions.length === 0) {
            return (
                <div className='flex flex-col items-center justify-center p-4'>
                    <svg
                        className='h-16 w-16 text-primary-100'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                    </svg>
                    <p className='mt-4 text-center text-gray-500'>
                        {t("search.noResult", { type: getType() })}
                    </p>
                </div>
            );
        }

        return suggestions.map((suggestion) => (
            <button
                key={suggestion.id}
                className='z-10 flex w-full cursor-pointer items-center rounded-lg p-2 hover:bg-gray-100'
                onMouseDown={() => onSuggestionClick(suggestion)}
                type='button'
            >
                <Avatar url={suggestion.image} isRounded size='lg' />
                <span className='ml-2 w-full text-left'>{suggestion.name}</span>
            </button>
        ));
    };

    return (
        <div className='absolute left-0 right-0 top-full z-[9999] mt-1 space-y-1 rounded-xl bg-white p-2 shadow-lg'>
            {renderSuggestionContent()}
        </div>
    );
};

export default SuggestionsDropdown;
