import Link from 'next/link';
import { useRouter } from 'next/router';

export const runtime = 'experimental-edge';

export default function Home() {
  const { query } = useRouter();

  return (
    <div>
      <h1>Post {query?.id}</h1>
      <p>
        {Array.from({ length: 20 }, (_, i) => i + 1)
          .map(() => query?.id)
          .join(' - ')}
      </p>
      <p>
        <Link href='/'>Home</Link>
      </p>
    </div>
  );
}
``;
