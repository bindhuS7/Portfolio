
import { Box } from "@mui/material";

const AnimatedBackground = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        zIndex: -1,
        overflow: "hidden",
        background: "black",
      }}
    >
      {[...Array(15)].map((_, i) => (
        <Box
          key={i}
          sx={{
            position: "absolute",
            bottom: "-50px",
            width: `${10 + Math.random() * 20}px`,
            height: `${10 + Math.random() * 20}px`,

            borderRadius: "50%",
            background:
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.8), rgba(255,255,255,0.1))",
            left: `${Math.random() * 100}%`,
            animation: `bubble ${6 + Math.random() * 6}s linear infinite`,
            opacity: 0.7,
          }}
        />
      ))}

      <style>
        {`
        @keyframes bubble {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          50% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(-110vh);
            opacity: 0;
          }
        }
        `}
      </style>
    </Box>
  );
};

export default AnimatedBackground;