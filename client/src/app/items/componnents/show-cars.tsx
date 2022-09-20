import  { useEffect, useState } from "react";
import { Item } from "../Item";
import {Car} from "../../../items/classes/ProductClass"
import leasingService from "../../../items/services/productService/leasingService";
import rentingService from "../../../items/services/productService/rentingService";
import saleService from "../../../items/services/productService/saleService";

function ShowCars() {
    const [items, setItems] = useState<Array<Car> | undefined>(undefined)
    
    useEffect(() => {
       // setProduct();
    }, [])

  const getSaleProduct = () => {
    saleService
          .getAllSaleCars()
          .then((res: Array<any>) => {
            console.log("salethen");
            
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

      const getLeasingProduct=()=>{
        console.log("leasingService");
        leasingService.getAllLeasingCars().then((res: Array<any>) => {
          console.log("leasingServicethen" );
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
      }

const getRentingProduct=()=>{
  rentingService.getAllRentingCars() .then((res: Array<any>) => {
    console.log("rentingService");
    
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
}

    return <>
    <input type="button" value="SalesCars" onClick={getSaleProduct}/>
    <input type="button" value="LeasingCars" onClick={getLeasingProduct}/>
    <input type="button" value="RentingCars" onClick={getRentingProduct}/>
        <div>
            {items && items.map((x) => {
                return <div>
                    {x.getId} {x.getModel}
                </div>
            }
            )}
        </div>
        </>
}

export default ShowCars