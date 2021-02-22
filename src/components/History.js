import React from "react";

export const History = (props) => {
  return (
    <div className={`${props.theme}-container flex justify-center`}>
      <div className="-my-2 overflow-x-auto sm:-mx-4 lg:-mx-6 w-8/12">
        <div className="py-2 align-middle inline-block min-w-full sm:px-5 lg:px-6">
        <div className="shadow overflow-hidden border-b border-gray-200">
            <table className="table-fixed min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">N</th>
                  <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First</th>
                  <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Operation</th>
                  <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Second</th>
                  <th scope="col" className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Result</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td>1</td>
                  <td>{localStorage.getItem("firstOperand")}</td>
                  <td>/</td>
                  <td>{localStorage.getItem("secondOperand")}</td>
                  <td>{localStorage.getItem("total")}</td>
                </tr>
              </tbody>
            </table>
            </div>
        </div>
      </div>
    </div>
  );
};
