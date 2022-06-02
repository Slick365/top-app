import axios from 'axios';
import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Button, Htag, Paragraph as P, Rating, Tag } from '../components';
import { MenuItem } from '../interfaces/menu.interface';
import { withLayout } from '../layout/Layout';
import styles from '../styles/Home.module.css';

function Search() {
  return <>Search</>;
}

export default withLayout(Search);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    {
      firstCategory,
    }
  );
  return {
    props: { menu, firstCategory },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
