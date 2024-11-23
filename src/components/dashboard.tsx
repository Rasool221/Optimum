import SideNav from './side-nav';

export default function Dashboard() {
  return (
    <div className="h-screen flex p-2 gap-x-2">
      <SideNav />
      <div className="h-full w-3/4 rounded-lg shadow-lg">content</div>
    </div>
  );
}
