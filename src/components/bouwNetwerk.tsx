import { useEffect, useState } from "react";
import { request } from "graphql-request";
import styles from "@/styles/Frontender.module.css";
interface PropsType {
  id: number;
  title1: string;
  richText1: {
    html: string;
  };
  img1: {
    url: string;
  };
  title2: string;
  richText2: {
    html: string;
  };
  img2: {
    url: string;
  };
  titleNetwerk: string;
  richTextNetwerk: {
    html: string;
  };
  imgNetwerk: {
    url: string;
  };
}
export default function BouwtNetwerkOp() {
  const [fronternders, setProducts] = useState<PropsType[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { fronternders }: {fronternders: PropsType[]} = await request(
        "https://api-us-west-2.hygraph.com/v2/cle2ubeov4t0401uf31q9ab5c/master",
        `
              {
                fronternders  {
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
                    titleNetwerk
                    richTextNetwerk {
                      html
                    }
                    imgNetwerk {
                      url
                    }
                     
                    
                  }
              }
            `
      );

      setProducts(fronternders);
    };

    fetchProducts();
  }, []);
  return (
    <>
      <>
        {!fronternders ? (
          "Oopss somthing going wrong"
        ) : (
          <>
            {fronternders.map((frontender) => (
              <main className={styles.FrontendSection1} key={frontender.id}>
                <section className={styles.Frontender_firstSection}>
                  <section>
                    <h1 className={styles.frontender_title1}>
                      {frontender.titleNetwerk}
                    </h1>
                    <p
                      className={styles.frontender_text1}
                      dangerouslySetInnerHTML={{
                        __html: frontender.richTextNetwerk.html,
                      }}
                    ></p>
                  </section>
                  <img
                    className={styles.frontend_img1}
                    src={frontender.imgNetwerk.url}
                    alt="frontend img"
                  />
                </section>
                <section className={styles.Frontender_SecondSection}>
                  <section>
                    <h1 className={styles.frontender_title2}>
                      {frontender.title2}
                    </h1>
                    <p
                      className={styles.frontender_text2}
                      dangerouslySetInnerHTML={{
                        __html: frontender.richText2.html,
                      }}
                    ></p>
                  </section>
                  <img
                    className={styles.frontend_img2}
                    src={frontender.img2.url}
                    alt="frontend img"
                  />
                </section>
              </main>
            ))}
          </>
        )}
      </>
    </>
  );
}
