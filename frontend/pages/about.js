import Layout from "../components/Layout";
import SEO from "../components/SEO";
import TeamMember from "../components/TeamMember";

const team = [
  {
    name: "Ashraf khan",
    role: "Founder & Lead Technician",
    experience: "14 years experience",
    specialty: "Split & VRF systems",
    initials: "AK",
    bio: "Started SC Cool Services in 2016 after a decade of factory HVAC work. Personally trains every technician who joins the team.",
  },
  {
    name: "walid Chaudary",
    role: "Senior Technician",
    experience: "7 years experience",
    specialty: "Gas charging & leak detection",
    initials: "WC",
    bio: "Specialises in refrigerant diagnostics — the technician customers ask for by name when cooling issues are hard to pin down.",
  },
];

export default function About() {
  return (
    <Layout>
      <SEO
        title="About Us | Sc Cool AC Services"
        description="Meet the certified technicians behind Sc Cool — background-verified, factory-trained, and serving Mumbai since 2016."
        path="/about"
      />

      <section className="relative pt-32 pb-20 px-5 md:px-8 blueprint-grid">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            The people behind the cooling
          </h1>
          <p className="text-inkdim text-lg leading-relaxed max-w-2xl mx-auto">
            Sc Cool started in 2016 with a single technician and a scooter full
            of tools. Ten years on, we’re a background-verified team serving
            homes and businesses across Prayagraj — but the promise hasn’t
            changed: show up on time, quote honestly, and fix it right the first
            time.
          </p>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="reveal-section max-w-xl mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
              Meet the team
            </h2>
            <p className="text-inkdim mt-4">
              Every technician is ID-verified, factory-trained on major AC
              brands, and insured while on the job.
            </p>
          </div>

          <div
            id="team-grid"
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {team.map((member) => (
              <TeamMember key={member.name} {...member} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 md:px-8 bg-bgDeep border-t border-cyan/10">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-8 text-center">
          <div>
            <div className="font-display text-3xl font-semibold text-cyan">
              2016
            </div>
            <div className="text-sm text-inkdim mt-1">Founded</div>
          </div>
          <div>
            <div className="font-display text-3xl font-semibold text-cyan">
              12,400+
            </div>
            <div className="text-sm text-inkdim mt-1">Jobs completed</div>
          </div>
          <div>
            <div className="font-display text-3xl font-semibold text-cyan">
              6
            </div>
            <div className="text-sm text-inkdim mt-1">
              Full-time technicians
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
