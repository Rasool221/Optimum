export default function Button({
  onClick,
  className,
  children,
}: {
  onClick: () => void;
  className?: string;
  children?: React.ReactNode;
}) {
  const baseClasses =
    'rounded-lg p-1 hover:bg-lightgray hover:shadow-md hover:shadow-inner text-white transition-all ease-in-out w-8 h-8 border border-slate-200 flex items-center justify-center';

  const classes = baseClasses + ' ' + className;
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
