import { useEffect, useState } from "react";
import { request } from "graphql-request";
import HomSecond from "@/interfaces/HomSecond";
import styles from "@/styles/HomeSecond.module.css";

export default function HomeSecond() {
  const [homeSeconds, setProducts] = useState<any[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { homeSeconds } = await request(
        "https://api-us-west-2.hygraph.com/v2/cle2ubeov4t0401uf31q9ab5c/master",
        `
            {
                homeSeconds {
                    id
                    title
                    firstImag {
                        url
                      }
                      fristText {
                        html
                      }
                      scondImig {
                        url
                      }
                      scondText {
                        html
                      }
                   
                  
                }
            }
          `
      );

      setProducts(homeSeconds);
    };

    fetchProducts();
  }, []);
  return (
    <>
      <HomSecond>
        <>
          {!homeSeconds ? (
            "Oopss somthing going wrong"
          ) : (
            <>
              {homeSeconds.map((homesecond: any) => (
                <div className={styles.Home_Second} key={homesecond.id}>
                  <h2 className={styles.Home_Second_title}>
                    {homesecond.title}
                  </h2>
                  <section className={styles.Home_Second_content}>
                    <section className={styles.home_Second_Section1}>
                      <img
                        className={styles.homeSecond_img1}
                        src={homesecond.firstImag.url}
                        alt="img"
                      />
                      <p
                        dangerouslySetInnerHTML={{
                          __html: homesecond.fristText.html,
                        }}
                      ></p>
                    </section>

                    <section className={styles.home_Second_Section2}>
                      <img
                        className={styles.homeSecond_img1}
                        src={homesecond.scondImig.url}
                        alt="img"
                      />
                      <p
                        dangerouslySetInnerHTML={{
                          __html: homesecond.scondText.html,
                        }}
                      ></p>
                    </section>
                  </section>
                </div>
              ))}
            </>
          )}
        </>
      </HomSecond>
    </>
  );
}
