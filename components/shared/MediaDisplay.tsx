import Image from "next/image";

interface MediaDisplayProps {
  files: string[];
}

const MediaDisplay: React.FC<MediaDisplayProps> = ({ files }) => {
  return (
    <>
      {files.map((fileUrl, index) => (
        <div
          key={index}
          className="rounded-md overflow-hidden relative w-full h-[500px] "
        >
          {fileUrl.endsWith(".mp4") ? (
            <video
              key={index}
              className=" h-full w-full object-cover"
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
                className="h-full w-full object-cover"
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
