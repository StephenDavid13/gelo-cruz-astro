import { useSanityClient } from "@sanity/astro";
import type { PortableTextBlock } from "@portabletext/types";
import type { ImageAsset, Slug } from "@sanity/types";
import groq from "groq";

export async function getPosts(): Promise<Post[]> {
  return await useSanityClient().fetch(
    groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`
  );
}

export async function getDiscography(): Promise<Discography[]> {
  return await useSanityClient().fetch(
    groq`*[_type == "discography" && defined(slug.current)] | order(_createdAt desc)`
  );
}

export async function getVideos(): Promise<Video[]> {
  return await useSanityClient().fetch(
    groq`*[_type == "video" && defined(slug.current)] | order(_createdAt desc)`
  );
}

export async function getPost(slug: string): Promise<Post> {
  return await useSanityClient().fetch(
    groq`*[_type == "post" && slug.current == $slug][0]`,
    {
      slug,
    }
  );
}

export interface Post {
  _type: "post";
  _createdAt: string;
  title?: string;
  slug: Slug;
  excerpt?: string;
  mainImage?: ImageAsset;
  body: PortableTextBlock[];
}

export interface Discography {
  _type: "discography";
  _createdAt: string;
  title: string;
  slug: Slug;
  releaseDate?: string;
  cover?: ImageAsset;
  listenURL?: string;
  body: PortableTextBlock[];
}

export interface Video {
  _type: "video";
  _createdAt: string;
  title?: string;
  slug: Slug;
  videoID?: string;
}