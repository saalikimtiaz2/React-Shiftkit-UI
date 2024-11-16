import {
    Description,
    Dialog,
    DialogPanel,
    DialogTitle,
} from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { MdClose } from "react-icons/md";

type DialogBoxProps = {
    isOpen: boolean;
    closeDialogBox: () => void;
    children: React.ReactNode;
    title?: string;
    description?: string;
};

function Popup({
    isOpen,
    closeDialogBox,
    children,
    title = "",
    description = "",
}: DialogBoxProps) {
    return (
        <AnimatePresence>
            <Dialog
                open={isOpen}
                onClose={closeDialogBox}
                className='relative z-[999]'
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='fixed inset-0 bg-black/30'
                />
                <div className='fixed inset-0 flex w-screen items-center justify-center p-4'>
                    <DialogPanel
                        as={motion.div}
                        initial={{
                            opacity: 0,
                            scale: 0.95,
                            translateY: "-100%",
                        }}
                        animate={{ opacity: 1, scale: 1, translateY: 0 }}
                        exit={{ opacity: 0, scale: 0.95, translateY: "-100%" }}
                        className='scrollbar-hidden relative my-6 max-h-[90vh] w-full max-w-lg overflow-y-scroll rounded-xl border bg-white p-6 shadow-2xl md:max-w-2xl'
                    >
                        <button
                            name='closeDialog'
                            type='button'
                            onClick={closeDialogBox}
                            className='absolute right-6 top-6 text-gray-500 hover:text-black'
                        >
                            <MdClose size={22} />
                        </button>
                        {title && (
                            <DialogTitle className='text-2xl font-semibold'>
                                {title}
                            </DialogTitle>
                        )}
                        {description && (
                            <Description className='mb-4 text-gray-500'>
                                {description}
                            </Description>
                        )}
                        {children}
                    </DialogPanel>
                </div>
            </Dialog>
        </AnimatePresence>
    );
}

export default Popup;
