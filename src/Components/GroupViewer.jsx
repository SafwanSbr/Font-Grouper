import React from "react";

const GroupViewer = ({ fontGroups, onDeleteGroup }) => {
  return (
    <div className="font-viewer mt-6">
      <h4 className="text-lg font-bold mb-4">All Font Groups</h4>

      {fontGroups.length > 0 ? (
        <table className="min-w-full table-auto border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-900 text-white">
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Fonts</th>
              <th className="border px-4 py-2">Count</th>
              <th className="border px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {fontGroups.map((group, i) => (
              <tr key={i} className="bg-gray-50">
                <td className="border px-4 py-2">Group {i + 1}</td>

                <td className="border px-4 py-2">
                  {group.map((g) => g.name).join(", ")}
                </td>

                <td className="border px-4 py-2 text-center">
                  {group.length}
                </td>

                <td className="border px-4 py-2 text-center">
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                    onClick={() => onDeleteGroup(i)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No font groups available.</p>
      )}
    </div>
  );
};

export default GroupViewer;
