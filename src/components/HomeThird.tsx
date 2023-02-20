import HomThird from "@/interfaces/HomThird";
import { useEffect, useState } from "react";
import { request } from "graphql-request";
import styles from "@/styles/HomeThird.module.css";
import Link from "next/link";
import Image from "next/image";

export default function HomeThird() {
  const [homeThirds, setProducts] = useState<any[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { homeThirds } = await request(
        "https://api-us-west-2.hygraph.com/v2/cle2ubeov4t0401uf31q9ab5c/master",
        `
              {
                homeThirds {
                    id
                    title
                    img1 {
                      url
                    }
                    primarytitle1
                    richText1 {
                      html
                    }
                    img2 {
                      url
                    }
                    primarytitle2
                    multiText2 {
                      html
                    }
                    img3 {
                      url
                    }
                    primarytitle3
                    richText3 {
                      html
                    }
                  }
              }
            `
      );

      setProducts(homeThirds);
    };

    fetchProducts();
  }, []);
  return (
    <>
      <HomThird>
        <>
          {!homeThirds ? (
            "Oopss somthing going wrong"
          ) : (
            <>
              {homeThirds.map((homethird: any) => (
                <div className={styles.Home_Third} key={homethird.id}>
                  <h2 className={styles.Home_Third_title}>{homethird.title}</h2>
                  {/* section-1 */}
                  <section className={styles.Home_Third_container}>
                    <section className={styles.Home_Third_containt1}>
                      <img
                        className={styles.Home_Third_img1}
                        src={homethird.img1.url}
                        alt="img"
                      />
                      <div className={styles.home_Third_conten1}>
                        <h3 className={styles.home_Third_primarytitle1}>
                          {homethird.primarytitle1}
                        </h3>
                        <p
                          className={styles.Home_Third_text1}
                          dangerouslySetInnerHTML={{
                            __html: homethird.richText1.html,
                          }}
                        ></p>
                      </div>
                      <div className={styles.Home_Third_LinkContainar}>
                        <Link
                          className={styles.Home_Third_link1}
                          href="/frontender"
                        >
                          <span>Read more</span>
                          <Image
                            className={styles.readMore1_icon}
                            src="/images/read-more.png"
                            width={20}
                            height={15}
                            alt="img"
                          />
                        </Link>
                      </div>
                    </section>

                    {/* section-2 */}
                    <section className={styles.Home_Third_containt1}>
                      <img
                        className={styles.Home_Third_img1}
                        src={homethird.img2.url}
                        alt="img"
                      />
                      <div className={styles.home_Third_conten1}>
                        <h3 className={styles.home_Third_primarytitle1}>
                          {homethird.primarytitle2}
                        </h3>
                        <p
                          className={styles.Home_Third_text1}
                          dangerouslySetInnerHTML={{
                            __html: homethird.multiText2.html,
                          }}
                        ></p>
                      </div>
                      <div className={styles.Home_Third_LinkContainar}>
                        <Link
                          className={styles.Home_Third_link1}
                          href="/frontender"
                        >
                          <span>Read more</span>
                          <Image
                            className={styles.readMore1_icon}
                            src="/images/read-more.png"
                            width={20}
                            height={15}
                            alt="img"
                          />
                        </Link>
                      </div>
                    </section>

                    {/* section-3 */}
                    <section className={styles.Home_Third_containt1}>
                      <img
                        className={styles.Home_Third_img1}
                        src={homethird.img3.url}
                        alt="img"
                      />
                      <div className={styles.home_Third_conten1}>
                        <h3 className={styles.home_Third_primarytitle1}>
                          {homethird.primarytitle3}
                        </h3>
                        <p
                          className={styles.Home_Third_text1}
                          dangerouslySetInnerHTML={{
                            __html: homethird.richText3.html,
                          }}
                        ></p>
                      </div>
                      <div className={styles.Home_Third_LinkContainar}>
                        <Link
                          className={styles.Home_Third_link1}
                          href="/frontender"
                        >
                          <span>Read more</span>
                          <Image
                            className={styles.readMore1_icon}
                            src="/images/read-more.png"
                            width={20}
                            height={15}
                            alt="img"
                          />
                        </Link>
                      </div>
                    </section>
                  </section>
                </div>
              ))}
            </>
          )}
        </>
      </HomThird>
    </>
  );
}
