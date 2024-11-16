/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-nested-ternary */
"use client";
import URLconstants from "@/constants/urlConstants";
import { API } from "@/utils/API";
import { useQuery } from "@tanstack/react-query";
import debounce from "lodash/debounce";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

import DropdownMenu from "./components/DropdownMenu";
import SearchInput from "./components/SearchInput";
import SuggestionsDropdown from "./components/SuggestionsDropdown";

type SearchType = "breed" | "adopt" | "breeder" | "group" | "event";

interface HomeSearchComponentProps {
    type: SearchType;
    searchText?: string;
}

interface Suggestion {
    id: string;
    breedId?: string;
    name: string;
    image: string;
    slug?: string;
    userName?: string;
}

const HomeSearchComponent: React.FC<HomeSearchComponentProps> = ({
    type,
    searchText = "",
}) => {
    const [searchTerm, setSearchTerm] = useState<any>(searchText);
    const [debouncedSearchTerm, setDebouncedSearchTerm] =
        useState<string>(searchText);
    const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
    const locale = useLocale();
    const t = useTranslations();
    const router = useRouter();

    useEffect(() => {
        setSearchTerm(searchText);
        setDebouncedSearchTerm(searchText);
    }, [searchText]);

    useEffect(() => {
        const debouncedSearch = debounce(() => {
            setDebouncedSearchTerm(searchTerm);
            // Show suggestions when user starts typing again
            if (searchTerm.trim().length > 0) {
                setShowSuggestions(true);
            }
        }, 500);

        debouncedSearch();

        return () => {
            debouncedSearch.cancel();
        };
    }, [searchTerm]);

    const getApiEndpoint = (searchType: SearchType) => {
        switch (searchType) {
            case "breed":
                return "/breed/filterBreeds";
            case "adopt":
                return "/dog/filterShelterDogs";
            case "breeder":
                return "/breeders/filterBreeders";
            case "group":
                return "/groups/filterGroups";
            case "event":
                return "/events/filterEvents";
            default:
                return "/breed/filterBreeds";
        }
    };

    const { data: suggestions = [], isLoading } = useQuery({
        queryKey: ["suggestions", debouncedSearchTerm, type],
        queryFn: async (): Promise<Suggestion[]> => {
            if (debouncedSearchTerm.trim().length === 0) {
                return [];
            }
            const endpoint = getApiEndpoint(type);
            const params =
                type === "breeder"
                    ? { displayName: debouncedSearchTerm }
                    : { name: debouncedSearchTerm };
            const response = await API.get(endpoint, { params });
            return response.data?.data.map((item: any) => ({
                userName: type === "breeder" ? item.userName : undefined,
                slug: type === "breed" ? item.slug : undefined,
                id:
                    type === "breeder"
                        ? item.userId
                        : type === "breed"
                          ? item.breedId
                          : item.id,
                name: type === "breeder" ? item.displayName : item.name,
                image:
                    type === "breeder"
                        ? item.profilePic
                        : type === "breed"
                          ? item.coverImage
                          : item.gallery?.[0] || "",
            }));
        },
        enabled: debouncedSearchTerm.trim().length > 0,
    });

    function getButtonText(searchType: SearchType): string {
        switch (searchType) {
            case "breed":
                return t("tabs.breedButton");
            case "adopt":
                return t("tabs.shelters");
            case "breeder":
                return t("tabs.breeders");
            case "group":
                return t("tabs.groups");
            case "event":
                return t("tabs.events");
            default:
                return t("tabs.breedButton");
        }
    }

    const handleOnSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (searchTerm !== "") {
            router.push(
                `/${locale}/${URLconstants.SEARCH}?type=${type}&searchQuery=${searchTerm}`
            );
        }
        setShowSuggestions(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            setShowSuggestions(false);
        }
    };

    const handleSuggestionClick = (suggestion: Suggestion) => {
        setSearchTerm(suggestion.name);
        setShowSuggestions(false);

        if (type === "breed") {
            if (suggestion.slug === undefined || suggestion.slug === null) {
                console.error("Suggestion ID is undefined for breed type.");
                return;
            }
            router.push(
                `/${locale}/${URLconstants.BREEDPROFILE}/${suggestion.slug}/${URLconstants.PUPPIES}`
            );
        } else {
            switch (type) {
                case "adopt":
                    if (suggestion.id === undefined || suggestion.id === null) {
                        console.error(
                            "Suggestion ID is undefined for adopt type."
                        );
                        return;
                    }
                    router.push(
                        `/${locale}/${URLconstants.SHELTERDOGPROFILE}/${suggestion.id}`
                    );
                    break;
                case "breeder":
                    if (
                        suggestion.userName === undefined ||
                        suggestion.userName === null
                    ) {
                        console.error(
                            "Suggestion username is undefined for breeder type."
                        );
                        return;
                    }
                    router.push(
                        `/${locale}/${URLconstants.BREEDERPROFILE}/${suggestion.userName}`
                    );
                    break;
                default:
                    if (!URLconstants.SEARCH) {
                        console.error("SEARCH URL constant is undefined.");
                        return;
                    }
                    router.push(
                        `/${locale}/${URLconstants.SEARCH}?type=${type}&searchQuery=${encodeURIComponent(suggestion.name)}`
                    );
            }
        }
    };

    return (
        <div className='mt-4'>
            <form onSubmit={handleOnSubmit} className='relative'>
                <SearchInput
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() =>
                        setTimeout(() => setShowSuggestions(false), 200)
                    }
                    onKeyDown={handleKeyDown}
                    placeholder={t("forms.search")}
                />
                <button
                    type='submit'
                    aria-label='Search'
                    disabled={searchTerm === ""}
                    className='absolute right-4 top-1/2 hidden -translate-y-1/2 text-gray-400 hover:text-black md:flex'
                >
                    <IoSearchOutline size={24} />
                </button>

                <DropdownMenu type={type} getButtonText={getButtonText} />

                {showSuggestions && (
                    <SuggestionsDropdown
                        suggestions={suggestions}
                        isLoading={isLoading}
                        type={type}
                        searchTerm={debouncedSearchTerm}
                        onSuggestionClick={handleSuggestionClick}
                    />
                )}
            </form>
        </div>
    );
};

export default HomeSearchComponent;
