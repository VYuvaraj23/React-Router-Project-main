import { Link, useRouteError } from "react-router";

export default function ErrorPage() {
  const error = useRouteError(); // Get the error from the loader

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-red-600">
        Oops! Something went wrong.
      </h1>
      <p className="text-gray-700 mt-4 text-lg">
        {error?.message || "An unexpected error occurred."}
      </p>

      {error?.message === "Failed to fetch" ? (
        <p className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          {" "}
          Reload a Page <strong>ctrl + R </strong>or<strong> F5</strong>
        </p>
      ) : (
        <Link
          href="/"
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Go Back Home
        </Link>
      )}
    </div>
  );
}
