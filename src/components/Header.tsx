import { appName } from "@/constants/appName";
import { HeaderMenu } from "./HeaderMenu";

export const Header = () => {
  return (
    <div>
      <h1>{appName}</h1>
      <HeaderMenu />
    </div>
  );
};
