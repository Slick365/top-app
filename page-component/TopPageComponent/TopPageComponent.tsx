import style from './TopPageComponent.module.css';
import cn from 'classnames';
import { TopPageComponentProps } from './TopPageComponent.props';
import React from 'react';
import { Card, Htag, JobData, Tag } from '../../components';
import { TopLevelCategory } from '../../interfaces/top-page.interface';

export const TopPageComponent = ({
  page,
  products,
  firstCategory,
}: TopPageComponentProps): JSX.Element => {
  return (
    <div className={style.wrapper}>
      <div className={style.title}>
        <Htag tag="h1">{page.title}</Htag>
        {products && (
          <Tag color="gray" size="m">
            {products.length}
          </Tag>
        )}
        <span>Sort</span>
      </div>
      {products &&
        products.map((product) => <div key={product._id}>{product.title}</div>)}
      <div className={style.hhTitle}>
        <Htag tag="h2">Job Offer - {page.category}</Htag>
        {products && (
          <Tag color="red" size="m">
            indeed.com
          </Tag>
        )}
      </div>
      {firstCategory == TopLevelCategory.Courses && <JobData {...page.hh} />}
    </div>
  );
};
