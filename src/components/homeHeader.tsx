import { useEffect, useState } from "react";
import { request } from "graphql-request";
import HomeInterface from "@/interfaces/HomInterface";
import styles from "@/styles/HomeHeader.module.css";

export default function HomeHeader() {
  const [homeHeaders, setProducts] = useState<any[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { homeHeaders } = await request(
        "https://api-us-west-2.hygraph.com/v2/cle2ubeov4t0401uf31q9ab5c/master",
        `
          {
            homeHeaders{
                    id
                    title
                    richText {
                    html
                    }
                    img {
                        url
                     }     
                }
          }
        `
      );

      setProducts(homeHeaders);
    };

    fetchProducts();
  }, []);
  return (
    <>
      <HomeInterface>
        <>
          {!homeHeaders ? (
            "Oopss somthing going wrong"
          ) : (
            <div>
              {homeHeaders.map((homeHeader: any) => (
                <>
                  <div className={styles.homeHeader} key={homeHeader.id}>
                    <h1 className={styles.homeHeader_title}>
                      {homeHeader.title}
                    </h1>
                    <section className={styles.homeHeader_containar}>
                      <img
                        className={styles.homeHeader_imag}
                        src={homeHeader.img.url}
                        alt="home img"
                      />
                      <p
                        className={styles.homeHeader_text}
                        dangerouslySetInnerHTML={{
                          __html: homeHeader.richText.html,
                        }}
                      ></p>
                    </section>
                  </div>
                </>
              ))}
            </div>
          )}
        </>
      </HomeInterface>
    </>
  );
}
