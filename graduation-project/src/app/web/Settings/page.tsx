const Settings = () => {
  return (
    <div className="w-[80%] ">
      <div className=" top-0 left-0 w-full bg-gray-50 py-28">
        <div className="text-5xl font-thin text-gray-600 ml-16">Settings</div>
      </div>

      <div className="flex flex-col w-fit p-8">
        <div className="flex items-start ">
          <div className="text-lg font-thin">Email Notifications</div>
          <div className="ml-5 mt-1 ">
            <div className="flex items-center">
              <input
                type="radio"
                id="allNotifications"
                name="notificationPreference"
                value="all"
                className="mr-1 outline-none text-indigo-500"
              />
              <label htmlFor="allNotifications" className="text-gray-800 font-thin">
                All
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="radio"
                id="importantOnly"
                name="notificationPreference"
                value="important"
                className="mr-1"
              />
              <label htmlFor="importantOnly" className="text-gray-800 font-thin">
                Important Only
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="radio"
                id="noneNotifications"
                name="notificationPreference"
                value="none"
                className="mr-1"
              />
              <label
                htmlFor="noneNotifications"
                className="text-gray-800 font-thin"
              >
                None
              </label>
            </div>
          </div>
        </div>
        <div className="flex items-start ">
          <div className="text-lg font-thin">Email Notifications</div>
          <div className="ml-5 mt-1 ">
            <div className="flex items-center">
              <input
                type="radio"
                id="allNotifications"
                name="notificationPreference"
                value="all"
                className="mr-1 outline-none text-indigo-500"
              />
              <label htmlFor="allNotifications" className="text-gray-800 font-thin">
                All
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="radio"
                id="importantOnly"
                name="notificationPreference"
                value="important"
                className="mr-1"
              />
              <label htmlFor="importantOnly" className="text-gray-800 font-thin">
                Important Only
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="radio"
                id="noneNotifications"
                name="notificationPreference"
                value="none"
                className="mr-1"
              />
              <label
                htmlFor="noneNotifications"
                className="text-gray-800 font-thin"
              >
                None
              </label>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};
export default Settings;
