import { seodata } from '@/tempdata/seodata';
import Head from 'next/head';
import React from 'react';

// Define the structure of SEO data


interface MetaTagsProps {
    pageName: string;
}

export const MetaTags: React.FC<MetaTagsProps> = ({ pageName }) => {

    const pageKey = pageName.toUpperCase();
    const seoData = seodata[pageKey];

    if (!seoData) {
        console.error(`SEO data not found for page: ${pageName}`);
        return null;
    }


    return (
        <Head>
            <title>{seoData.metaTitle} </title>
            < meta name="description" content={seoData.metaDes} />
            <meta name="keywords" content={seoData.metaKeys} />
            <meta name="robots" content="index,follow" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
    );
};

