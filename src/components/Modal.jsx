import React from "react";

const Modal = ({ isOpen, categories }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute left-0 mt-2 w-[600px] bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
      <div className="flex p-6 space-x-12">
        {categories.map((category, index) => (
          <div key={index} className="w-1/2">
            <h3 className="text-lg font-semibold text-gray-700">{category.title}</h3>
            <div className="mt-4 space-y-4">
              {category.subcategories.map((subcategory, subIndex) => (
                <div key={subIndex} className="flex flex-col space-y-1">
                  <h4 className="font-medium text-gray-600">{subcategory.title}</h4>
                  {subcategory.items.map((item, itemIndex) => (
                    <a key={itemIndex} href={item.link} className="text-sm text-gray-700 hover:underline">
                      {item.name}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Modal;
