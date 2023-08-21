import Alert from "./alert";
import Footer from "./footer";
import Header from "./header";
import Meta from "./meta";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="">
        <div className="mx-auto min-h-screen max-w-screen-xl bg-[#f002]">
          <div className="lg:flex lg:justify-between lg:gap-4">
            <Header />
            <main>{children}</main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
