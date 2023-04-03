import { useEffect, useState } from "react";
import { request } from "graphql-request";
import styles from "@/styles/HomeHeader.module.css";
interface PropsType{
  id: number;
  title: string;
  richText: { html: string};
  img: { url: string};

}
export default function HomeFirst() {
  const [homeHeaders, setProducts] = useState<PropsType[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { homeHeaders }:{homeHeaders: PropsType[] } = await request(
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
      
        <>
          {!homeHeaders ? (
            "Oopss somthing going wrong"
          ) : (
            <>
              {homeHeaders.map((homeHeader) => (
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
            </>
          )}
        </>
    
    </>
  );
}
