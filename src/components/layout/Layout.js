import NavigationMenu from "./NavigationMenu";

export default function Layout(props) {
  return (
    <div>
      <NavigationMenu />
      <main>{props.children}</main>
    </div>
  );
}
