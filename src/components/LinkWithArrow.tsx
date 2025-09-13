interface LinkWithArrowProps {
  content: string;
  url: string;
}

export default function LinkWithArrow({ content, url }: LinkWithArrowProps) {
  return (
    <div>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    </div>
  );
}
