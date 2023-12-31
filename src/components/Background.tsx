import "../scss/components/Background.scss";

const Background = () => {
  return (
    <>
      <svg
        className="background--custom"
        id="demo"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          fill="#000000"
          fill-opacity="1"
          d="M-100 -100L200 -100L200 40L-100 40Z"
          style={{
            animation: "path0 22.727272727272727s linear infinite alternate"
        }}
        />
        <path
          fill="#FF4B4B"
          fill-opacity="1"
          d="M-100 -100L200 -100L200 20L-100 20Z"
          style={{
            animation: "path1 17.857142857142858s linear infinite alternate"
        }}
        />
        <path
          fill="#FF9595"
          fill-opacity="0.7"
          d="M-100 -100L200 -100L200 50L-100 50Z"
          style={{
            animation: "path2 14.705882352941176s linear infinite alternate"
        }}
        />
      </svg>
    </>
  );
};

export default Background;
