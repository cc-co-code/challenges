import Tabs from "./Tabs.jsx";

export default function TabBar() {
  return (
    <div className="tab-bar">
      <Tabs label="All Entries"> count={3} </Tabs>
      <Tabs label="Favourites"> count={1}</Tabs>
    </div>
  );
}
