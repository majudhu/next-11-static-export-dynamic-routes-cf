import Link from 'next/link';

export const runtime = 'edge';

export default function Home() {
  return (
    <div>
      <p>
        <Link href='/post/one'>Post one</Link>
      </p>
      <p>
        <Link href='/post/two'>Post two</Link>
      </p>
      <p>
        <Link href='/post/three'>Post three</Link>
      </p>
      <p>
        <Link href='/post/four'>Post 4four</Link>
      </p>
    </div>
  );
}
``;
