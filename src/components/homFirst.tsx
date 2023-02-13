import { useEffect, useState } from "react";
import { request } from "graphql-request";
import Hmburger from "@/interfaces/Thmbruger";
export default function HomeFirst() {
  const [Tests, setProducts] = useState<any[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { Tests } = await request(
        "https://api-us-west-2.hygraph.com/v2/cle2ubeov4t0401uf31q9ab5c/master",
        `
          {
            tests{
                  id
                  title 
                    
            }
          }
        `
      );

      setProducts(Tests);
    };

    fetchProducts();
  }, []);
  return (
    <>
    <Hmburger>
    <div>
      {!Tests ? (
        "Oopss somthing going wrong"
      ) : (
        <>
          {Tests.map((footer:any) => (
            <div key={footer.id}>
              <h4 className="footer_headr">{footer.title}</h4>

            </div>
          ))}
        </>
      )}
    </div>
    </Hmburger>
    </>
    
  );
}
