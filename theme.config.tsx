import Link from "next/link";

const themeConfig = {
  logo: (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        justifyContent: "center", // Adjust based on md: prefix in your TailwindCSS
        color: "white",
      }}
    >
      <svg
        style={{
          height: "40px",
          backgroundColor: "#6366F1",
          color: "white",
          //   padding: "2px",
          borderRadius: "9999px",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "2",
          padding: "10px",
        }}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span style={{ marginLeft: "3px", fontSize: "large" }}>YourFolio</span>
    </div>
  ),
  project: {
    link: "https://github.com/kanhaiyasuthar0/your-folio",
  },
  // ... other theme options
};

export default themeConfig;
