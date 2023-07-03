import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link
          href="/"
          className="flex items-center mb-6 text-2xl font-semibold text-white"
        >
          <Image
            src="/logo.svg"
            alt="Mahmudul Hasan Logo"
            width={50}
            height={50}
          />
        </Link>
        <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-900 border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div className="space-y-2">
                <label htmlFor="email" className="text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:border-[#3ccf91] text-white"
                  placeholder="Email"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-white">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:border-[#3ccf91] text-white"
                  placeholder="Password"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-[#3ccf91] hover:bg-[#35bb83] transition-all py-2 rounded"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
