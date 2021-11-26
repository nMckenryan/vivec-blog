import { Link } from "gatsby";
import React from "react";

 const Navbar = () => {
  return (

    <nav class="flex flex-col sm:flex-row">
        <button class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500">
            Tab 1
        </button><button class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
            Tab 2
        </button><button class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
            Tab 3
        </button><button class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
            Tab 4
        </button>

      <h3 class="inline-block">Sermons</h3>
      <Link class="inline-block" to="/">
        
      </Link>
    </nav>
  );
}
export default Navbar;
