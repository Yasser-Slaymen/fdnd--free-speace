import Microsite from "@/interfaces/Microsite";
import styles from "@/styles/Microsites.module.css";
import { useEffect, useState } from "react";
import { request } from "graphql-request";
// import marked from 'marked'

export default function Microsites() {
  const [footers, setProducts] = useState<any[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {

      const { footers } = await request(
        "https://api-us-west-2.hygraph.com/v2/cle2ubeov4t0401uf31q9ab5c/master",
        `
            {
                footers{
                    id
                    queklinks
                    multiText
                    markdown
                }
            }
          `
      );

      setProducts(footers);
    };

    fetchProducts();
  }, []);
  return (
    <>
      <Microsite>
        <footer className={styles.Footer}>
          {!footers ? (
            "Oopss somthing going wrong"
          ) : (
            <>
              {footers.map((footer: any) => (
                <>
                  <h2>Microsites</h2>
                  <div className="FooterMicrosites" key={footer.id}>
                    <section>
                      <p>{footer.multiText}</p>
                    </section>
                    <section>
                        <h3>{footer.queklinks}</h3>
                        <section  dangerouslySetInnerHTML={{__html:footer.markdown.html}}></section>
                    </section>
                    <section></section>
                  </div>
                </>
              ))}
            </>
          )}
        </footer>
      </Microsite>
    </>
  );
}
