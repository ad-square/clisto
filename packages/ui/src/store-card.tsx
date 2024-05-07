interface Props {
  id: number;
  title: string;
  location: string;
  logoImgUrl: string;
  bannerImgUrl: string;
}

export const StoreCard = ({
  title,
  location,
  logoImgUrl,
  bannerImgUrl,
}: Props) => {
  return (
    <>
      <div className="w-screen mb-4 relative rounded-xl border border-black h-60">
        <div className="flex flex-col">
          <img src={bannerImgUrl} />
          <div className="h-4/6">Hello</div>
        </div>
      </div>
    </>
  );
};
