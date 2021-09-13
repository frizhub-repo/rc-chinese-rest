import React, { useState, useEffect } from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { Box } from "@material-ui/core";
import { getSocialImages } from "../../api/cms";

function UserPhotos() {
  const [socialImages, setSocialImages] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log({ socialImages });

  const fetchSocialImages = async () => {
    try {
      setLoading(true);
      const res = await getSocialImages();
      setSocialImages(res?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);

      console.log(error);
    }
  };

  useEffect(() => {
    fetchSocialImages();
  }, []);
  return (
    <>
      {loading ? (
        <Box display="flex" flexWrap="wrap" mt="20px" mb="20px">
          {[...Array(5).keys()].map((i) => (
            <Box width="20%" pr="20px">
              <Skeleton variant="rect" height={200} />
            </Box>
          ))}
        </Box>
      ) : (
        <div className="mt-0 flex flex-wrap ">
          {socialImages?.map((image) => (
            <div className="w-1/4 " style={{ height: "200px" }}>
              <img className="w-full h-full object-cover" src={image} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default UserPhotos;
