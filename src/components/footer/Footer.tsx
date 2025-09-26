import s from "./footer.module.scss"

import cx from "clsx"

export default function Footer() {
  return (
    <>
      <div className={cx(s.address)}>
        <div className='flex justify-center desktop:justify-start text-center desktop:text-left w-full'>
          FSM Mah., Balkan Cad., <br /> JUSTWork Ofis Kampüs, No: 62A, 34770, <br /> Ümraniye, İstanbul / Türkiye
        </div>
      </div>
      <footer
        className={cx(
          s.footer,
          "flex flex-col tablet:flex-row items-center tablet:items-end justify-between gap-5 tablet:gap-0"
        )}
      >
        <small>© Stork Motion 2025</small>

        {/* <div className={cx(s.social, "flex items-center justify-center gap-5")}>
        <Link to="/" className={s.iconC}>
          <IconLinkedin fill="var(--black)" />
        </Link>
      </div> */}

        <small>
          Web Solutions Partner{" "}
          <a className='underline' href='https://bytemywork.com'>
            Byte My Work
          </a>
        </small>
      </footer>
    </>
  )
}
