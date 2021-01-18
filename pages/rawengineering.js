import styles from "../styles/Raw.module.css";
import Navigation from "../components/navigation/Navigation";
import Header from "../components/header/Header";
import Section from "../components/section/Section";
import Footer from "../components/footer/Footer";

export default function Surfboard({ data }) {
  return (
    <div>
      <Navigation styles={styles} navigationLinks={data[0].navigationLinks} />
      <Header styles={styles} header={data[0].header} />
      <Section styles={styles} section={data[0].section} />
      <Footer styles={styles} />
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://backend-company-ssr-12.herokuapp.com/companyList/company/raw"
  );
  const companyData = await response.json();
  return { props: { ...companyData } };
}
