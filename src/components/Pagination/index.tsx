/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import { useTranslations } from "next-intl";
import React from "react";
import { PiCaretLeft, PiCaretRight } from "react-icons/pi";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    itemsPerPage: number;
    totalItems: number;
    onPageChange: (page: number) => void;
    onItemsPerPageChange: (itemsPerPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    itemsPerPage,
    totalItems,
    onPageChange,
    onItemsPerPageChange,
}) => {
    const t = useTranslations("common");

    const handlePrevious = () => {
        if (currentPage > 0) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages - 1) {
            onPageChange(currentPage + 1);
        }
    };

    const handlePageClick = (page: number) => {
        onPageChange(page);
    };

    const handleItemsPerPageChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        onItemsPerPageChange(parseInt(event.target.value, 10));
    };

    const startItem = currentPage * itemsPerPage + 1;
    const endItem = Math.min((currentPage + 1) * itemsPerPage, totalItems);

    const renderPageNumbers = () => {
        const pages = [];
        const maxPagesToShow = 5;
        const middleRange = Math.floor(maxPagesToShow / 2);

        if (totalPages <= maxPagesToShow) {
            // If total pages is less than or equal to 5, show all pages
            for (let i = 0; i < totalPages; i++) {
                pages.push(renderPageButton(i));
            }
        } else {
            // Always show first and last page buttons
            pages.push(renderPageButton(0));

            // If current page is in the first few pages
            if (currentPage <= middleRange) {
                for (let i = 1; i <= maxPagesToShow - 2; i++) {
                    pages.push(renderPageButton(i));
                }
                pages.push(<span key='ellipsis-end'>...</span>);
            }
            // If current page is in the middle pages
            else if (
                currentPage > middleRange &&
                currentPage < totalPages - middleRange - 1
            ) {
                pages.push(<span key='ellipsis-start'>. . .</span>);
                for (
                    let i = currentPage - middleRange;
                    i <= currentPage + middleRange - 1;
                    i++
                ) {
                    pages.push(renderPageButton(i));
                }
                pages.push(<span key='ellipsis-end'>. . .</span>);
            }
            // If current page is near the last few pages
            else {
                pages.push(<span key='ellipsis-start'>. . .</span>);
                for (
                    let i = totalPages - (maxPagesToShow - 1);
                    i < totalPages - 1;
                    i++
                ) {
                    pages.push(renderPageButton(i));
                }
            }

            // Always show the last page
            pages.push(renderPageButton(totalPages - 1));
        }
        return pages;
    };

    const renderPageButton = (page: number) => {
        return (
            <button
                key={page}
                type='button'
                onClick={() => handlePageClick(page)}
                className={`flex h-9 w-9 items-center justify-center rounded border ${
                    page === currentPage
                        ? "scale-[1.02] border-primary-100 bg-primary-100 text-white shadow"
                        : "border-gray-300 bg-white text-gray-500"
                } text-sm transition-all duration-300 ease-in-out hover:bg-primary-300 hover:text-white`}
            >
                {page + 1}
            </button>
        );
    };

    return (
        <div className='flex items-center justify-between pt-8'>
            <div className='text-gray-500'>
                <p className='mr-2 flex items-center gap-2 text-sm'>
                    {t("showing")} {startItem} - {endItem} {t("of")}{" "}
                    {totalItems}
                </p>
            </div>
            <div className='mb-2 flex items-center justify-center gap-1'>
                <button
                    type='button'
                    onClick={handlePrevious}
                    disabled={currentPage === 0}
                    className='flex h-9 items-center justify-center rounded-lg border border-gray-300 bg-white px-2 transition-all duration-300 ease-in-out hover:bg-primary-200 hover:text-white disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-gray-200 disabled:hover:text-black'
                >
                    <PiCaretLeft />{" "}
                    <span className='hidden md:inline-block'>Prev</span>
                </button>
                {/* {renderPageNumbers()} */}
                <button
                    type='button'
                    onClick={handleNext}
                    disabled={currentPage === totalPages - 1}
                    className='flex h-9 items-center justify-center rounded-lg border border-gray-300 bg-white px-2 transition-all duration-300 ease-in-out hover:bg-primary-200 hover:text-white disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-gray-200 disabled:hover:text-black'
                >
                    <span className='hidden md:inline-block'>Next</span>{" "}
                    <PiCaretRight />
                </button>
            </div>
        </div>
    );
};

export default Pagination;
