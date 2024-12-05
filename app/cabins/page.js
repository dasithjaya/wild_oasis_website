import Counter from "@/starter/components/Counter";

export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);

  return (
    <div>
      <h1>Cabin page</h1>
      <ul>{data.map(user => <li>{user.name}</li>)}</ul>
      <Counter users={data}/>
    </div>
  );
}
