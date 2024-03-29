import { GetStaticProps } from "next";
import Link from "next/link";

import { User } from "../../interfaces";
import { sampleUserData } from "../../utils/sample-data";
import Layout from "../../components/Layout";
import List from "../../components/List";
import Header from "../../components/Header";

type Props = {
  items: User[];
};

const WithStaticProps = ({ items }: Props) => (
  <>
    <div className="container-fluid">
      <div className="container">
        <Header />
      </div>
      <div className="container">
        <h1>banner cambo box</h1>
      </div>
      <div className="container">
        <div>body</div>
      </div>
      <div className="container">
        <footer>Footer</footer>
      </div>
    </div>
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: User[] = sampleUserData;
  return { props: { items } };
};

export default WithStaticProps;
