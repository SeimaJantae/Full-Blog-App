import Link from "next/link";
import React, { FC } from "react";

type Props = {
  navItems: {
    href: string;
    lable: string;
  }[];
};

const AdminNav: FC<Props> = ({ navItems }) => {
  return (
    <nav className="h-screen w-60 shadow-lg bg-primary-light">
      <div className="p-8 mb-1">
        <Link href="/admin">
          <span className="text-secondary-light hover:text-action text-xl font-semibold">
            Admin
          </span>
        </Link>
      </div>
      <div className="ml-8 space-y-3">
        {navItems.map((item) => {
          return (
            <div key={item.href}>
              <Link href={item.href}>
                <span className="text-secondary-light hover:text-action">
                  {item.lable}
                </span>
              </Link>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default AdminNav;
