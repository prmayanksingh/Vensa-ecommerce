import Nav from "../../components/Nav";
import { nanoid } from "@reduxjs/toolkit";
import { useForm } from "react-hook-form";

const CreateProduct = () => {
  const { register, handleSubmit, reset } = useForm();

  const submiteHandler = (product) => {
    product.id = nanoid();
    console.log(product);
    reset();
  };

  return (
    <section className="text-[3.7vw] sm:text-[2.6vw] md:text-[16px] lg:text-[1.4vw] xl:text-[16px]">
      <Nav />
      <div className="h-[calc(100vh-3.2rem)] p-4 px-[1.6em] pt-[3.2em] lg:px-[3em] lg:py-[3em] xl:px-[9em] bg-[#F5F6F8] flex flex-col lg:flex-row lg:items-center gap-[3.5em] xl:gap-[9em]">
        <div className="w-full lg:w-[45%] flex flex-col gap-[1.5em] lg:gap-[2em] xl:gap-[2.3em]">
          <h1 className="text-[3.2em] lg:text-[3.7em] xl:text-[4.3em] leading-[1.2em]">
            <span className="font-bold">Create</span> &{" "}
            <span className="font-bold">Launch</span> <br /> Your Product
          </h1>
          <h3 className="text-[1em] xl:text-[1.2em] leading-[1.2em] text-gray-500">
            Fill in the product information to add new items to your catalog.
            Make them available instantly to your customers.
          </h3>
        </div>
        <div className="lg:w-[45%] xl:w-[40%] bg-white p-6 lg:p-9 xl:p-11 rounded-3xl shadow-2xl">
          <form
            onSubmit={handleSubmit(submiteHandler)}
            className="flex flex-col gap-[1.3em] lg:gap-[1.5em] xl:gap-[2em]"
          >
            <div className="flex flex-col gap-[0.2em]">
              <label className="text-[1.1em] text-gray-500" htmlFor="image">
                Image
              </label>
              <input
                {...register("image", { required: "image is required" })}
                className="px-[.9em] py-[.3em] text-[1em] rounded-md outline-none bg-gray-100 text-gray-500"
                id="image"
                type="text"
                placeholder="Enter image URL"
              />
            </div>
            <div className="flex flex-col gap-[0.2em]">
              <label className="text-[1.1em] text-gray-500" htmlFor="name">
                Name
              </label>
              <input
                {...register("name", { required: "name is required" })}
                className="px-[.9em] py-[.3em] text-[1em] rounded-md outline-none bg-gray-100 text-gray-500"
                id="name"
                type="text"
                placeholder="Enter product Name"
              />
            </div>
            <div className="flex justify-between">
              <div className="w-[50%] flex flex-col gap-[0.2em]">
                <label
                  className="text-[1.1em] text-gray-500"
                  htmlFor="category"
                >
                  Category
                </label>
                <select
                  {...register("category", {
                    required: "category is required",
                  })}
                  className="px-[.9em] py-[.5em] text-[1em] rounded-md outline-none bg-gray-100 text-gray-500"
                  id="category"
                >
                  <option value="">Select Category</option>
                  <option value="men-clothing">Men's Clothing</option>
                  <option value="women-clothing">Women's Clothing</option>
                  <option value="wallets">Wallets</option>
                  <option value="watches">Watches</option>
                  <option value="bags">Bags & Backpacks</option>
                  <option value="footwear">Footwear</option>
                  <option value="accessories">Accessories</option>
                  <option value="eyewear">Eyewear</option>
                  <option value="skincare">Skincare</option>
                  <option value="electronics">Electronics</option>
                  <option value="mobiles">Mobiles & Accessories</option>
                  <option value="headphones">Headphones & Audio</option>
                  <option value="home-decor">Home Decor</option>
                  <option value="kitchen">Kitchen Appliances</option>
                  <option value="furniture">Furniture</option>
                  <option value="fitness">Fitness & Gym</option>
                  <option value="stationery">Stationery</option>
                  <option value="toys">Toys & Games</option>
                  <option value="books">Books</option>
                </select>
              </div>
              <div className="w-[45%] flex flex-col gap-[0.2em]">
                <label className="text-[1.1em] text-gray-500" htmlFor="price">
                  Price
                </label>
                <input
                  {...register("price", { required: "price is required" })}
                  className="px-[.9em] py-[.3em] text-[1em] rounded-md outline-none bg-gray-100 text-gray-500"
                  id="price"
                  type="text"
                  placeholder="Enter price"
                />
              </div>
            </div>
            <div className="flex flex-col gap-[0.2em]">
              <label
                className="text-[1.1em] text-gray-500"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                {...register("description", {
                  required: "description is required",
                })}
                rows={3}
                className="px-[.9em] py-[.3em] text-[.9em] rounded-md outline-none bg-gray-100 text-gray-500"
                id="description"
                type="text"
                placeholder="Enter product description"
              />
            </div>
            <button className="text-[1.1em] bg-blue-500 hover:bg-blue-600 text-white py-[.4em] rounded-xl">
              Create
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CreateProduct;
