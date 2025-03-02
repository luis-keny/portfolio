interface BaseTagProps {
  children: React.ReactNode;
  className?: string;
}

export default function BaseTag({ children, className }: BaseTagProps) {
  return (
    <div className={`inline-flex items-center gap-2 rounded-full px-3 py-[2px] text-sm border ${className}`}>
      {children}
    </div>
  );
}