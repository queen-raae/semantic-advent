import { SITE } from "@config";

export default () => {
  return (
    <div
      style={{
        background: "#bb010b",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "48px 64px",
        color: "snow",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <p style={{ fontSize: 72, fontWeight: "bold" }}>{SITE.title}</p>
        <p style={{ fontSize: 28 }}>
          Just as a compass directs a ship through uncharted waters,{" "}
          <bold>Semantic HTML</bold> provides the navigation for your web
          content. <bold>Semantic HTML</bold> communicates purpose and context
          to web browsers, search engines, and accessibility aids – sign up now
          and receive byte-sized emails this advent with real-world use cases!
        </p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          width: "100%",
          fontSize: 28,
        }}
      >
        <span style={{ overflow: "hidden", fontWeight: "bold" }}>
          {new URL(SITE.website).hostname}
        </span>
      </div>
    </div>
  );
};
