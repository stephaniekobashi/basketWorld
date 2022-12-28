import React from "react";
import Chart from "react-apexcharts";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Row, Container, Col } from "react-bootstrap";
function MainstatPlayer() {
  const params = useParams();
  const fetchId = parseInt(params.id);

  let [stats, setStat] = useState([]);
  console.log(stats);
  useEffect(() => {
    const getStat = async () => {
      let response = await fetch("/api/joueur/stat/" + fetchId);
      let stats = await response.json();
      setStat(stats);
    };
    getStat();
  }, []);

  return (
    <Container>
      <Row>
        <Col md={8}>
          <a
            className="nav-link dropdown-toggle"
            data-bs-toggle="dropdown"
            href="#"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Filter
          </a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#MoyPt2">
              ChartBar: Moyenne 3 Point du joueur par championat
            </a>
            <a className="dropdown-item" href="#MoyPt3">
              ChartBar:Moyenne 2 Point du joueur par championat
            </a>
            <a className="dropdown-item" href="#MoyPass">
              ChartBar: Moyenne Passe décisive du joueur par championat
            </a>
            <a className="dropdown-item" href="#MoyReb">
              ChartBar: Moyenne rebonde du joueur par championat
            </a>
            <a className="dropdown-item" href="#MoyBlock">
              ChartBar: Moyenne block du joueur par championat
            </a>
          </div>
        </Col>
        <Col md={4}>
          <Link to={"/players/" + fetchId} className="btn btn-light my-3">
            Revenir à la fiche du joueur
          </Link>
        </Col>
      </Row>
      <br></br>
      <br></br>
      <Row>
        <div>
          <h2 id="MoyPt2">
            statistique sur le Joueur en Moyenne de 2 Points des matchs par
            championat{" "}
          </h2>

          <Chart
            type="bar"
            width={1100}
            height={600}
            series={[
              {
                name: "Championat",
                data: stats.map((stat) => stat.MoyPt2),
              },
            ]}
            options={{
              colors: ["#0288D1"],
              theme: { mode: "light" },
              xaxis: {
                tickPlacement: "on",
                categories: stats.map(
                  (stat) => stat.nomchamp + "" + stat.season
                ),
              },

              yaxis: {
                labels: {
                  formatter: (val) => {
                    return `${val}`;
                  },
                  style: { fontSize: "15", colors: ["#1E88E5"] },
                },
                title: {
                  text: "Moyenne Point2/matchs",
                  style: { color: "#1976D2", fontSize: 15 },
                },
              },

              legend: {
                show: true,
                position: "right",
              },

              dataLabels: {
                formatter: (val) => {
                  return `${val}`;
                },
                style: {
                  colors: ["#f4f4f4"],
                  fontSize: 15,
                },
              },
            }}
          ></Chart>
        </div>
      </Row>
      <Row>
        <div>
          <h2 id="MoyPt3">
            statistique sur le Joueur en Moyenne de 3 Points des matchs par
            championat{" "}
          </h2>

          <Chart
            type="bar"
            width={1100}
            height={600}
            series={[
              {
                name: "Championat",
                data: stats.map((stat) => stat.MoyPt3),
              },
            ]}
            options={{
              colors: ["#0288D1"],
              theme: { mode: "light" },
              xaxis: {
                tickPlacement: "on",
                categories: stats.map(
                  (stat) => stat.nomchamp + "" + stat.season
                ),
              },

              yaxis: {
                labels: {
                  formatter: (val) => {
                    return `${val}`;
                  },
                  style: { fontSize: "15", colors: ["#263238"] },
                },
                title: {
                  text: "Moyenne 3 Points  des matchs",
                  style: { color: "#1976D2", fontSize: 15 },
                },
              },

              legend: {
                show: true,
                position: "right",
              },

              dataLabels: {
                formatter: (val) => {
                  return `${val}`;
                },
                style: {
                  colors: ["#f4f4f4"],
                  fontSize: 15,
                },
              },
            }}
          ></Chart>
        </div>
      </Row>
      <Row>
        <div>
          <h2 id="MoyPass">
            statistique sur le Joueur Moyenne Passe décisive par championat{" "}
          </h2>

          <Chart
            type="bar"
            width={1100}
            height={600}
            series={[
              {
                name: "Championat",
                data: stats.map((stat) => stat.MoyPass),
              },
            ]}
            options={{
              colors: ["#0288D1"],
              theme: { mode: "light" },
              xaxis: {
                tickPlacement: "on",
                categories: stats.map(
                  (stat) => stat.nomchamp + "" + stat.season
                ),
              },

              yaxis: {
                labels: {
                  formatter: (val) => {
                    return `${val}`;
                  },
                  style: { fontSize: "15", colors: ["#1E88E5"] },
                },
                title: {
                  text: "Moyenne Passe décisive",
                  style: { color: "#1976D2", fontSize: 15 },
                },
              },

              legend: {
                show: true,
                position: "right",
              },

              dataLabels: {
                formatter: (val) => {
                  return `${val}`;
                },
                style: {
                  colors: ["#f4f4f4"],
                  fontSize: 15,
                },
              },
            }}
          ></Chart>
        </div>
      </Row>
      <Row>
        <div>
          <h2 id="MoyReb">
            statistique sur le Joueur Moyenne de rebonde des matchs par
            chamapionat{" "}
          </h2>

          <Chart
            type="bar"
            width={1100}
            height={600}
            series={[
              {
                name: "Championat",
                data: stats.map((stat) => stat.MoyReb),
              },
            ]}
            options={{
              colors: ["#0288D1"],
              theme: { mode: "light" },
              xaxis: {
                tickPlacement: "on",
                categories: stats.map(
                  (stat) => stat.nomchamp + "" + stat.season
                ),
              },

              yaxis: {
                labels: {
                  formatter: (val) => {
                    return `${val}`;
                  },
                  style: { fontSize: "15", colors: ["#1E88E5"] },
                },
                title: {
                  text: "Moyenne de rebonde des matchs",
                  style: { color: "#1976D2", fontSize: 15 },
                },
              },

              legend: {
                show: true,
                position: "right",
              },

              dataLabels: {
                formatter: (val) => {
                  return `${val}`;
                },
                style: {
                  colors: ["#f4f4f4"],
                  fontSize: 15,
                },
              },
            }}
          ></Chart>
        </div>
      </Row>
      <Row>
        <div>
          <h2 id="MoyBlock">
            statistique sur le Joueur en Moyenne de block des matchs du
            chamapionat{" "}
          </h2>

          <Chart
            type="bar"
            width={1100}
            height={600}
            series={[
              {
                name: "Championat",
                data: stats.map((stat) => stat.MoyBlock),
              },
            ]}
            options={{
              colors: ["#0288D1"],
              theme: { mode: "light" },
              xaxis: {
                tickPlacement: "on",
                categories: stats.map(
                  (stat) => stat.nomchamp + "" + stat.season
                ),
              },

              yaxis: {
                labels: {
                  formatter: (val) => {
                    return `${val}`;
                  },
                  style: { fontSize: "15", colors: ["#1E88E5"] },
                },
                title: {
                  text: "Moyenne block des matchs",
                  style: { color: "#1976D2", fontSize: 15 },
                },
              },

              legend: {
                show: true,
                position: "right",
              },

              dataLabels: {
                formatter: (val) => {
                  return `${val}`;
                },
                style: {
                  colors: ["#f4f4f4"],
                  fontSize: 15,
                },
              },
            }}
          ></Chart>
        </div>
      </Row>
    </Container>
  );
}

export default MainstatPlayer;

// const [chartData, setChartData] = useState({
//   labels: [],
//   datasets: [],
// });
{
  /* <BarChart chartData={chartData} /> */
}
//   setChartData({
//     labels: stats.map((stat) => stat.nomchamp+" "+ stat.season),
//     datasets: [
//         {
//          label: "les championnats joué ",
//          data: stats.map((stat) => stat.MoyPt2),
//          borderWidth: 1,
//          backgroundColor: [
//           'rgba(255, 99, 132, 0.2)',
//           'rgba(255, 159, 64, 0.2)',
//           'rgba(255, 205, 86, 0.2)',
//           'rgba(75, 192, 192, 0.2)',
//           'rgba(54, 162, 235, 0.2)',
//           'rgba(153, 102, 255, 0.2)',
//           'rgba(201, 203, 207, 0.2)'
//         ],
//         borderColor: [
//           'rgb(255, 99, 132)',
//           'rgb(255, 159, 64)',
//           'rgb(255, 205, 86)',
//           'rgb(75, 192, 192)',
//           'rgb(54, 162, 235)',
//           'rgb(153, 102, 255)',
//           'rgb(201, 203, 207)'
//         ]
//         }
//     ]
// });
