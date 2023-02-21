import { useEffect, useState } from "react";
import { request } from "graphql-request";
import HomeInterface from "@/interfaces/HomInterface";
import styles from "@/styles/HomeFirste.module.css";

export default function HomeFirst() {
  const [homeFirstes, setProducts] = useState<any[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { homeFirstes } = await request(
        "https://api-us-west-2.hygraph.com/v2/cle2ubeov4t0401uf31q9ab5c/master",
        `
          {
            homeFirstes{
              id
              title
              titleScondary
              multiText
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

      setProducts(homeFirstes);
    };

    fetchProducts();
  }, []);
  return (
    <div>
      <HomeInterface>
        <>
          {!homeFirstes ? (
            "Oopss somthing going wrong"
          ) : (
            <>
              {homeFirstes.map((homefirst: any) => (
                <>
                  <div key={homefirst.id}>
                    {/* <section className={styles.Homefirst_section1}>
                      <h1>{homefirst.title}</h1>
                      <p>{homefirst.multiText}</p>
                    </section> */}
                    <section className={styles.Home_First}>
                      <h2 className={styles.HomeFirst_primaryTitle}>
                        {homefirst.titleScondary}
                      </h2>
                      <article className={styles.homefirst_content}>
                        <p
                          className={styles.homefirst_text}
                          dangerouslySetInnerHTML={{
                            __html: homefirst.richText.html,
                          }}
                        ></p>
                        <img
                          className={styles.homefirst_imag}
                          src={homefirst.img.url}
                          alt="home img"
                        />
                      </article>
                    </section>
                  </div>
                </>
              ))}
            </>
          )}
        </>
      </HomeInterface>
    </div>
  );
}
