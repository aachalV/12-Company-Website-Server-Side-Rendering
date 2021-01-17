import styles from "../styles/Surfboard.module.css";

export default function Surfboard({ data }) {
  console.log("data>>", data[0].navigationLinks);
  return <div>Checking</div>;
}

export async function getStaticProps() {
  const response = await fetch("http://localhost:5000/companyList/company");
  const companyData = await response.json();
  console.log("companyData>>", { ...companyData });
  return { props: { ...companyData } };
}
