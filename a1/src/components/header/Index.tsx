import BreadcrumbCustom from "../breadcrumb";

const Header = () => {
  return (
    <div className="flex justify-between h-[60px] px-6 items-center bg-white shadow-[rgba(0,0,0,0.05)_0px_0px_0px_1px]">
      <BreadcrumbCustom />
    </div>
  );
};

export default Header;
