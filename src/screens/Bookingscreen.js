import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import Error from "../components/Error";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import Booked from "../components/Booked";

function Bookingscreen() {
  const { roomid, fromdate, todate } = useParams();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [room, setRoom] = useState();
  const [totalDays, setTotalDays] = useState();

  const [totalamount, setTotalamount] = useState();
  const [showBooked, setShowBooked] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchRoom() {
      try {
        const response = await axios.post("/api/rooms/getroombyid", {
          roomid,
        });
        setRoom(response.data);
        setTotalamount(response.data.rentperday * totalDays);

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

  const handleBook = () => {
    setShowBooked(true);
  };

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
          <div className="row justify-content-center mt-5 bs">
            <div className="col-md-6">
              <h1>{room.name}</h1>
              <img src={room.imageurls[0]} className="bigImg" alt="Room" />
            </div>
            <div className="col-md-6">
              <div style={{ textAlign: "right" }}>
                <h1>Detalji rezervacije</h1>
                <hr />
                <b>
                  <p>Naziv : {room.name}</p>
                  <p>Od datuma : {fromdate}</p>
                  <p>Do datuma: {todate}</p>
                  <p>Max osoba: {room.maxcount}</p>
                </b>
              </div>
              <div style={{ textAlign: "right" }}>
                <hr />
                <b>
                  <p>Ukupno dana : {totalDays}</p>
                  <p>Cijena po danu : {room.rentperday}</p>
                  <p>Ukupna cijena {totalamount}</p>
                </b>
              </div>
              <div style={{ float: "right " }}>
                <button className="btnr" onClick={handleBook}>
                  Potvrdite rezervaciju{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showBooked && (
        <Booked
          onClose={() => setShowBooked(false)}
          onOKClick={() => {
            setShowBooked(false);
            navigate(`/Bookinginfo/${room._id}/${fromdate}/${todate}`);
          }}
        />
      )}
    </div>
  );
}

export default Bookingscreen;
