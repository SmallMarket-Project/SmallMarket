import styles from './main.module.css';

function Main() {
  return(
    /* 상단에 navbar */
    <section className={styles.container}>
      <header className={styles.main}>
        <h1 className={styles.title}>SMALL MARKET</h1>
        <img className={styles.mainImg} src="img/1-index.jpg" alt='main' />
        <button className={styles.button}>GO TO SHOP</button>
      </header>
      <article className={styles.indexWrap}>
        <section className={styles.indexContainer}>
          <div className={styles.indexItems}>
            <img className={styles.itemColImg} src="img/2-index.jpg" alt='photo1' />
            <h3>The Most Fresh Product</h3>
            <h5>Buy directly from artisans all across Korea</h5>
          </div>
          <div className={styles.indexItems}>
            <img className={styles.itemColImg} src="img/3-index.jpg" alt='photo2' />
            <h3>The MarketPlace</h3>
            <h5>Most healthy foods and products</h5>
          </div>
          <div className={styles.indexItems}>
            <img className={styles.itemColImg} src="img/4-index.jpg" alt='photo3' />
            <h3>Reliable</h3>
            <h5>We sell only trusted products.</h5>
          </div>
        </section>
        <section className={styles.sectionContainer}>
          <div className={styles.sectionCol}>
            <img className={styles.sectionImg} src="img/5-index.jpg" alt='photo4' />
            <h3>For the customer and For the producer</h3>
            <h5>Buy food that is fair and trustworthy.</h5>
          </div>
          <div className={styles.sectionCol}>
            <img className={styles.sectionImg} src="img/6-index.jpg" alt='photo5' />
            <h3>Because It's a Small Market</h3>
            <h5>That's why you should use it.</h5>
          </div>
        </section>
      </article>
    </section>
  );
}

export default Main;