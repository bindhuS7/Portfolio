// import { Box } from "@mui/material";

// const AnimatedBackground = () => {
//     return (
//         <Box
//             sx={{
//                 position: "fixed",
//                 width: "100%",
//                 height: "100%",
//                 top: 0,
//                 left: 0,
//                 zIndex: -1,
//                 overflow: "hidden",
//                 background: "black",
//             }}
//         >
//             {[...Array(15)].map((_, i) => (
//                 <Box
//                     key={i}
//                     sx={{
//                         position: "absolute",
//                         width: "20px",
//                         height: "20px",
//                          background:
//               "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), rgba(255,255,255,0.1))",
//             backdropFilter: "blur(3px)",
//             left: `${Math.random() * 100}%`,
//             animation: `bubble ${5 + Math.random() * 10}s linear infinite`,
//         //     opacity: 0.7
//                         // background: "linear-gradient(210deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #8b00ff)",
//                         // background: " #a9a4a4",

//                         // borderRadius: "50%",
//                         // top: `${Math.random() * 100}%`,
//                         // left: `${Math.random() * 100}%`,
//                         // animation: `float ${5 + Math.random() * 10}s infinite`
//                     }}

//         //              sx={{
//         //     position: "absolute",
//         //     bottom: "-50px",
//         //     width: `${20 + Math.random() * 40}px`,
//         //     height: `${20 + Math.random() * 40}px`,
//         //     borderRadius: "50%",
//         //     background:
//         //       "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), rgba(255,255,255,0.1))",
//         //     backdropFilter: "blur(3px)",
//         //     left: `${Math.random() * 100}%`,
//         //     animation: `bubble ${5 + Math.random() * 10}s linear infinite`,
//         //     opacity: 0.7
//         //   }}

//                 />
//             ))}

//             <style>
//                 {`
//           @keyframes float {
//             0% {
//               transform: translateY(0px);
//             }
//             50% {
//               transform: translateY(-100px);
//             }
//             100% {
//               transform: translateY(0px);
//             }
//           }
//         `}
//             </style>
//         </Box>
//     );
// };

// export default AnimatedBackground;


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