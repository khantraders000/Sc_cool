export default function TeamMember({ name, role, experience, specialty, bio, initials }) {
  return (
    <div className="team-card tick-card p-7">
      <div className="w-20 h-20 rounded-full bg-bgElevated border border-cyan/30 flex items-center justify-center mb-5 overflow-hidden">
        {/* Placeholder avatar — replace with a real photo at /public/technicians/<name>.jpg
            and swap this SVG for an <img src="/technicians/<name>.jpg" alt={name} /> */}
        <span className="font-display text-xl text-cyan">{initials}</span>
      </div>
      <h3 className="font-display text-lg font-semibold">{name}</h3>
      <p className="text-sm text-copper mb-1">{role}</p>
      <p className="text-xs text-inkdim mb-4">{experience} · {specialty}</p>
      <p className="text-sm text-inkdim leading-relaxed">{bio}</p>
    </div>
  );
}
