import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const JsVsNode = () => {
    useTitle('Js Vs NodeJs')
    return (
        <div className='max-w-5xl mx-auto flex flex-col gap-4 text-lg text-justify'>
            <img src="https://www.atliq.com/wp-content/uploads/2022/06/Know-the-difference-between-javascript-and-node-js-1-1-1.jpg" className='rounded-lg object-cover object-center' alt="" />
            <h2 className='text-2xl'>What is the difference between javascript and Node JS?</h2>
            <h4 className='font-bold text-lg'>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</h4>
            <p>Javascript is a simple object-oriented programming language for building interactive HTML pages. JavaScript is also commonly used in the development of games and mobile applications. The program can only be executed and run in an internet browser because it is interpreted as scripting. To run and execute the code outside the browser, we can utilize Node.js.</p>
           
            <p>It's also known as a browser settings language because it may be used for client-side and server-side programming. Brendan Eich of Netscape designed it, and it was first released in 1995. Before being renamed JavaScript, the language was known as LiveScript. The programming language C has a significant influence on JavaScript's syntax. The filename extension for JavaScript is.js. Angular js node js are both also based on JavaScript.</p>

            <p><span className='text-2xl font-bold text-activeColor'>#</span><br /> JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language.</p>
            <p>As a result, it is used to create network-centric applications. It's a networked system made for data-intensive real-time applications. If we compare node js vs. python, it is clear that node js will always be the preferred option.</p>

            <p><span className='text-2xl font-bold text-activeColor'>#</span><br /> JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.</p>
            <p><span className='text-2xl font-bold text-activeColor'>#</span><br /> Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported.</p>
           
            <p><span className='text-2xl font-bold text-activeColor'>#</span><br /> A specific non-blocking operation is required to access any operating system. There are a few essential objects in JavaScript, but they are entirely OS-specific</p>
            
            <p>Node.js, on the other hand, can now operate non-blocking software tasks out of any JavaScript programming. It contains no OS-specific constants. Node.js establishes a strong relationship with the system files, allowing companies to read and write to the hard drive.</p>

            <p><span className='text-2xl font-bold text-activeColor'>#</span><br /> The critical benefits of JavaScript include a wide choice of interfaces and interactions and just the proper amount of server contact and direct visitor input.</p>

            <p>Node.js, on the other hand, offers node package management with over 500 modules and the capacity to handle many requests at the same time. It also offers the unique ability to enable microservice architecture and the Internet of Things. Even when comparing node js vs. react js, node js always wins.</p>

            <Link to={`/blog`}>
                <button className='w-full mt-4 py-3 font-medium bg-normalColor text-white transition duration-200 rounded-md shadow-md hover:bg-gray-300 hover:text-activeColor text-xl drop-shadow-md'>Go Back</button>
            </Link>
        </div>
    );
};

export default JsVsNode;