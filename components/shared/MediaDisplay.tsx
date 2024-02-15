import Image from "next/image";

interface MediaDisplayProps {
  files: string[];
}

const MediaDisplay: React.FC<MediaDisplayProps> = ({ files }) => {
  return (
    <>
      {files.map((fileUrl, index) => (
        <div key={index} className="w-96 h-96">
          {fileUrl.endsWith(".mp4") ? (
            <video
              key={index}
              className=" h-[500px] w-[1100px]"
              autoPlay
              loop
              muted
              onError={(e) => {
                console.error(`Error loading video: ${e}`);
              }}
            >
              <source src={fileUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="relative h-full w-full">
              <Image
                key={index}
                className="h-96 w-96"
                src={fileUrl}
                alt=""
                onError={(e) => {
                  console.error(`Error loading image: ${e}`);
                }}
                fill
              />
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default MediaDisplay;
