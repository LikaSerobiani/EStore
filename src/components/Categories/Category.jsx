/* eslint-disable react/prop-types */

const Category = ({ category, onChooseCategory, searchParams }) => {
  const categorySearchParams = searchParams.get("category");
  const isCategorySelected = categorySearchParams === category;

  const handleClick = () => {
    onChooseCategory(category);
  };

  return (
    <div
      className={`items-center flex cursor-pointer underline-offset-4 ${
        isCategorySelected ? "underline text-secondary" : "bg-transparent"
      }`}
      onClick={handleClick}
    >
      <h2
        className="text-secondary p-3 rounded-3xl"
        style={{ textTransform: "uppercase" }}
      >
        {category}
      </h2>
    </div>
  );
};
export default Category;
