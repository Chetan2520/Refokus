import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products() {
  var products = [
    {
      title: "Arqitel",
      description:
        "Arqitel description for product    with title      and description in the product description field of the product description field of the product description",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "TTR description for product    with title      and description in the product description field of the product description field of the product description",
      live: true,
      case: false,
    },
    {
      title: "Yahoo !",
      description:
        "Yahoo ! description for product    with title      and description in the product description field of the product description field of the product description",
      live: true,
      case: true,
    },
    {
      title: "Silvr",
      description:
        "Silvr description for product    with title      and description in the product description field of the product description field of the product description",
      live: true,
      case: true,
    },
  ];
  const [pos, setPos] = useState(0);
  const mover = (val) => {
    setPos(val * 23);
  };
  return (
    <div className="mt-32 relative">
      {products.map((val, index) => (
        <Product mover={mover} count={index} val={val} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          className="window absolute w-[32rem] h-[23rem] bg-white left-[44%]  overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            className="  w-full h-full bg-sky-500 "
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          >
            <video autoPlay muted loop>
              <source src="https://cdn.refokus.com/website/2022/videos/summon.webm" />
            </video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            className="  w-full h-full bg-sky-600 "
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          >
            <video autoPlay muted loop>
              <source src="  https://cdn.refokus.com/website/2022/videos/rainfall.webm" />
            </video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            className="  w-full h-full bg-sky-700 "
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          >
            <video autoPlay muted loop>
              <source src=" https://cdn.refokus.com/website/2022/videos/yahoo.webm" />
            </video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            className="  w-full h-full bg-sky-800 "
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          >
            <video autoPlay muted loop>
              <source src="  https://cdn.refokus.com/website/2022/videos/Silvr.webm" />
            </video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
