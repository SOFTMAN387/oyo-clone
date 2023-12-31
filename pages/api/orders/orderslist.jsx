import connectDB from "@/mongoDB/connectdb";
import Order from "@/models/orders/order-model";
export default async function handler(req, res) {
 
  try {
    connectDB();
    // if (req.method === "POST") {
    //   const newOrder = new Order(req.body);
    //   const result = await newOrder.save();
    //   res.status(201).json({ msg: "Order added !", result });
    // }

      if (req.method === "GET") {
        const Orders = await Order.find({});
        if (Orders.length > 0) {
          return res.status(200).json({ msg: "Good", Orders });
        }else{
          return res.status(200).json({ msg: "No Order Yet !" });
        }
      
      }

      if(req.method==="DELETE"){
       const {id}=req.body;
        connectDB();
        if(id){
            const order = await Order.findByIdAndDelete({_id:id},{new:true});
            res.status(200).json({msg:"Ordere Deleted" ,order});
        }else{
        return res.status(200).json({ msg: "No Order Deleted !" });
        }
    }
    

    
  } catch (error) {
    return res.status(500).json({ msg:error });
  }
 
}