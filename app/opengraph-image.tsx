import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "black", // 👈 Black background
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 60,
          fontWeight: "bold",
        }}
      >
        <img
          src="https://www.datanyx.in/assets/datanyx25logo.png"
          alt="Datanyx 2.0"
          style={{ width: 200, height: 200, marginBottom: 40 }}
        />
      </div>
    ),
    { ...size }
  );
}