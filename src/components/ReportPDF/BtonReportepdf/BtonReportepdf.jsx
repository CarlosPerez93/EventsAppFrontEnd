import React, { useEffect, useState } from "react";
import {
  PDFDownloadLink,
  Page,
  Text,
  Document,
  StyleSheet,
  View,
} from "@react-pdf/renderer";

const ListEstudents = () => {
  const MyDocument = () => {
    const data = [
      {
        id: 1,
        name: "Diego Fernando Marcillo Pinzón",
        services: [
          {
            id: 1,
            name: "service 1",
          },
          {
            id: 2,
            name: "service 2",
          },
        ],
      },
    ];

    /*  useEffect(() => {
      
      apiData();
    },[])*/

    return (
      <Document>
        <Page size="LETTER" orientation="portrait" style={style.page}>
          <Text style={style.title}>Reporte</Text>
          {data.map((value, key) => {
            return (
              <View key={key}>
                <Text style={style.text}>
                  <Text style={{ fontWeight: 700 }}>Nombre: </Text>
                  {value.name}
                </Text>
                <View
                  style={{ width: "100%", height: 2, backgroundColor: "black" }}
                />
                {value.services.map((service, i) => {
                  return (
                    <View key={i} style={{ paddingLeft: 30, paddingTop: 10 }}>
                      <Text style={style.text}>{service.name}</Text>
                    </View>
                  );
                })}
              </View>
            );
          })}
        </Page>
      </Document>
    );
  };

  useEffect(() => {}, []);

  return (
    <div>
      <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Cargando..." : "Enviar Certificado"
        }
      </PDFDownloadLink>
    </div>
  );
};

export default ListEstudents;

export const style = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 30,
  },
  title: {
    fontWeight: "bold",
    alignSelf: "center",
    paddingBottom: 20,
  },
  text: {
    fontSize: 14,
  },
});
