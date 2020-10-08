import axios from "axios";

export const getPlayerPngAndConvertToBase64 = async (photo: string) => {
  const res = await axios.get(
    `https://resources.premierleague.com/premierleague/photos/players/40x40/p${photo.replace(
      "jpg",
      "png"
    )}`,
    { responseType: "arraybuffer" }
  );
  const base64 = btoa(
    new Uint8Array(res.data).reduce(
      (data, byte) => data + String.fromCharCode(byte),
      ""
    )
  );
  return `data:;base64,${base64}`;
};
