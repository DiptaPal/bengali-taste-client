import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const NodeJS = () => {
    useTitle('Node Js')
    return (
        <div className='max-w-5xl mx-auto flex flex-col gap-4 text-lg text-justify'>
            <img src="https://www.tutorialandexample.com/wp-content/uploads/2020/11/Node.js-Event-Loop-1.png" className='rounded-lg object-cover object-center' alt="" />
            <h2 className='text-2xl'>How does Node JS handle multiple requests at the same time?</h2>
            <h4 className='font-bold text-lg'>We know NodeJS application is single-threaded. Say, if processing involves request A that takes 10 seconds, it does not mean that a request which comes after this request needs to wait 10 seconds to start processing because NodeJS event loops are only single-threaded. The entire NodeJS architecture is not single-threaded.</h4>
            <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. </p>
            <p>If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
            <h2 className='text-2xl font-semibold'>How to scale your NodeJS application with Cluster Module? </h2>

            <p>A single instance of Node.js runs in a single thread. If you have a multi-core system then you can utilize every core. Sometimes developer wants to launch a cluster of NodeJS process to take advantage of the multi-core system.The cluster module allows easy creation of child processes that all share the same server ports.</p>

            <p>As most modern kernels are multi-threaded, they can manage numerous processes running in the background. When one of these processes ends, the kernel sends the message to Node.js so that the suitable callback may be included in the poll queue to be processed.</p>
            <p>Normally, there is an event loop present in most browsers for every browser tab, making every process isolated and avoiding a web page with heavy execution or infinite loops to block the whole browser. The environment handles numerous concurrent event loops for handling Application Programming Interface (API) calls just in case. Web Workers run in their event loop as well.</p>
            <h2 className='text-2xl font-semibold'>The Concept of blocking the event loop</h2>
            <p>Any script file of JavaScript that takes a very long time to set back control to the event loop would block the processing of any script on the page, even it can block the UI thread, and the user cannot scroll the page, click around and many more.</p>

            <p>In JavaScript, most of the I/O primitives are non-blocking, including filesystem processes, network requests, and many more.  JavaScript is centered on callbacks, and more recently, on async/await, and promises as being blocking are the exception.</p>

            <h2 className='text-2xl font-semibold'>Understanding the call stack</h2>

            <p>The call stack is a ‘Last In, First Out’ (LIFO) data structure comprises the address at which the process will continue and often occur local parameters and variables from each call.</p>

            <p>The event loop regularly inspects the call stack to check whether there is any function that needs to be executed or not. This process includes various functions that it discovers to the call stack and processes them in order.</p>

            <h2 className='text-2xl font-semibold'>Understanding the Node.js Event-Driven programming</h2>

            <p>Before we jump into the Node.js event loop concept and its working, let's discuss Node.js' various parts as a whole.</p>
            <ul className='pl-5'>
                <li className='list-disc'>
                    <span className='font-semibold'>Chrome V8 Engine:</span> Chrome V8 Engine is a JavaScript open-source, high-performance engine designed for Google Chrome and is written in C++.
                </li>
                <li className='list-disc'>
                    <span className='font-semibold'>The C libuv library:</span> libuv is a library primarily developed for Node.js that supports multiple platforms and focuses on asynchronous I/O.
                </li>
                <li className='list-disc'>
                    <span className='font-semibold'>The Operating System:</span> Operating System is system software used to manage computer software and hardware resources and provide common computer programs. The Operating System is a requirement for all the computer programs to function, except the firmware.
                </li>
            </ul>

            <p>The execution of JavaScript code depends upon the Chrome V8 engine. It works as a core for Node.js, and it’s functioning as it can be embedded into a C++ application. The V8 Engine takes input as a string in JavaScript, processes it and then prints the output to stdout. Though, there is a problem with this as of the Synchronous working of JavaScript.</p>

            <p>However, one can ask a question – <span className='font-semibold'>While performing asynchronous operations</span>,</p>

            <h2 className='text-2xl font-semibold'>How does Node.js allow V8 Engine to execute synchronous JavaScript code?</h2>
            <p>
                To answer the above question, let’s see a diagrammatic illustration of the communication channel between the several components of Event-Driven I/O of Node.js, given below.
            </p>


            <p><span className='font-semibold'>The whole process of diagram (above) can be broken into steps, which are as follows:</span></p>

            <ul className='pl-5'>
                <li className='list-decimal'>
                    A JavaScript code runs on a V8 engine, which needs an asynchronous task to be executed.
                </li>
                <li className='list-decimal'>
                    A request is submitted by the Node.js libuv library to the OS for performing the task.
                </li>
                <li className='list-decimal'>
                    This task is then placed onto a queue of events that will finish the task later in the future.
                </li>
                <li className='list-decimal'>
                    The event loop consistently inspects the queue of events to see whether any task in the queue is completed or not.
                </li>
                <li className='list-decimal'>
                    If any of the tasks is found completed by the event loop, it is returned for continuing the execution of the resultant JavaScript callback.
                </li>
            </ul>

            <p> Hence, from observing the above diagram and understanding the points, we can conclude that the Node.js event loop is nothing but an endless looping process that checks the event queue to see if any processes has been completed or not.</p>

            <Link to={`/blog`}>
                <button className='w-full mt-4 py-3 font-medium bg-normalColor text-white transition duration-200 rounded-md shadow-md hover:bg-gray-300 hover:text-activeColor text-xl drop-shadow-md'>Go Back</button>
            </Link>
        </div>
    );
};

export default NodeJS;