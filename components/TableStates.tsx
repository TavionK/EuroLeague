export function LoadingState() {
  return <p>Loading...</p>;
}

export function ErrorState() {
  return <p>Something went wrong, please try later</p>;
}

export function EmptyState({
  message = "No players were found",
}: {
  message?: string;
}) {
  return <p>{message}</p>;
}
