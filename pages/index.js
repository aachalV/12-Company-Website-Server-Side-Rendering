import styles from "../styles/Surfboard.module.css";
import Navigation from "../components/navigation/Navigation";

export default function Surfboard({ data }) {
  return (
    <div>
      <Navigation navigationLinks={data[0].navigationLinks} />
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("http://localhost:5000/companyList/company");
  const companyData = await response.json();
  return { props: { ...companyData } };
}
