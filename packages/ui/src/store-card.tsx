interface StoreCardProps {
  title: string;
  location: string;
  logoImgUrl: string;
  bannerImgUrl: string;
  to: string;
}

export const StoreCard = ({
  title,
  location,
  logoImgUrl,
  bannerImgUrl,
  to,
}: StoreCardProps) => {
  return (
    <div className="h-58  border-black h w-full">
      <div className="flex flex-col h-full w-full">
        <div className="w-full relative h-1/2">
          <img src={bannerImgUrl} />
          <img
            src={logoImgUrl}
            className="h-28 absolute right-2 top-14 rounded-lg border border-black"
          />
        </div>
        <div className="w-full h-full flex">
          <div className="w-2/3 h-full p-2">
            <h1 className="text-3xl font-bold">{title.toUpperCase()}</h1>
          </div>
          <div className="w-1/3 h-full p-4 flex justify-center items-end ">
            <a href={to}>
              <button className="text-lg font-semibold border-black border px-6 rounded-xl">
                visit
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
