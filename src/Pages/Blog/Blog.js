import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

      <div className="max-w-lg p-4 rounded-lg shadow-md bg-white text-gray-800">
        <div className="space-y-4">
          <div className="space-y-2">
            <img src="https://miro.medium.com/max/1012/1*Z5SpsmDvk67BIImwHvh_cQ.png" alt="" className="block object-cover object-center w-full rounded-md h-72 bg-gray-500" />
          </div>
          <div className="space-y-2">
            <Link rel="noopener noreferrer" href="#/" className="block">
              <h3 className="text-xl font-semibold text-blue-600">Difference between SQL and NoSQL</h3>
            </Link>
            <p className="leading-snug text-gray-600">SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
          </div>
          <Link to={`/sqlvsnsql`}>
            <button className='w-full mt-4 py-3 font-medium bg-activeColor text-white transition duration-200 rounded-md shadow-md hover:bg-gray-300 hover:text-activeColor text-xl drop-shadow-md'>View Details</button>
          </Link>
        </div>
      </div>

      <div className="max-w-lg p-4 rounded-lg shadow-md bg-white text-gray-800">
        <div className="space-y-4">
          <div className="space-y-2">
            <img src="https://miro.medium.com/max/800/1*ulCspc56K_swYE1uuel_TA.png" alt="" className="block object-cover object-center w-full rounded-md h-72 bg-gray-500" />
          </div>
          <div className="space-y-2">
            <Link rel="noopener noreferrer" href="#/" className="block">
              <h3 className="text-xl font-semibold text-indigo-900">What is JWT, and how does it work?</h3>
            </Link>
            <p className="leading-snug text-gray-600">JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.</p>
          </div>
          <Link to={`/jwt`}>
            <button className='w-full mt-4 py-3 font-medium bg-activeColor text-white transition duration-200 rounded-md shadow-md hover:bg-gray-300 hover:text-activeColor text-xl drop-shadow-md'>View Details</button>
          </Link>
        </div>
      </div>

      <div className="max-w-lg p-4 rounded-lg shadow-md bg-white text-gray-800">
        <div className="space-y-4">
          <div className="space-y-2">
            <img src="https://miro.medium.com/max/1012/1*Z5SpsmDvk67BIImwHvh_cQ.png" alt="" className="block object-cover object-center w-full rounded-md h-72 bg-gray-500" />
          </div>
          <div className="space-y-2">
            <Link rel="noopener noreferrer" href="#/" className="block">
              <h3 className="text-xl font-semibold text-blue-600">Difference between SQL and NoSQL</h3>
            </Link>
            <p className="leading-snug text-gray-600">SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
          </div>
          <Link to={`/sqlvsnsql`}>
            <button className='w-full mt-4 py-3 font-medium bg-activeColor text-white transition duration-200 rounded-md shadow-md hover:bg-gray-300 hover:text-activeColor text-xl drop-shadow-md'>View Details</button>
          </Link>
        </div>
      </div>

      <div className="max-w-lg p-4 rounded-lg shadow-md bg-white text-gray-800">
        <div className="space-y-4">
          <div className="space-y-2">
            <img src="https://miro.medium.com/max/1012/1*Z5SpsmDvk67BIImwHvh_cQ.png" alt="" className="block object-cover object-center w-full rounded-md h-72 bg-gray-500" />
          </div>
          <div className="space-y-2">
            <Link rel="noopener noreferrer" href="#/" className="block">
              <h3 className="text-xl font-semibold text-blue-600">Difference between SQL and NoSQL</h3>
            </Link>
            <p className="leading-snug text-gray-600">SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
          </div>
          <Link to={`/sqlvsnsql`}>
            <button className='w-full mt-4 py-3 font-medium bg-activeColor text-white transition duration-200 rounded-md shadow-md hover:bg-gray-300 hover:text-activeColor text-xl drop-shadow-md'>View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;