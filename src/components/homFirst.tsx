import { useEffect, useState } from "react";
import { request } from "graphql-request";
import Hmburger from "@/interfaces/Thmbruger";

export default function HomeFirst() {
  const [ tests, setProducts] = useState<any[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const {tests } = await request(
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

      setProducts( tests);
    };

    fetchProducts();
  }, []);
  return (
    <>
    <Hmburger>
    <div>
      {! tests ? (
        "Oopss somthing going wrong"
      ) : (
        <>
          { tests.map((footer:any) => (
            <div key={footer.id}>
              <h4 className="footer_headr">{footer.title}</h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, natus!</p>

            </div>
          ))}
        </>
      )}
    </div>
    </Hmburger>
    </>
    
  );
}
