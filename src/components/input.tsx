export default function Input({
  type,
  placeholder,
  name,
  className,
}: {
  type: string;
  placeholder?: string;
  name?: string;
  className: string;
}) {
  return (
    <>
      <input
        className={className}
        type={type}
        placeholder={placeholder}
        name={name}
      />
    </>
  );
}
