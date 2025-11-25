// src/app/not-found.tsx
export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center p-8">
      <h1 className="text-5xl font-bold text-gradient mb-4">404</h1>
      <h2 className="text-2xl text-accent-secondary mb-2">Page Not Found</h2>
      <p className="text-text-secondary mb-8">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <a
        href="/"
        className="btn-primary border px-6 py-2 rounded-lg text-background hover:shadow-lg transition"
      >
        Go Home
      </a>
    </main>
  );
}
