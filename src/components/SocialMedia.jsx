export function SocialMedia({ children, url }) {
  return (
    <a
      className="transition-all hover:scale-105"
      target="_blank"
      rel="noopener noreferrer"
      href={url}
    >
      {children}
    </a>
  );
}
