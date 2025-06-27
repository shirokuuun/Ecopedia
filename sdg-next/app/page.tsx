import Topbar from "./components/topbar";

export default function Home() {
  return (
    <>
      <Topbar />
      <main style={{ textAlign: "center", paddingTop: "50px" }}>
        <h1>Welcome to the SDG Page</h1>
      </main>
    </>
  );
}
