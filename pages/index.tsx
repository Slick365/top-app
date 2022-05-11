import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Button, Htag, Paragraph as P, Rating, Tag } from '../components';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <>
      <Htag tag="h1">Test</Htag>
      <Button appearance="primary" arrow="down">
        Button
      </Button>
      <Button appearance="ghost">Button</Button>
      <P size="l">Big</P>
      <P size="m">Middle</P>
      <P size="s">Small</P>
      <Tag size="l" color="red">
        Small tag
      </Tag>
      <Rating rating={4} isEditable />
    </>
  );
};

export default Home;
