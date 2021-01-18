import styles from "../styles/Surfboard.module.css";
import Navigation from "../components/navigation/Navigation";
import Header from "../components/header/Header";
import Section from "../components/section/Section";

export default function Surfboard({ data }) {
  return (
    <div>
      <Navigation styles={styles} navigationLinks={data[0].navigationLinks} />
      <Header styles={styles} header={data[0].header} />
      <Section styles={styles} section={data[0].section} />
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("http://localhost:5000/companyList/company");
  const companyData = await response.json();
  return { props: { ...companyData } };
}
