import Link from 'next/link';

import css from './Button.module.css';

function Button({ link, children }) {
  return (
    <Link href={link}>
      <a className={css.btn}>{children}</a>
    </Link>
  );
}

export default Button;
