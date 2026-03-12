export const primaryHead = { fontSize: "2vw", color: '#FFFFFF', fontWeight: 'bold', textTransform: "capitalize" }
export const secondaryHead = { fontSize: "1vw", color: '#FFFFFF', fontWeight: 'bold' }
export const normalText = { color: "#B0BEC5" }
export const normalTextwithtextDecorationNone = { color: "#B0BEC5", textDecoration: "none" }

export const aboutBox = {
    display: "flex",

    flexDirection: "column",
    alignItems: "flex-center",
    height: "55%",
    lineHeight: 2,
    border: "2px solid transparent",
    borderRadius: "12px",

    backgroundImage: `
      linear-gradient(#1b0831, #1b0831),
      linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet)
    `,
    backgroundOrigin: "border-box",
    backgroundClip: "padding-box, border-box",
    width: "30%",
    padding: "1%",
    textAlign: "left",
}
export const skillBox = { display: "flex", justifyContent: "flex-start", flexDirection: "column", alignItems: "start", width: "22%", padding: "1%", height: "45%" }