interface ServiceCardProps {
  index: number;
  title: string;
  description?: string;
  items?: string[];
}

export default function ServiceCard({ index, title, description, items }: ServiceCardProps) {
  return (
    <div className="border-t-2 border-neutral-800 pt-6 pb-8 group hover:border-[#FF4A00] transition-colors cursor-default">
      <div className="flex items-baseline gap-4">
        <span className="text-[#FF4A00] font-black text-xl">
          {String(index).padStart(2, '0')}
        </span>
        <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-[0.95] group-hover:text-[#FF4A00] transition-colors">
          {title}
        </h3>
      </div>

      {description && (
        <p className="text-neutral-400 font-medium mt-3 max-w-lg">{description}</p>
      )}

      {items && items.length > 0 && (
        <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-2 text-neutral-400 font-medium">
              <span className="size-1.5 rounded-full bg-[#FF4A00] shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
