import React from "react";

interface Props {
  workData: {
    userName?: { name: string; _id: string; userName: string };
    workDetails?: string;
    finishDeadline: string;
    updatedAt: string;
    workConfirm?: string;
    remarks?: string;
  };
  onClose: (value: boolean) => void;
}
//testing
// const workData = {
//   userName: { name: "Rajesh", _id: "123", userName: "rajesh" },
//   workDetails: "Work Details",
//   finishDeadline: "2021-09-09",
// };

const ViewWorks = ({ workData, onClose }: Props) => {
  console.log("workData :)", workData);
  // @ts-ignore
  return (
    <form className="p-6 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 w-full">
      <div className="flex w-full mb-6">
        <p className="font-bold text-lg">Work Generate</p>
        <span
          onClick={() => onClose(false)}
          className="ml-auto cursor-pointer text-xl"
        >
          &times;
        </span>
      </div>
      <div className="grid gap-6 mb-6 md:grid-cols-3">
        <div>
          <label
            htmlFor="finishDeadline"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Finish Deadline
          </label>
          <input
            type="text"
            name="finishDeadline"
            id="finishDeadline"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            // value={workData?.finishDeadline}
            value={new Date(workData.finishDeadline).toLocaleDateString()}
            readOnly
          />
        </div>

        <div className="">
          <label
            htmlFor="user"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            User Name
          </label>
          <input
            type="text"
            name="user"
            id="user"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:opacity-50"
            value={workData?.userName?.name}
            readOnly
          />
        </div>

        <div className="">
          <label
            htmlFor="user"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Modified Date
          </label>
          <input
            type="text"
            name="user"
            id="user"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:opacity-50"
            value={new Date(workData.updatedAt).toLocaleDateString()}
            readOnly
          />
        </div>
        <div className="">
          <label
            htmlFor="user"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Status
          </label>
          <input
            type="text"
            name="user"
            id="user"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 disabled:opacity-50"
            value={workData?.workConfirm}
            readOnly
          />
        </div>
      </div>
      <div className="mb-4">
        <label
          htmlFor="workDetails"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Remarks
        </label>
        <textarea
          rows={4}
          name="workDetails"
          id="workDetails"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={workData?.remarks || "no remarks"}
          readOnly
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="workDetails"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Work Details
        </label>
        <textarea
          rows={4}
          name="workDetails"
          id="workDetails"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={workData?.workDetails}
          readOnly
        />
      </div>
    </form>
  );
};

export default ViewWorks;
