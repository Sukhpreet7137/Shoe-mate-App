import React, { Children, createContext, useState } from "react";
import data from "../data";
export const UserContext=createContext();


export default function ContextProvider({children}){
    const [data1,setdata1]=useState(data);
    const [cartarray,setcartarray]=useState([]);
    const [price,setprice]=useState(0);
    const [searchitem,setsearchitem]=useState(null);

    // CATEGORY WISE FILTERING
    function filterdatacategory(categoryreq){
        if(categoryreq==="all"){
            return data;
        }
        else{
            const filterdata=data.filter((dataa)=>
                dataa.category===categoryreq
            )
            return filterdata;
        }
    }

    // COLOR WISE FILTERING
    function filterdatacategory2(colorcat){
        if(colorcat===""){
            return data;
        }
        else{
            const filterdata=data.filter((dataa)=>
                dataa.color===colorcat
            )
            return filterdata;
        }
    }

    function filterprice(range1,range2){
        if(range1===-1){
            return data;
        }
        else{
            const filterdata=data.filter((data)=>
                data.newPrice>=range1 && data.newPrice<=range2
            )
            return filterdata;
        }
    }


    function clearfilter(content){
        const filterdata=cartarray.filter((data)=>
            data?.dat?.id!==content?.dat?.dat?.id
        )
        return filterdata;
    }

    function searchitem1(searchitem,searchdata){
        // const resultantdata=searchdata.filter((data)=>
        //   return searchdata.contains(searchitem)
        // );
    }
    const values={
        data1,
        setdata1,
        filterdatacategory,
        filterdatacategory2,
        cartarray,
        setcartarray,
        price,
        setprice,
        filterprice,
        clearfilter
    };

    return <UserContext.Provider value={values}>{children}</UserContext.Provider>
}