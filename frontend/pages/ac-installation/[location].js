
import ACInstallationPage from "../../components/ACInstallationPage";
import { locations } from "../../data/locations";

export async function getStaticPaths() {
  return {
    paths: locations.map(({ slug }) => ({
      params: { location: slug },
    })),
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const location = locations.find(
    (item) => item.slug === params.location
  );

  if (!location) return { notFound: true };

  return {
    props: { location },
    revalidate: 86400,
  };
}

export default function Page({ location }) {
  return <ACInstallationPage location={location} />;
}
