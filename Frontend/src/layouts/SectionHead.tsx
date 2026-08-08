interface SectionHeadProps {
  label: string;
  title: string;
  emphasisWord?: string;
  emphasisPosition?: 'start' | 'end' | 'middle';
}

export default function SectionHead({ label, title, emphasisWord, emphasisPosition = 'end' }: SectionHeadProps) {
  return (
    <div className="flex flex-col mb-16">
      <span className="text-[10px] uppercase tracking-widest font-mono-tech text-white/40 mb-6">
        {label}
      </span>
      <h2 className="text-3xl md:text-5xl font-light tracking-tight text-[#f0f0f5]">
        {emphasisPosition === 'start' && emphasisWord && (
          <><span className="font-serif-italic text-accent">{emphasisWord}</span> {title}</>
        )}
        {emphasisPosition === 'middle' && emphasisWord && (
          <>{title.split(emphasisWord)[0]} <span className="font-serif-italic text-accent">{emphasisWord}</span> {title.split(emphasisWord)[1]}</>
        )}
        {emphasisPosition === 'end' && emphasisWord && (
          <>{title} <span className="font-serif-italic text-accent">{emphasisWord}</span></>
        )}
        {!emphasisWord && title}
      </h2>
    </div>
  );
}
