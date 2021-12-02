import Link from 'next/link';

import Button from '../common/Button';
import IconDate from '../icons/date-icon';
import IconAddress from '../icons/address-icon';
import IconArrowRight from '../icons/arrow-right-icon';

import css from './EventItem.module.css';
import DateIcon from '../icons/date-icon';

function EventItem({ title, image, date, location, id }) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const formattedAddress = location.replace(', ', '\n');
  const exploreLink = `/events/${id}`;

  return (
    <li className={css.item}>
      <img src={'/' + image} alt={''} />
      <div className={css.content}>
        <div className={css.summary}>
          <h2>{title}</h2>
          <div className={css.date}>
            <DateIcon />
            <time>{formattedDate}</time>
          </div>
          <div className={css.address}>
            <IconAddress />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={css.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={css.icon}>
              <IconArrowRight />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
