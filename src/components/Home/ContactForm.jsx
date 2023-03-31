import icons from "../icons";
import { framerAnimation } from "../../utils/animation";

const ContactForm = () => {
  return (
    <div
      id="contact-section"
      className="bg-gray mt-10 h-screen flex justify-center items-center"
    >
      <div className="grid grid-cols-3 h-[350px]">
        {/* contact details */}
        <div className="bg-gray-5 text-white col-span-1 min-w-[325px] flex flex-col pt-[3.7rem]">
          <div className="pl-11">
            <div className="flex items-center">
              <h6 className="font-semibold text-2xl">Contact</h6>
              <span className="border-b-2 border-white w-full ml-2.5 mt-1.5"></span>
            </div>
            <div className="pt-12 text-white">
              <div className="pb-7 flex items-center gap-2">
                <icons.BsFillTelephoneFill className="text-lg" />
                <p>+62 89512907904</p>
              </div>
              <div className="pb-7 flex items-center gap-2">
                <icons.AiOutlineMail className="text-lg" />
                <p>rahmannurudin29@gmail.com</p>
              </div>
              <div className="text-white flex items-center gap-2">
                <icons.TfiLocationPin className="text-lg" />
                <p>Panongan, Tangerang, Indonesia</p>
              </div>
            </div>
          </div>
          <div className="border-b-2 border-white w-[55%] pt-[4.5rem]" />
        </div>
        {/* form */}
        <div className="col-span-2">
          <div className="flex h-[60vh] bg-gray-2 text-white">
            <div className="mx-auto w-full max-w-lg">
              <form
                action="https://formsubmit.co/341be498de761fb6a32880b67bae6cda"
                method="post"
                className="mt-10"
              >
                <div className="flex flex-col">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="relative z-0">
                      <input
                        type="text"
                        name="name"
                        className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                        placeholder=" "
                        autoComplete="off"
                        required
                      />
                      <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                        Your name
                      </label>
                    </div>
                    <div className="relative z-0">
                      <input
                        type="text"
                        name="email"
                        className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                        placeholder=" "
                        autoComplete="off"
                        required
                      />
                      <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                        Your email
                      </label>
                    </div>
                    <div className="relative z-0 col-span-2">
                      <input
                        type="text"
                        name="subject"
                        className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                        placeholder=" "
                        autoComplete="off"
                        required
                      />
                      <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                        Your subject
                      </label>
                    </div>
                    <div className="relative z-0 col-span-2">
                      <textarea
                        name="message"
                        rows={5}
                        className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                        placeholder=" "
                        defaultValue={""}
                        autoComplete="off"
                        required
                      />
                      <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                        Message
                      </label>
                    </div>
                  </div>
                  <div className="self-end pt-2">
                    <framerAnimation.button
                      whileHover={{ scale: 1.05, backgroundColor: "#efefef" }}
                      whileTap={{ scale: 0.95 }}
                      type="submit"
                      className="mt-5 rounded-lg bg-contrast-green px-7 py-1 text-black font-medium text-md flex items-center"
                    >
                      <icons.SiMinutemailer className="inline mr-[10px]" />
                      Send
                    </framerAnimation.button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
