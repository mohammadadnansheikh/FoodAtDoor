import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ADD, DLT, REMOVE } from "../redux/actions/action";

const CardsDetails = () => {
  const [data, setData] = useState([]);
  console.log(data);
  const { id } = useParams();
  console.log(id);

  const history = useNavigate();

  const dispatch = useDispatch();

  const getData = useSelector((state) => state.cartreducer.carts);
  console.log(getData);

  const compare = () => {
    let comparedata = getData.filter((e) => {
      return e.id == id;
    });
    setData(comparedata);
  };

  const send = (e)=>{
    // console.log(e)
    dispatch(ADD(e));
 }

  const dlt = (id) => {
    dispatch(DLT(id));
    history("/");
  };

  // remove one
  const remove=(item)=>{
     dispatch(REMOVE(item));
  }

  useEffect(() => {
    compare();
  }, [id]);

  return (
    <div>
      <div className="container mt-2">
        <h2 className="text-center">Item Details Page</h2>
        <section className="container mt-3">
          <div className="itemsdetails">
            {data.map((ele) => {
              return (
                <>
                  <div className="items_img">
                    <img src={ele.imgdata} alt="" />
                  </div>

                  <div className="details">
                    <Table>
                      <tr>
                        <td>
                          <p>
                            <strong>Restaurants</strong> : {ele.rname}
                          </p>
                          <p>
                            <strong>Price</strong> : ₹ {ele.price}
                          </p>
                          <p>
                            <strong>Dishes</strong> : {ele.address}
                          </p>
                          <p>
                            <strong>Total</strong> : ₹ {ele.price*ele.qnty}
                            <div className="mt-5 d-flex justify-content-between align-items-center" style={{width:100, cursor : "pointer", background:"#ddd", color:"#111"}}>
                                <span onClick={ele.qnty <=1 ? ()=>dlt(ele.id):()=>remove(ele)} style={{fontSize:24}}>-</span>
                                <span style={{fontSize:22}}>{ele.qnty}</span>
                                <span onClick={()=>send(ele)} style={{fontSize:24}}>+</span>
                            </div>
                          </p>
                        </td>

                        <td>
                          <p>
                            <strong>Rating :</strong>{" "}
                            <span
                              style={{
                                background: "green",
                                color: "#fff",
                                padding: "2px 5px",
                                borderRadius: "5px",
                              }}
                            >
                              {ele.rating} ★
                            </span>
                          </p>
                          <p>
                            <strong>Order Reveiw :</strong> {ele.somedata}
                          </p>
                          <p>
                            <strong>Remove :</strong>
                            <i
                              onClick={() => dlt(ele.id)}
                              className="fas fa-trash"
                              style={{
                                color: "red",
                                fontSize: 20,
                                cursor: "pointer",
                              }}
                            ></i>
                          </p>
                        </td>
                      </tr>
                    </Table>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CardsDetails;
