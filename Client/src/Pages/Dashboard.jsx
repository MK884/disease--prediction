import React from "react";
import Check from "../Components/Check";
import { Box, Paper, Typography } from "@mui/material";
import BarChart from "../Components/dasboard/BarChart";
import { useSelector } from "react-redux";


const Dashboard = () => {

  const { isReady, predictedClass } = useSelector(state=> state.prediction)

  const isResultReady = isReady;

  return (
    <Box sx={{}}>
      <Box
        sx={{
          display: isResultReady && "flex",
          width: "100%",
          flexDirection: "row",
          gap: 2,
        }}
      >
        <Paper
          sx={{
            p: 2,
            borderRadius: 3,
            minWidth: "40%",
            maxWidth: "100%",
          }}
        >
          <Check />
        </Paper>
        <Paper
          sx={{
            width: "100%",
            display: isResultReady ? "block" : "none",
            p: 2,
            borderRadius: 3,
          }}
        >
          <Typography fontWeight={700} fontSize={26}>
            Result:-
          </Typography>
          <Typography fontSize={20} fontWeight={600} color="red">
            You have {predictedClass}
          </Typography>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
            perspiciatis soluta tenetur quo minima doloribus porro quod,
            repellendus voluptatum incidunt enim, animi vitae accusamus sit amet
            alias magni quaerat. Ex, impedit in at nobis tempore excepturi
            blanditiis nam dicta exercitationem eos iusto repellat fugiat
            temporibus culpa id dolorum perspiciatis dolor a mollitia quisquam
            modi reiciendis ratione vitae asperiores? Illo, tempore saepe
            voluptate, commodi totam libero sit alias accusamus aliquid, illum
            adipisci? Quaerat aliquam saepe magnam numquam hic maiores expedita
            voluptatum fuga eos repellat neque iste ipsam adipisci et ducimus
            fugit voluptate, quasi ut, natus laudantium beatae quidem delectus a
            vel? Rerum perspiciatis ipsa incidunt consectetur quae sed et
            laborum in optio similique. Rerum necessitatibus laudantium debitis
            non temporibus aut eligendi! Consectetur esse error pariatur
            perferendis, asperiores sunt nostrum cum veritatis ex placeat
            voluptatibus blanditiis velit rerum similique quidem deleniti optio,
            illum et corrupti quaerat saepe eveniet! Ipsum magnam quo dicta
            error culpa tenetur accusantium dolores repudiandae sunt quas, quis
            architecto? Nobis, laborum dolores, totam, quos deleniti earum error
            consectetur aspernatur tenetur explicabo nostrum quae vitae eos
            quibusdam tempore ipsam dolore? Quia reiciendis dolorum soluta et
            repellat nam impedit labore ducimus rem? Veritatis nostrum alias
            nesciunt recusandae, odit eius eveniet pariatur!
          </Typography>
        </Paper>
      </Box>
      <BarChart/>
    </Box>
  );
};

export default Dashboard;
