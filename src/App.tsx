import Card from "./components/Card"

export default function App() {
  return (
    <div className="p-4">
      <div className="grid grid-cols-12 gap-4 h-screen">

        {/* First element: 9 grid, 50% height */}
        <Card gridSpan="col-span-9" className="h-[100%]">
          <h1>Element 1</h1>
        </Card>

        <Card className="col-span-3 row-span-2 gap-4 h-full">
          <h1> Element 2</h1>
        </Card>

        <Card gridSpan="col-span-3" className="h-[100%]">
          <h1>Element 3</h1>
        </Card>


        <div className="col-span-3 grid grid-rows-[1fr_2fr_1fr] gap-4 h-[100%]">
          <Card className="h-full">
            <h1>Element 4A</h1>
          </Card>
          <Card className="h-full">
            <h1>Element 4B+C</h1>
          </Card>
          <Card className="h-full">
            <h1>Element 4D</h1>
          </Card>
        </div>

        <div className="col-span-3 grid grid-rows-4 gap-4 h-[100%]">
          <Card className="h-full">
            <h1>Element 5A</h1>
          </Card>
          <Card className="h-full">
            <h1>Element 5B</h1>
          </Card>
          <Card className="h-full">
            <h1>Element 5C</h1>
          </Card>
          <Card className="h-full">
            <h1>Element 5D</h1>
          </Card>
        </div>
      </div>
    </div>
  );
}
