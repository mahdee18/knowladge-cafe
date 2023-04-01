import React from 'react';

const Question = () => {
    return (
        <div>
            <div className='p-12 text-center'>
            <h1 className='py-12 text-4xl font-sans'>Here Are the 4 Questions Answer!</h1>
            <div tabIndex={0} className="mx-auto collapse collapse-arrow border border-base-300 bg-base-100 rounded-box sm:w-1/2 lg:w-2/3 my-8">
                <div className="collapse-title text-xl font-medium bg-gray-400">
                    1. What is the difference between props vs states?
                </div>
                <div className="collapse-content text-sm sm:text-base ">
                    <p className='py-5'>In React, both props and state are used to store data and affect how components are rendered, but they are used for different purposes and have different characteristics. <br /> <br />
                        <strong>Props: (props is short for "properties")</strong> are read-only values that are passed into a component from its parent component. Props are immutable and cannot be changed by the component itself. they can only be updated by the parent component that owns them. <br /> <br />
                        <strong>State:</strong> is used to store values that can be changed by the component itself. It represents the internal state of a component and can be updated using the setState() method. When the state of a component changes, React automatically re-renders the component to reflect the new state.
                        

                        </p>
                </div>
            </div>
            <div tabIndex={0} className="mx-auto collapse collapse-arrow border border-base-300 bg-base-100 rounded-box sm:w-1/2 lg:w-2/3 my-5">
                <div className="collapse-title text-xl font-medium bg-gray-400">
                    2.How does useState work?
                </div>
                <div className="collapse-content text-sm sm:text-base ">
                    <p className='py-5'><strong>useState:</strong> is a hook that allows functional components to manage state by returning a stateful value and a function to update the value. It can be used with any type of state value, and React will automatically update the component when the state value changes.</p>
                </div>
            </div>
            <div tabIndex={0} className="mx-auto collapse collapse-arrow border border-base-300 bg-base-100 rounded-box sm:w-1/2 lg:w-2/3 my-5">
                <div className="collapse-title text-xl font-medium bg-gray-400">
                    3.What is the purpose of useEffect other than fetching data?
                </div>
                <div className="collapse-content text-sm sm:text-base ">
                    <p className='py-5'><strong>useEffect:</strong> is a hook in React that can be used to manage side effects in functional components, such as updating the document title, subscribing to external events, or managing animations. It allows you to perform side effects in a declarative and predictable way, while keeping your component code clean and readable..</p>
                </div>
            </div>
            <div tabIndex={0} className="mx-auto collapse collapse-arrow border border-base-300 bg-base-100 rounded-box sm:w-1/2 lg:w-2/3 my-5">
                <div className="collapse-title text-xl font-medium bg-gray-400">
                    4.How Does React work?
                </div>
                <div className="collapse-content text-sm sm:text-base ">
                    <p className='py-5'><strong>React:</strong>  is a popular JavaScript library for building user interfaces. It was created by Facebook and is now widely used in both web and mobile app development. At a high level, React works by allowing developers to create reusable components that can be combined to build complex UIs. <br /> <br />
                     React works involves understanding the concepts of components, state and props, rendering and virtual DOM, lifecycle methods, and event handling. These concepts are the building blocks of building UI with React </p>
                </div>
            </div>

        </div>
        </div>
    );
};

export default Question;