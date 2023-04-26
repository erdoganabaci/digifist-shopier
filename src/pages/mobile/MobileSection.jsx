import styles from "./MobileSection.module.css";

const MobileSection = () => {
  return (
    <div className={styles.section}>
      <div className={styles.rectangle} />
      <img
        className={styles.imageLifestyle}
        alt=""
        src="/image--mobile-women.svg"
      />
      <div className={styles.bg} />
      <b className={styles.everydayTopsWe}>
        Everyday tops, we have something to suit every occasion.
      </b>
      <div className={styles.button}>
        <div className={styles.content}>
          <div className={styles.textButton}>Shop all everyday items</div>
          <div className={styles.contentChild} />
        </div>
      </div>
      <div className={styles.scroll}>
        <div className={styles.scrollChild} />
        <div className={styles.productCard}>
          <img
            className={styles.imageLifestyle1}
            alt=""
            src="/image--lifestyle.svg"
          />
          <div className={styles.titlePriceParent}>
            <div className={styles.titlePrice}>
              <div className={styles.organicSkinnyHigh}>
                Organic Skinny High Waist Raw Hem Jeans
              </div>
              <div className={styles.price}>
                <div className={styles.price1}>
                  <div className={styles.div}>€33.95</div>
                </div>
                <div className={styles.salePrice}>
                  <div className={styles.parent}>
                    <div className={styles.div1}>€39.99</div>
                    <div className={styles.div2}>€23.95</div>
                  </div>
                </div>
              </div>
            </div>
            <img className={styles.swatchesIcon} alt="" src="/swatches.svg" />
          </div>
          <div className={styles.productTag}>
            <b className={styles.newArrival}>New Arrival</b>
          </div>
          <div className={styles.quickAdd}>
            <div className={styles.quickAddChild} />
            <img
              className={styles.iconMiscBag}
              alt=""
              src="/icon--misc--bag.svg"
            />
          </div>
          <img className={styles.wishlistIcon} alt="" src="/wishlist.svg" />
        </div>
        <div className={styles.productCard1}>
          <img
            className={styles.imageLifestyle1}
            alt=""
            src="/image--lifestyle1.svg"
          />
          <div className={styles.titlePriceParent}>
            <div className={styles.titlePrice}>
              <div className={styles.organicSkinnyHigh}>
                Organic Skinny High Waist Raw Hem Jeans
              </div>
              <div className={styles.price}>
                <div className={styles.price1}>
                  <div className={styles.div}>€33.95</div>
                </div>
                <div className={styles.salePrice}>
                  <div className={styles.parent}>
                    <div className={styles.div1}>€39.99</div>
                    <div className={styles.div2}>€23.95</div>
                  </div>
                </div>
              </div>
            </div>
            <img className={styles.swatchesIcon} alt="" src="/swatches.svg" />
          </div>
          <div className={styles.productTag}>
            <b className={styles.newArrival}>New Arrival</b>
          </div>
          <div className={styles.quickAdd}>
            <div className={styles.quickAddChild} />
            <img
              className={styles.iconMiscBag}
              alt=""
              src="/icon--misc--bag.svg"
            />
          </div>
          <img className={styles.wishlistIcon} alt="" src="/wishlist.svg" />
        </div>
        <div className={styles.productCard2}>
          <img
            className={styles.imageLifestyle1}
            alt=""
            src="/image--lifestyle2.svg"
          />
          <div className={styles.titlePriceParent}>
            <div className={styles.titlePrice}>
              <div className={styles.organicSkinnyHigh}>
                Organic Skinny High Waist Raw Hem Jeans
              </div>
              <div className={styles.price}>
                <div className={styles.price1}>
                  <div className={styles.div}>€33.95</div>
                </div>
                <div className={styles.salePrice}>
                  <div className={styles.parent}>
                    <div className={styles.div1}>€39.99</div>
                    <div className={styles.div2}>€23.95</div>
                  </div>
                </div>
              </div>
            </div>
            <img className={styles.swatchesIcon} alt="" src="/swatches.svg" />
          </div>
          <div className={styles.productTag}>
            <b className={styles.newArrival}>New Arrival</b>
          </div>
          <div className={styles.quickAdd}>
            <div className={styles.quickAddChild} />
            <img
              className={styles.iconMiscBag}
              alt=""
              src="/icon--misc--bag.svg"
            />
          </div>
          <img className={styles.wishlistIcon} alt="" src="/wishlist.svg" />
        </div>
      </div>
    </div>
  );
};

export default MobileSection;
