import styles from "./WebSection.module.css";
const WebSection = () => {
  return (
    <div className={styles.section}  >
      <div className={styles.imageDiv}>
      <div className={styles.imageIcon} />

      </div>
      <div className={styles.content}>
        <div className={styles.rectangle} />
        <div className={styles.everydayItemsWeHaveSomethParent}>
          <b className={styles.everydayItemsWe}>
            Everyday items, we have something to suit every occasion.
          </b>
          <div className={styles.atSuspendisseAugue}>
            At suspendisse augue lectus arcu, accumsan ut sit posuere vitae sit
            tincidunt semper eu proin leo gravida cursus.
          </div>
          <div className={styles.button}>
            <div className={styles.content1}>
              <div className={styles.textButton}>Shop all everyday items</div>
              <div className={styles.contentChild} />
            </div>
          </div>
        </div>
        <div className={styles.scroll}>
         
          <div className={styles.rectangle1} />
          <div className={styles.productCard}>
            <img
              className={styles.imageLifestyle}
              alt=""
              src="/image--lifestyle.svg"
            />
            <div className={styles.productTag}>
              <b className={styles.newArrival}>New Arrival</b>
            </div>
            <div className={styles.detials}>
              <div className={styles.organicSkinnyHighWaistJeanParent}>
                <div className={styles.organicSkinnyHigh}>
                  365 Signature Hoodie
                </div>
                <div className={styles.priceParent}>
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
                  <img
                    className={styles.swatchesIcon}
                    alt=""
                    src="/swatches.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.productCard1}>
            <img
              className={styles.imageLifestyle}
              alt=""
              src="/image--lifestyle1.svg"
            />
            <div className={styles.productTag}>
              <b className={styles.newArrival}>New Arrival</b>
            </div>
            <div className={styles.detials}>
              <div className={styles.organicSkinnyHighWaistJeanParent}>
                <div className={styles.organicSkinnyHigh}>
                  Organic Skinny High Waist Jeans
                </div>
                <div className={styles.priceParent}>
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
                  <img
                    className={styles.swatchesIcon}
                    alt=""
                    src="/swatches.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.productCard2}>
            <img
              className={styles.imageLifestyle}
              alt=""
              src="/image--lifestyle2.svg"
            />
            <div className={styles.productTag}>
              <b className={styles.newArrival}>New Arrival</b>
            </div>
            <div className={styles.detials}>
              <div className={styles.organicSkinnyHighWaistJeanParent}>
                <div className={styles.organicSkinnyHigh}>
                  Organic Skinny High Waist Jeans
                </div>
                <div className={styles.priceParent}>
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
                  <img
                    className={styles.swatchesIcon}
                    alt=""
                    src="/swatches.svg"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.button1}>
          <div className={styles.elements}>
            <img
              className={styles.iconArrowsChevronRight}
              alt=""
              src="/icon--arrows--chevron-right.svg"
            />
          </div>
        </div>
        
        </div>
       
      </div>
    </div>
  );
};

export default WebSection;
