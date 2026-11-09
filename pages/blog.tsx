import BlogFontPreview from '../components/blog-font-preview';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import SheetPage from '../components/sheet-page';
import { getAllPosts } from '../lib/api';
export default function Blog({ posts }) {
 const {locale}=useRouter();
 return <><Head><title>Blog | Damián Ponce</title></Head><SheetPage title="Blog"><BlogFontPreview>
 {posts.map(post=><article key={post.slug}><p><time dateTime={post.date}>{post.date.slice(0,10)}</time></p><h2><Link href={'/posts/'+post.slug}>{post.title}</Link></h2><p>{post.subtitle}</p></article>)}
 {!posts.length && <p>{locale==='en'?'No articles yet.':'Todavía no hay artículos.'}</p>}
 </BlogFontPreview></SheetPage></>;
}
export function getStaticProps() {
 return {props:{posts:getAllPosts(['slug','title','subtitle','date'])}};
}
