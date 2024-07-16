'use client'

import React, { useState } from 'react';

const topics = [
  { title: 'Pre-Req', content: 'Understand JSX and JavaScript functions. If you understand these, the concept of components is pretty straight forward.' },
  { title: 'What Are Components?', content: 'Components are JavaScript functions starting with a capital letter that return JSX (pieces of UI).' },
  { title: 'Example', content: 'Basic components returning UI /components - /ui-components' },
  { title: 'Why Components?', content: 'Lets you combine your markup, CSS, and JavaScript into custom, reusable UI elements for your app' },
  { title: 'How To Create Components', content: '1) Define the function 2) Add Logic And Return JSX 3) Export/Import ' },
  { title: 'Nesting Components', content: 'It is perfectly fine to nest components within other components, just like HTML.' },
  { title: 'Organizing Components', content: 'Multiple components can exist in the same file. But a common practice is one component per file.' },
];

const TutorialList = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [doneTopics, setDoneTopics] = useState([]);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleDone = (title) => {
    setDoneTopics(doneTopics.includes(title)
      ? doneTopics.filter((topic) => topic !== title)
      : [...doneTopics, title]);
  };

  return (
    <div className="bg-gray-900 text-blue-200 p-8">
      <ul className="space-y-4">
        {topics.map((topic, index) => (
          <li key={index} className="p-4 bg-gray-800 rounded-lg shadow-lg">
            <div className="flex justify-between items-center">
              <button onClick={() => toggleOpen(index)} className="flex-grow text-left">
                {topic.title}
              </button>
              <button
                onClick={() => toggleDone(topic.title)}
                className={`ml-4 px-2 py-1 rounded ${doneTopics.includes(topic.title) ? 'bg-green-500' : 'bg-gray-600'} text-white`}
              >
                {doneTopics.includes(topic.title) ? 'Done' : 'Mark as Done'}
              </button>
            </div>
            {openIndex === index && (
              <div className="mt-4 bg-gray-700 p-4 rounded">
                {topic.content}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TutorialList;
