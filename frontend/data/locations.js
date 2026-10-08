export const locations = [
  // South Mumbai
  ["colaba","Colaba","South Mumbai"],["cuffe-parade","Cuffe Parade","South Mumbai"],["nariman-point","Nariman Point","South Mumbai"],["churchgate","Churchgate","South Mumbai"],["fort","Fort","South Mumbai"],["kala-ghoda","Kala Ghoda","South Mumbai"],["marine-lines","Marine Lines","South Mumbai"],["charni-road","Charni Road","South Mumbai"],["girgaon","Girgaon","South Mumbai"],["walkeshwar","Walkeshwar","South Mumbai"],["malabar-hill","Malabar Hill","South Mumbai"],["cumballa-hill","Cumballa Hill","South Mumbai"],["breach-candy","Breach Candy","South Mumbai"],["tardeo","Tardeo","South Mumbai"],["byculla","Byculla","South Mumbai"],["mazgaon","Mazgaon","South Mumbai"],["parel","Parel","South Mumbai"],["lower-parel","Lower Parel","South Mumbai"],["worli","Worli","South Mumbai"],["prabhadevi","Prabhadevi","South Mumbai"],["dadar","Dadar","South Mumbai"],["matunga","Matunga","South Mumbai"],["sion","Sion","South Mumbai"],["wadala","Wadala","South Mumbai"],
  // Western Suburbs
  ["bandra","Bandra","Western Suburbs"],["khar","Khar","Western Suburbs"],["santacruz","Santacruz","Western Suburbs"],["vile-parle","Vile Parle","Western Suburbs"],["juhu","Juhu","Western Suburbs"],["andheri","Andheri","Western Suburbs"],["jogeshwari","Jogeshwari","Western Suburbs"],["goregaon","Goregaon","Western Suburbs"],["malad","Malad","Western Suburbs"],["kandivali","Kandivali","Western Suburbs"],["borivali","Borivali","Western Suburbs"],["dahisar","Dahisar","Western Suburbs"],
  // Central Suburbs
  ["kurla","Kurla","Central Suburbs"],["sakinaka","Sakinaka","Central Suburbs"],["ghatkopar","Ghatkopar","Central Suburbs"],["vidyavihar","Vidyavihar","Central Suburbs"],["vikhroli","Vikhroli","Central Suburbs"],["kanjurmarg","Kanjurmarg","Central Suburbs"],["bhandup","Bhandup","Central Suburbs"],["mulund","Mulund","Central Suburbs"],
  // Harbour Suburbs
  ["chembur","Chembur","Harbour Suburbs"],["govandi","Govandi","Harbour Suburbs"],["mankhurd","Mankhurd","Harbour Suburbs"],["trombay","Trombay","Harbour Suburbs"],["anushakti-nagar","Anushakti Nagar","Harbour Suburbs"],
  // Extended Suburbs & MMR
  ["mira-road","Mira Road","Extended Suburbs & MMR"],["bhayandar","Bhayandar","Extended Suburbs & MMR"],["vasai","Vasai","Extended Suburbs & MMR"],["virar","Virar","Extended Suburbs & MMR"],["thane","Thane","Extended Suburbs & MMR"],["kalyan","Kalyan","Extended Suburbs & MMR"],["dombivli","Dombivli","Extended Suburbs & MMR"],["navi-mumbai","Navi Mumbai","Extended Suburbs & MMR"],["panvel","Panvel","Extended Suburbs & MMR"],
].map(([slug, name, region]) => ({ slug, name, region }));

export function getLocation(slug) {
  return locations.find((location) => location.slug === slug);
}
