import { useState } from "react";
import type { MouseEvent } from "react";

export default function useNavbarState() {
    const [anchorElNavMenu, setAnchorElNavMenu] = useState<null | HTMLElement>(null);
    const [anchorElUserMenu, setAnchorElUserMenu] = useState<null | HTMLElement>(null);

    function handleOpenNavMenu(event: MouseEvent<HTMLElement>) {
        setAnchorElNavMenu(event.currentTarget);
    }

    function handleOpenUserMenu(event: MouseEvent<HTMLElement>) {
        setAnchorElUserMenu(event.currentTarget);
    }

    function handleCloseNavMenu() {
        setAnchorElNavMenu(null);
    }

    function handleCloseUserMenu() {
        setAnchorElUserMenu(null);
    }

    return { anchorElNavMenu, anchorElUserMenu, handleOpenNavMenu, handleCloseNavMenu, handleOpenUserMenu, handleCloseUserMenu};
}