import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import SheetPage from '../components/sheet-page';
export default function NotFound() {
 const en=useRouter().locale==='en';
 return <><Head><title>404 | Damián Ponce</title></Head><SheetPage title={en?'404 — Page not found':'404 — Página no encontrada'}><p>{en?'This address does not exist.':'Esta dirección no existe.'}</p><Link href="/">{en?'Return home':'Volver al inicio'}</Link></SheetPage></>;
}
