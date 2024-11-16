/* eslint-disable no-unused-vars */
"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const imageVariants = {
    animate: {
        y: [0, -10, 0],
        transition: {
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};
const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

export default function ErrorMessage({ statement }: { statement?: string }) {
    const t = useTranslations();

    return (
        <motion.div
            variants={containerVariants}
            initial='hidden'
            animate='visible'
        >
            <div className='font-poppins flex w-full flex-col items-center gap-3 py-10 pt-2'>
                <div className='flex flex-col items-center justify-center gap-3 py-5 text-center'>
                    <p className='text-2xl font-bold leading-normal text-darkTheme-300 md:text-4xl'>
                        {t("common.oops")}!
                    </p>
                    <motion.div variants={imageVariants} animate='animate'>
                        <Image
                            src='/assets/404.png'
                            alt='404'
                            width={369}
                            height={162}
                        />
                    </motion.div>

                    <motion.p
                        variants={textVariants}
                        whileHover={{ scale: 1.05 }}
                        className='text-center text-sm text-[#646A7C]'
                    >
                        {t("common.noData")} 🐕 <br />
                        {statement || t("common.doNotWorry")}
                    </motion.p>
                </div>
            </div>
        </motion.div>
    );
}
