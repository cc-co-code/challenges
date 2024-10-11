import Entry from "./Entry.jsx";

export default function EntryList() {
  const Entries = [
    {
      id: 1,
      title: "First Entry",
      date: "01.01.2024",
      text: "I had icecream for breakfast",
      isFavourite: false,
    },
    {
      id: 2,
      title: "Second Entry",
      date: "02.01.2024",
      text: "My dog ate my icecream",
      isFavourite: true,
    },
  ];
  return (
    <div className="entry-list">
      {Entries.map((entry) => (
        <Entry
          key={entry.id}
          title={entry.title}
          date={entry.date}
          text={entry.text}
          isFavourite={entry.isFavourite}
        />
      ))}
    </div>
  );
}
