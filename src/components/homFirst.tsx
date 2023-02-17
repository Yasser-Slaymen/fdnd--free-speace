import { useEffect, useState } from "react";
import { request } from "graphql-request";
import HomeInterface from "@/interfaces/HomInterface";
import styles from "@/styles/HomeFirste.module.css";
// import Image from "next/image";

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
    <>
      <HomeInterface>
        <div>
          {!homeFirstes ? (
            "Oopss somthing going wrong"
          ) : (
            <>
              {homeFirstes.map((homefirst: any) => (
                <>
                  <div  className={styles.Home_First}  key={homefirst.id}>
                    <section className={styles.Homefirst_section1}>
                      <h1>{homefirst.title}</h1>
                      <img className={styles.homefirst_imag} src={homefirst.img.url} alt="home img" />
                      {/* <Image src={homefirst.img.url} width={200} height={150} alt="img" /> */}
                    </section>
                    <section>
                      <article>
                        <h2>{homefirst.titleScondary}</h2>
                        <p>{homefirst.multiText}</p>
                      </article>
                      <p  dangerouslySetInnerHTML={{__html: homefirst.richText.html}}></p>
                    </section>

                  </div>
                </>
              ))}
            </>
          )}
        </div>
      </HomeInterface>
    </>
  );
}
