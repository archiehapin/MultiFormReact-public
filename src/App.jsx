import TopSideBar from "./components/TopSideBar";
import Form from "./components/Form";

function App() {
  return (
    <main className="rounded-lgtext-base container m-5 mx-auto mt-0 h-[800px] w-full overflow-hidden text-a_Cool_gray md:mt-5 md:h-[700px] md:bg-white">
      <div className="container mx-auto flex h-full w-[420px] flex-col text-white md:h-full md:w-[1035px] md:flex-row md:p-5">
        <TopSideBar />
        <Form />
      </div>
    </main>
  );
}

export default App;
