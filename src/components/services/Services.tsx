import React from "react";

import Box from "@mui/material/Box";

import Service from "./service/Service";

const serviceList: IService[] = [
  {
    title: "Cleaning",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptates in excepturi, fugiat asperiores illo temporibus distinctio, voluptatem ipsum totam necessitatibus quis laboriosam accusamus. Animi provident dolores dolorum, quis alias ex veniam, porro atque repellendus iure vel numquam ea adipisci dignissimos repellat tempora similique nesciunt deserunt itaque enim ducimus quo.",
    image:
      "https://plus.unsplash.com/premium_photo-1667520389879-a54173824049?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
  },
  {
    title: "Cooking",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptates in excepturi, fugiat asperiores illo temporibus distinctio, voluptatem ipsum totam necessitatibus quis laboriosam accusamus. Animi provident dolores dolorum, quis alias ex veniam, porro atque repellendus iure vel numquam ea adipisci dignissimos repellat tempora similique nesciunt deserunt itaque enim ducimus quo.",
    image:
      "https://plus.unsplash.com/premium_photo-1667520389879-a54173824049?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
  },
  {
    title: "Laundry",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro voluptates in excepturi, fugiat asperiores illo temporibus distinctio, voluptatem ipsum totam necessitatibus quis laboriosam accusamus. Animi provident dolores dolorum, quis alias ex veniam, porro atque repellendus iure vel numquam ea adipisci dignissimos repellat tempora similique nesciunt deserunt itaque enim ducimus quo.",
    image:
      "https://plus.unsplash.com/premium_photo-1667520389879-a54173824049?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
  },
];

export default function Services() {
  return (
    <Box my={3}>
      {serviceList.map((service, idx) => (
        <Service key={idx} service={service} reverse={idx % 2 !== 0} />
      ))}
      {/* <Box sx={{ minHeight: "40vh" }}>
        <Container>
          <Grid container>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Box mr={2}>
                <Typography variant="h5" mb={2}>
                  Cleaning
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
                  voluptates in excepturi, fugiat asperiores illo temporibus
                  distinctio, voluptatem ipsum totam necessitatibus quis
                  laboriosam accusamus. Animi provident dolores dolorum, quis
                  alias ex veniam, porro atque repellendus iure vel numquam ea
                  adipisci dignissimos repellat tempora similique nesciunt
                  deserunt itaque enim ducimus quo.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  width: "100%",
                  height: "40vh",
                  position: "relative",
                }}
              >
                <Image
                  src={
                    "https://plus.unsplash.com/premium_photo-1667520389879-a54173824049?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
                  }
                  alt="cleaner"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                  priority
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box> */}
    </Box>
  );
}
