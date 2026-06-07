import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-2xl w-full px-4 mx-auto">
      <h1 className="text-3xl font-bold">Uh oh 😬</h1>
      <p className="mt-2">The page you&apos;re looking for was not found. Please try another time!</p>
      <hr className="my-6 border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.1)]" />
      <div className="text-center my-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1 px-4 py-2 rounded-md bg-[rgba(143,143,143,0.1)] hover:bg-btn-hover-light dark:bg-accent dark:hover:bg-btn-hover-dark transition-colors"
        >
          Return to home
        </Link>
      </div>
    </div>
  );
}
