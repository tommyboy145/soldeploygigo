import Head from "next/head";
import Link from "next/link";

function PageHead({ headTitle }) {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Gigo - Metaverse Web3 IGO/IDO Token Launchpad React Nextjs App"}
                </title>
                <Link legacyBehavior rel="icon" href="/favicon.png" />
            </Head>
        </>
    );
}
export default PageHead;
