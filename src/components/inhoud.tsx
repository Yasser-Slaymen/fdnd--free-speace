import FrontendProps1 from "@/interfaces/FrontenderProps1";
import { useEffect, useState } from "react";
import { request } from "graphql-request";
import styles from "@/styles/Frontender.module.css";

export default function InhoudVanOpleiding () {
  const [inhoudToelatings, setProducts] = useState<any[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { inhoudToelatings } = await request(
        "https://api-us-west-2.hygraph.com/v2/cle2ubeov4t0401uf31q9ab5c/master",
        `
              {
                inhoudToelatings  {
                    id
                    title1
                    richText1 {
                      html
                    }
                    img1 {
                      url
                    }
                    title2
                    richText2 {
                      html
                    }
                    img2 {
                      url
                    }
                     
                    
                  }
              }
            `
      );

      setProducts(inhoudToelatings);
    };

    fetchProducts();
  }, []);
  return (
    <>
      <FrontendProps1>
        <>
          {!inhoudToelatings ? (
            "Oopss somthing going wrong"
          ) : (
            <>
              {inhoudToelatings.map((inhoud: any) => (
                <main className={styles.FrontendSection1} key={inhoud.id}>
                  {/* section1 */}
                  <section className={styles.Frontender_firstSection}>
                    <section>
                      <h1 className={styles.frontender_title1}>
                        {inhoud.title1}
                      </h1>
                      <p
                        className={styles.frontender_text1}
                        dangerouslySetInnerHTML={{
                          __html: inhoud.richText1.html,
                        }}
                      ></p>
                    </section>
                    <img
                      className={styles.frontend_img1}
                      src={inhoud.img1.url}
                      alt="frontend img"
                    />
                  </section>
                  {/* section2 */}
                  <section className={styles.Frontender_SecondSection}>
                    <section>
                      <h1 className={styles.frontender_title2}>
                        {inhoud.title2}
                      </h1>
                      <p
                        className={styles.frontender_text2}
                        dangerouslySetInnerHTML={{
                          __html: inhoud.richText2.html,
                        }}
                      ></p>
                    </section>
                    <img
                      className={styles.frontend_img2}
                      src={inhoud.img2.url}
                      alt="frontend img"
                    />
                  </section>
                
                </main>
              ))}
            </>
          )}
        </>
      </FrontendProps1>
    </>
  );
}