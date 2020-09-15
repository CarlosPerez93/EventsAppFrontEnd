import React, { useEffect, useState } from "react";
import {
  PDFDownloadLink,
  Page,
  Text,
  Document,
  StyleSheet,
  View,
} from "@react-pdf/renderer";
import api from "../../../common/api/api";

const MyDocument = ({ data, date }) => {
  return (
    <Document>
      <Page size="LETTER" orientation="portrait" style={style.page}>
        <View
          style={{ height: 2, width: "100%", backgroundColor: "#FF5936" }}
        />
        <Text style={style.title}>Reportes</Text>
        <View
          style={{ height: 2, width: "100%", backgroundColor: "#FF5936" }}
        />
        <View style={{ justifyContent: "flex-end", width: "100%" }}>
          <Text style={{ fontSize: 14, textAlign: "right" }}>
            Fecha: 15/09/2020
          </Text>
        </View>

        {data.map((value, key) => {
          return (
            <View
              key={key}
              style={{
                borderWidth: 1,
                borderColor: "#FF8065",
                margin: 10,
                padding: 20,
                borderRadius: 10,
              }}
            >
             
              <Text style={style.text}>Usuario: {value.username}</Text>
              <Text style={style.text}>Email: {value.email}</Text>
              <Text style={style.text}>Estado: {value.state}</Text>
              <View style={{ paddingTop: 10 }}>
                <Text style={style.text}>Eventos</Text>
              </View>

              <View
                style={{
                  paddingLeft: 10,
                }}
              >
                {value.events.map((service, i) => {
                  return (
                    <View
                      key={i}
                      style={{
                        paddingLeft: 30,
                        paddingTop: 10,
                        borderBottomWidth: 1,
                        borderBottomColor: "#FF8065",
                        padding: 4,
                      }}
                    >
                      <Text style={style.text}>
                        {service.id} | {service.name}
                      </Text>
                    </View>
                  );
                })}
              </View>
            </View>
          );
        })}
      </Page>
    </Document>
  );
};

const App = ({ name }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const apiDta = async () => {
      const result = await api.get("report/get-clientes");
      console.log("Result ---> ", result);
      if (result.status === 200) {
        setData(result.data);
      }
    };
    apiDta();
  }, []);

  return (
    <div>
      {data && (
        <PDFDownloadLink
          document={<MyDocument data={data} />}
          fileName="somename.pdf"
        >
          {({ blob, url, loading, error }) =>
            loading ? "Cargando..." : "Generar reporte"
          }
        </PDFDownloadLink>
      )}
    </div>
  );
};

export default App;

export const style = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 30,
  },
  title: {
    fontWeight: "bold",
    alignSelf: "center",
    paddingBottom: 4,
  },
  text: {
    fontSize: 14,
  },
});
