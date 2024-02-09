import Link from "next/link";
import { useRouter } from "next/router";

function ProfileMenu() {
    const router = useRouter();
    return (
        <>
            {/* <li className={router.pathname == "/" ? "active" : ""}>
                            <Link legacyBehavior href="/">
                                <a>
                                    <span>
                                        <i className="bi bi-house"></i>
                                    </span>
                                    <span className="nav-text">Dashboard</span>
                                </a>
                            </Link>
                            </li> */}

            <ul className="settings-menu">
                <li
                    className={
                        router.pathname == "/profile" ? "active" : ""
                    }
                >
                    <Link legacyBehavior href="/profile">
                        <a>Profile</a>
                    </Link>
                </li>
                <li
                    className={
                        router.pathname == "/created"
                            ? "active"
                            : ""
                    }
                >
                    <Link legacyBehavior href="/created">
                        <a>Created</a>
                    </Link>
                </li>
                <li
                    className={
                        router.pathname == "/collected" ? "active" : ""
                    }
                >
                    <Link legacyBehavior href="/collected">
                        <a>Collected</a>
                    </Link>
                </li>
                <li
                    className={
                        router.pathname == "/activity" ? "active" : ""
                    }
                >
                    <Link legacyBehavior href="/activity">
                        <a>Activity</a>
                    </Link>
                </li>
                <li
                    className={
                        router.pathname == "/onsale"
                            ? "active"
                            : ""
                    }
                >
                    <Link legacyBehavior href="/onsale">
                        <a>On Sale</a>
                    </Link>
                </li>
                <li
                    className={
                        router.pathname == "/liked" ? "active" : ""
                    }
                >
                    <Link legacyBehavior href="/liked">
                        <a>Liked</a>
                    </Link>
                </li>
                <li
                    className={
                        router.pathname == "/following" ? "active" : ""
                    }
                >
                    <Link legacyBehavior href="/following">
                        <a>Following</a>
                    </Link>
                </li>
                <li
                    className={
                        router.pathname == "/followers" ? "active" : ""
                    }
                >
                    <Link legacyBehavior href="/followers">
                        <a>Followers</a>
                    </Link>
                </li>
            </ul>
        </>
    );
}
export default ProfileMenu;
