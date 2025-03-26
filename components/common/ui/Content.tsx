export default function Content({ text }: { text: string }) {
  return (
    <>
      {text.split("\n").map((line, index) => (
        <p key={index} className="whitespace-pre-wrap break-words">
          {line}
        </p>
      ))}
    </>
  );
}
