
//@ts-ignore
import { z, defineCollection } from 'astro:content';
import {format} from "date-fns";

const articlesCollection = defineCollection({
   schema:z.object({
    author:z.string(),
    category:z.string(),
    date: z.date(),
    featured:z.boolean().default(false),
    ogimage:z.string(),
    video:z.string().optional().nullable(),
    title:z.string(),
    metatitle:z.string(),
    excerpt:z.string()
   })
});

export const collections = {
    'articles': articlesCollection,
    };