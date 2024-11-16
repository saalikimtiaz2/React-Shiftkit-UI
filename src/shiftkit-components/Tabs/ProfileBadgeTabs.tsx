import React from "react";

interface TabOptionProps {
    label: string;
}

/**
 * A single tab option component for rendering a button with a label and an active state indicator.
 *
 * @param {string} label - The label of the tab option.
 * @param {boolean} isActive - Whether the tab option is active or not.
 * @returns {React.ReactElement} The rendered tab option component.
 */
const TabOption: React.FC<TabOptionProps> = ({ label }) => (
    <button
        type='button'
        className='flex items-center rounded-full border border-primary-100/20 bg-primary-100/10 px-4 py-2 text-sm font-medium text-primary-200'
        disabled
    >
        <span>{label}</span>
    </button>
);

interface TabGroupProps {
    title?: string;
    description?: string;
    options: string[];
}

/**
 * A component for rendering a tab group with a title, description, and a list of options.
 * Each option is rendered as a button, and the active option is highlighted.
 *
 * @param {string} [title] - The title of the tab group.
 * @param {string} [description] - The description of the tab group.
 * @param {string[]} options - The list of options.
 * @param {string} activeOption - The currently active option.
 */

const TabGroup: React.FC<TabGroupProps> = ({ title, description, options }) => (
    <div className='mb-2'>
        {title && <h4 className='mb-3 font-semibold text-gray-700'>{title}</h4>}
        <span className='pb-2'>{description}</span>
        <div className='mt-4 flex flex-wrap gap-2'>
            {options.map((option) => (
                <TabOption key={option} label={option} />
            ))}
        </div>
    </div>
);

export default TabGroup;
