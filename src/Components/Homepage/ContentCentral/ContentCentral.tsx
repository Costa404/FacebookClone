import CreatePostSection from "./CreatePostSection";

const ContentCentral = () => {
  return (
    <div
      style={{ width: "calc(100% / 3)", minWidth: "80rem" }}
      className="
    bg-danger"
    >
      <CreatePostSection />
      ContentCentral
    </div>
  );
};

export default ContentCentral;
