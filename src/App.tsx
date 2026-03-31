export default function App() {
  async function getAdvice() {
    const advice = await fetch('https://api.adviceslip.com/advice');
    const data = await advice.json();
    console.log(data);
  }
  return (
    <div>
      <h1>Hello, World!</h1>
      <button onClick={getAdvice}>Get Advice</button>
    </div>
  );
}
