import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import Error from "../components/Error";
import moment from "moment";

function Bookinginfo() {
  const { roomid, fromdate, todate } = useParams();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [room, setRoom] = useState();
  const [totalDays, setTotalDays] = useState();

  const [totalamount, setTotalamount] = useState();

  useEffect(() => {
    async function fetchRoom() {
      try {
        const response = await axios.post("/api/rooms/getroombyid", {
          roomid,
        });
        setRoom(response.data);
        setTotalamount(response.data.rentperday * totalDays);

        // console.log(totalDays);
        setLoading(false);
      } catch (error) {
        setLoading(true);
        setError(false);
      }
    }

    if (roomid) {
      fetchRoom();
    }
  }, [roomid, totalDays]);

  useEffect(() => {
    const fromDateMoment = moment(fromdate, "DD-MM-YYYY", true);
    const toDateMoment = moment(todate, "DD-MM-YYYY", true);

    if (fromDateMoment.isValid() && toDateMoment.isValid()) {
      const days = toDateMoment.diff(fromDateMoment, "days");
      setTotalDays(days);
    }
  }, [fromdate, todate]);

  return (
    <div className="m-5">
      {loading ? (
        <h1>
          <Loader />
        </h1>
      ) : error ? (
        <Error />
      ) : (
        <div>
          <div className="rows justify-content-left bs">
            <div className="col-md-6">
              <div style={{ textAlign: "left" }}>
                <h1>Detalji vaše rezervacije:</h1>
                <hr />
                <b>
                  <p>Naziv : {room.name}</p>
                  <p>Od datuma : {fromdate}</p>
                  <p>Do datuma: {todate}</p>
                  {/* <p>Max osoba: {room.maxcount}</p> */}
                </b>
              </div>
              <div style={{ textAlign: "left" }}>
                <hr />
                <b>
                  <p>Ukupno dana : {totalDays}</p>
                  {/* <p>Cijena po danu : {room.rentperday}</p> */}
                  <p>Ukupna cijena {totalamount}</p>
                </b>
              </div>
              <div style={{ float: "left " }}>
                {/* <button className="btnr">Rezervisite </button> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Bookinginfo;
