import './App.css';

function AppJSX() {
  const name = 'Ian';
  const list = ['우유', '딸기', '바나나'];
  return (
    <>
      <h1 className="orange">{`Hello! ${name}`}</h1>
      <h2>Hello</h2>
      <p>{name}</p>
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <img
        style={{ width: '200px', height: '200px' }}
        src="https://images.unsplash.com/photo-1739761613270-a48d0d1190ba?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="nature"
      />
    </>
  );
}

export default AppJSX;
