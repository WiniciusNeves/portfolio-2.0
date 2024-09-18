import Box from "./Box";
import React from 'react'; // Certifique-se de que o React está importado

interface BoxProps {
  propagateServerField: {
    title: string;
    content?: string;
    link?: string;
  };
}

interface ListProps {
  propagateServerField: {
    title: string;
  };
  children: React.ReactElement<BoxProps>[];
}

export default function List({ propagateServerField, children }: ListProps) {
  return (
    <div className="w-full max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-xl 2xl:max-w-screen-2xl border border-gray-700 rounded-lg p-4 bg-gray-900 overflow-hidden">
      <h2 className="text-gray-500 text-2xl mb-4 text-center">{propagateServerField.title}</h2>
      <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 overflow-x-auto p-4 rounded-lg bg-gray-800">
        {children.map((child) => (
          <Box key={child.props.propagateServerField.title} propagateServerField={child.props.propagateServerField} />
        ))}
      </div>
    </div>
  );
}
