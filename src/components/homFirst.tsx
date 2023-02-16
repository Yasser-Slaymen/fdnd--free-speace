import { useEffect, useState } from "react";
import { request } from "graphql-request";
import HomeInterfaces from "@/interfaces/HomInterface";
import styles from "@/styles/Home.module.css";

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
      <HomeInterfaces>
        <div className={styles.Home_First}>
          {!homeFirstes ? (
            "Oopss somthing going wrong"
          ) : (
            <>
              {homeFirstes.map((homefirst: any) => (
                <>
                  <div key={homefirst.id}>
                    <h4>{homefirst.title}</h4>
                    <h4>{homefirst.titleScondary}</h4>
                  </div>
                </>
              ))}
            </>
          )}
        </div>
      </HomeInterfaces>
    </>
  );
}
