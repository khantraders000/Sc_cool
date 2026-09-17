


const regions = {
    "South Mumbai": [
      "Colaba",
      "Cuffe Parade",
      "Nariman Point",
      "Churchgate",
      "Fort",
      "Kala Ghoda",
      "Marine Lines",
      "Charni Road",
      "Girgaon",
      "Walkeshwar",
      "Malabar Hill",
      "Cumballa Hill",
      "Breach Candy",
      "Tardeo",
      "Byculla",
      "Mazgaon",
      "Parel",
      "Lower Parel",
      "Worli",
      "Prabhadevi",
      "Dadar",
      "Matunga",
      "Sion",
      "Wadala"
    ],
    "Western Suburbs": [
      "Bandra East",
      "Bandra West",
      "Khar",
      "Santacruz East",
      "Santacruz West",
      "Vile Parle East",
      "Vile Parle West",
      "Juhu",
      "Andheri East",
      "Andheri West",
      "Jogeshwari",
      "Goregaon East",
      "Goregaon West",
      "Malad East",
      "Malad West",
      "Kandivali East",
      "Kandivali West",
      "Borivali East",
      "Borivali West",
      "Dahisar"
    ],
    "Central Suburbs": [
      "Kurla",
      "Sakinaka",
      "Ghatkopar East",
      "Ghatkopar West",
      "Vidyavihar",
      "Vikhroli East",
      "Vikhroli West",
      "Kanjurmarg",
      "Bhandup East",
      "Bhandup West",
      "Mulund East",
      "Mulund West"
    ],
    "Harbour Suburbs": [
      "Chembur",
      "Govandi",
      "Mankhurd",
      "Trombay",
      "Anushakti Nagar"
    ],
    "Extended Suburbs & MMR": [
      "Mira Road",
      "Bhayandar",
      "Vasai",
      "Virar",
      "Thane",
      "Kalyan",
      "Dombivli",
      "Navi Mumbai",
      "Panvel"
    ]
  }

const areas = Object.values(regions).flat();

function Row({ hidden }) {
  return (
    <div className="flex items-center gap-10 pr-10" aria-hidden={hidden || undefined}>
      {areas.map((a) => (
        <span key={a} className="flex items-center gap-10">
          <span>{a}</span>
          <span className="text-cyan/40">/</span>
        </span>
      ))}
    </div>
  );
}

export default function ServiceAreaMarquee() {
  return (
    <section className="border-y border-cyan/10 bg-bgDeep py-4 overflow-hidden marquee-wrap">
      <div className="marquee-track text-inkdim text-sm tracking-wide">
        <Row />
        <Row hidden />
      </div>
    </section>
  );
}
