/* eslint-disable no-unused-vars */
"use client";

import React from "react";
import Pagination from "..";

interface PaginationWrapperProps {
    currentPage: number;
    totalPages: number;
    itemsPerPage: number;
    totalItems: number;
    onPageChange: (newPage: number) => void;
    onItemsPerPageChange: (newItemsPerPage: number) => void;
}

const PaginationWrapper: React.FC<PaginationWrapperProps> = ({
    currentPage,
    totalPages,
    itemsPerPage,
    totalItems,
    onPageChange,
    onItemsPerPageChange,
}) => {
    if (totalPages <= 1) {
        return null;
    }
    return (
        <div>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                itemsPerPage={itemsPerPage}
                totalItems={totalItems}
                onPageChange={(_newPage) => onPageChange(_newPage)}
                onItemsPerPageChange={(_newItemsPerPage) =>
                    onItemsPerPageChange(_newItemsPerPage)
                }
            />
        </div>
    );
};
export default PaginationWrapper;
