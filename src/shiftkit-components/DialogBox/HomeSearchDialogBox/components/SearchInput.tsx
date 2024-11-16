import React from "react";

interface SearchInputProps {
    /**
     * The current value of the search input.
     */
    searchTerm: string;
    /**
     * Function to update the search term.
     */
    // eslint-disable-next-line no-unused-vars
    setSearchTerm: (term?: string) => void;
    /**
     * Function to handle the focus event on the input.
     */
    onFocus: () => void;
    /**
     * Function to handle the blur event on the input.
     */
    onBlur: () => void;
    /**
     * Placeholder text for the input field.
     */
    placeholder: string;

    // eslint-disable-next-line no-unused-vars
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

/**
 * SearchInput Component
 *
 * Renders a search input field with handlers for change, focus, and blur events.
 *
 * @param {SearchInputProps} props - The props for the SearchInput component.
 * @returns {JSX.Element} The rendered SearchInput component.
 */
const SearchInput: React.FC<SearchInputProps> = ({
    searchTerm,
    setSearchTerm,
    onFocus,
    onBlur,
    placeholder,
    onKeyDown,
}) => {
    return (
        <input
            placeholder={placeholder}
            className='w-full bg-[#F7F7F7] px-4 py-3 text-base'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={onFocus}
            onBlur={onBlur}
            onKeyDown={onKeyDown}
        />
    );
};

export default SearchInput;
