import Link from 'next/link';

import css from './Button.module.css';

function Button({ link, children, onClick }) {
  if (link) {
    return (
      <Link href={link}>
        <a className={css.btn}>{children}</a>
      </Link>
    );
  }

  return <button onClick={onClick}>{children}</button>;
}

export default Button;
