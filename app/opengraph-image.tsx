import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#17211f",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px"
        }}
      >
        <div style={{ color: "#d9b766", fontSize: 30, fontWeight: 700 }}>Web Prophecy</div>
        <div style={{ marginTop: 28, maxWidth: 920, fontSize: 72, lineHeight: 1.05, fontWeight: 700 }}>
          Sites web modernes pour paroisses catholiques
        </div>
        <div style={{ marginTop: 30, maxWidth: 820, color: "#d7d3cc", fontSize: 30, lineHeight: 1.35 }}>
          Horaires, sacrements, dons, catéchisme, présence locale et communication paroissiale.
        </div>
      </div>
    ),
    size
  );
}
