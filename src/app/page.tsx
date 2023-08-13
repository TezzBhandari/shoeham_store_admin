import Header from "@/components/Header";
import React, { useState } from "react";

export default function Home() {
  return (
    <>
      <Header />
    </>
    // <div className="flex h-screen">
    //   {/* Sidebar */}
    //   <nav className="bg-gray-900 text-white w-1/4 p-4 overflow-y-auto">
    //     <ul>
    //       <li>
    //         <a href="#" className="block py-2 px-4 text-gray-300 font-bold">
    //           Dashboard
    //         </a>
    //       </li>
    //       <li>
    //         <a href="#" className="block py-2 px-4 text-gray-300 font-bold">
    //           Products
    //         </a>
    //       </li>
    //       <li>
    //         <a href="#" className="block py-2 px-4 text-gray-300 font-bold">
    //           Orders
    //         </a>
    //       </li>
    //       <li>
    //         <a href="#" className="block py-2 px-4 text-gray-300 font-bold">
    //           Customers
    //         </a>
    //       </li>
    //       {/* Add more links as needed */}
    //     </ul>
    //     <div className="mt-4">
    //       <h2 className="text-lg font-bold">Categories</h2>
    //       <ul>
    //         <li>
    //           <a
    //             href="#"
    //             className="block py-2 px-4 text-gray-300 hover:text-white"
    //           >
    //             Electronics
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#"
    //             className="block py-2 px-4 text-gray-300 hover:text-white"
    //           >
    //             Clothing
    //           </a>
    //         </li>
    //         <li>
    //           <a
    //             href="#"
    //             className="block py-2 px-4 text-gray-300 hover:text-white"
    //           >
    //             Books
    //           </a>
    //         </li>
    //         {/* Add more categories */}
    //       </ul>
    //     </div>
    //   </nav>
    //   {/* Main content */}
    //   <main className="bg-gray-100 w-3/4 p-4 overflow-y-auto">
    //     {/* Your content goes here */}
    //     <h1 className="text-2xl font-bold">Welcome to the Admin Panel</h1>
    //     <p className="mt-4">
    //       This is the main content area. Here, you can manage products, orders,
    //       and customers.
    //     </p>
    //     <p className="mt-4">
    //       You can use the sidebar to navigate between different sections of the
    //       admin panel.
    //     </p>
    //     <div className="h-96 bg-white mt-4 p-4">
    //       <h2 className="text-lg font-bold">Recent Orders</h2>
    //       <ul className="mt-2">
    //         <li>
    //           Order #12345 - <span className="text-green-600">Completed</span>
    //         </li>
    //         <li>
    //           Order #67890 - <span className="text-yellow-600">Pending</span>
    //         </li>
    //         {/* Add more recent orders */}
    //       </ul>
    //     </div>
    //   </main>
    // </div>
  );
}
