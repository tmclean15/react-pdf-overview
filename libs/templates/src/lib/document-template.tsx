import React from "react";
import {
  Document,
  Page,
  View,
  Image,
  Text,
  Link,
  Canvas,
  StyleSheet,
} from "@react-pdf/renderer";
import { Title, Table, TableProps, Divider } from "./views";

const styles = StyleSheet.create({
  document: {
    padding: "0.3in",
    fontSize: 10,
  },
  body: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: "0.3in",
  },
  bodyParagraph: {
    flexBasis: "60%",
    border: "solid",
    fontSize: 10,
  },
  bodyImage: {
    flexBasis: "40%",
    margin: "0.3in",
  },
  linkContainer: {
    display: "flex",
    flexDirection: "row",
  },
  link: {
    textDecoration: "underline",
    textDecorationStyle: "double",
  },
  chartImage: {
    height: "6in",
    width: "100%",
  },
});

export type DocumentTemplateProps = {
  title: string;
  paragraph: string;
  src: string;
  tableData: TableProps;
  chartImage:
    | string
    | {
        data: Buffer;
        format: "png" | "jpg";
      };
};

export const DocumentTemplate = ({
  title,
  paragraph,
  src,
  tableData,
  chartImage,
}: DocumentTemplateProps): JSX.Element => {
  return (
    <Document>
      <Page style={styles.document} size="A4">
        <Title>{title}</Title>
        <View style={styles.body}>
          <Text style={styles.bodyParagraph}>{paragraph}</Text>
          <Image src={src} style={styles.bodyImage} />
        </View>
        <View style={styles.linkContainer}>
          <Text>Link to Report: </Text>
          <Link
            src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            style={styles.link}
          >
            Click Me!
          </Link>
        </View>
        <Divider />
        <Table {...tableData} />
        <Image src={chartImage} style={styles.chartImage} />
      </Page>
    </Document>
  );
};
