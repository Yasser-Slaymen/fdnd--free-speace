import Microsite from "@/interfaces/Microsite";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Microsites.module.css";
import { useEffect, useState } from "react";
import { request } from "graphql-request";

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
                    micrositeRichtext {
                      html
                    }
                    micrositeRichtext2 {
                      html
                    }
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
                <div key={footer.id}>
                  <div className={styles.Microsites_header} >
                    <h2>Microsites</h2>
                  </div>

                  <div className={styles.FooterMicrosites}>
                    <section className={styles.micro_1}>
                      <p className={styles.pargraph}>{footer.multiText}</p>
                      <Link
                        className={styles.email}
                        href="mailto:info-fdnd@hva.nl?subject='Hello from Abstract!'&body='Just popped in to say hello'"
                      >
                        <Image
                          className={styles.email_icon}
                          src="/images/mail4.png"
                          width={20}
                          height={15}
                          alt="img"
                        /> <span className={styles.email_text}> E-mail: info-fdnd@hva.nl</span>
                      </Link>
                    </section>
                    <section className={styles.micro_2}>
                      <h3>{footer.queklinks}</h3>
                      <section>
                        <div className={styles.Microsites_links1}
                          dangerouslySetInnerHTML={{
                            __html: footer.micrositeRichtext.html,
                          }}
                        ></div>
                        <div className={styles.Microsites_links1}
                          dangerouslySetInnerHTML={{
                            __html: footer.micrositeRichtext2.html,
                          }}
                        ></div>
                      </section>
                    </section>
                    <section className={styles.micro_3}>
                      <Link className={styles.phone} href="tel:020 595 1855">
                        <Image
                          className={styles.phone_icon}
                          src="/images/phone1.png"
                          width={20}
                          height={15}
                          alt="img"
                        />
                        <span className={styles.phone_number}>Bel:020 595 1855</span>
                      </Link>
                    </section>
                  </div>
                </div>
              ))}
            </>
          )}
        </footer>
      </Microsite>
    </>
  );
}
