
const Menu = ({ menus, pathname }) => {
    return (
        <div className="flex flex-col space-y-3">
            {menus.map((menu) => {
                const activePath = pathname === menu.url;
                return (
                    <div
                        key={menu.id}
                        className={`${activePath ? "text-[#00FFE6]" : "text-[#FFFFFF4D]"
                            } uppercase rounded-lg space-x-2 flex items-center cursor-pointer`}
                    >
                        <div
                            className={`border-[4px] h-[20px] md:h-[33px] ${activePath ? "border-[#00FFE6]" : "text-[#FFFFFF4D]"
                                }`}
                        ></div>
                        <div
                            className={`border-[2px] h-[20px] md:h-[33px] ${activePath ? "border-[#00FFE6]" : "text-[#FFFFFF4D]"
                                }`}
                        ></div>
                        <div className="text-[18px] md:text-[24px] leading-[26.93px]">{menu.name}</div>
                    </div>
                );
            })}
        </div>
    );
};

export default Menu
