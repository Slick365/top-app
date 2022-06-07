import { JobDataProps } from './JobData.props';
import style from './JobData.module.css';
import cn from 'classnames';
import React from 'react';
import { Card } from '../Cart/Card';
import RateIcon from './rate.svg';

export const JobData = ({
  count,
  juniorSalary,
  middleSalary,
  seniorSalary,
}: JobDataProps): JSX.Element => {
  return (
    <div className={style.job}>
      <Card className={style.count}>
        <div className={style.title}>Total vacancies</div>
        <div className={style.countValue}>{count}</div>
      </Card>
      <Card className={style.salary}>
        <div>
          <div className={style.title}>Junior</div>
          <div className={style.salaryValue}>{juniorSalary}</div>
          <div className={style.rate}>
            <RateIcon className={style.filled} />
            <RateIcon />
            <RateIcon />
          </div>
        </div>
        <div>
          <div className={style.title}>Middle</div>
          <div className={style.salaryValue}>{middleSalary}</div>
          <div className={style.rate}>
            <RateIcon className={style.filled} />
            <RateIcon className={style.filled} />
            <RateIcon />
          </div>
        </div>
        <div>
          <div className={style.title}>Senior</div>
          <div className={style.salaryValue}>{seniorSalary}</div>
          <div className={style.rate}>
            <RateIcon className={style.filled} />
            <RateIcon className={style.filled} />
            <RateIcon className={style.filled} />
          </div>
        </div>
      </Card>
    </div>
  );
};
