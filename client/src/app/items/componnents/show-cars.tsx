import  { useEffect, useState } from "react";
import { Item } from "../Item";
import {Car} from "../../../items/classes/ProductClass"
import leasingService from "../../../items/services/productService/leasingService";
import rentingService from "../../../items/services/productService/rentingService";
import saleService from "../../../items/services/productService/saleService";

function ShowItems() {
    const [items, setItems] = useState<Array<Car> | undefined>(undefined)
    useEffect(() => {
        setProduct();
    }, [])

  const setProduct = () => {
    leasingService
          .getAllLeasingCars()
          .then((res: Array<any>) => {
            let temp: Array<Car> = [];
            for (let i = 0; i < res.length; i++) {
              let item = res[i];
              let car = new Car(
               item._id,
               item.producer,
               item.model,
               item.state,
               item.category,
               item.engine,
               item.YearOfProduction,
               item.km,
               item.engineCapacity,
               item.tradeInOnline,
               item.numOfSites,
               item.accessories,
               item.color,
               item.price,
               item.quantity,
               item.image
              );
              temp.push(car);
            }
            setItems(temp);
            console.log(temp);
            
          })
          .catch((err: Error) => console.log(err));
      };
    return (
        <div>
            {items && items.map((x) => {
                return <div>
                    {x.getId} {x.getModel}
                </div>
            }
            )}
        </div>
    )
}

export default ShowItems