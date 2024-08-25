import { useState } from "react";
import "./App.css";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

import Dashboard from "./components/Dashboard.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());

  return (
    <>
      <div>
        <h1 style={{ padding: "30px" }}>shadcn/ui + React</h1>
        <h2 className="mt-10  pb-2 text-3xl font-semibold">Buttons:</h2>
        <Button>Default Button</Button>
        <Button onClick={() => setCount((count) => count + 1)}>
          Count: {count}
        </Button>
        <Button variant="secondary" size="lg">
          Save Changes
        </Button>
        <Button variant="ghost">Cancel</Button>
        <Button variant="link">Learn More</Button>
        <Button variant="destructive">Delete</Button>
        <Button variant="custom" size="sm">
          Custom Button
        </Button>
        <h2 className="mt-10  pb-2 text-3xl font-semibold">Calendar:</h2>

        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border border-orange-800 inline-block"
        />

        <h2 className="mt-10  pb-2 text-3xl font-semibold">
          Customizable Compontents to build a Dashboard:
        </h2>

        <Dashboard />
      </div>
    </>
  );
}

export default App;
