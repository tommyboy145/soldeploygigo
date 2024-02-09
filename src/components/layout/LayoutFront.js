import { useEffect, useState } from "react";
import Bottom from "./Bottom";
import Footer from "./Footer";
import HeaderLanding from "./HeaderLanding";
import PageHead from "./PageHead";
import PageTitleLanding from "./PageTitleLanding";
import { ContextProvider } from "@/contexts/ContextProvider";
import Notifications from '../../components/Notification'

const LayoutFront = ({
  headTitle,
  children,
  pageTitle,
  pageTitleSub,
  pageClass,
  parent,
  child,
}) => {
  const [height, setHeight] = useState();
  useEffect(() => {
    setHeight(window.screen.height);
  }, []);
  return (
    <>
      <PageHead headTitle={headTitle} />

      {/* Context Provider for solana adapter */}
      {/* <ContextProvider> */}
        <div id="main-wrapper" className={pageClass}>
          <Notifications />
          <HeaderLanding />

          {pageTitle && (
            <PageTitleLanding
              pageTitle={pageTitle}
              pageTitleSub={pageTitleSub}
              parent={parent}
              child={child}
            />
          )}

          {children}

          <Bottom />
          <Footer />
        </div>
      {/* </ContextProvider> */}
    </>
  );
};

export default LayoutFront;
