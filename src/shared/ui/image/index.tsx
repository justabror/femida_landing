import Image from "next/image";

export function ImageDynamic({ imagePath }: { imagePath: string }) {
  return (
    <Image
      src={imagePath}
      alt={`Dynamic image: ${imagePath}`}
      width={500}
      height={500}
    />
  );
}
