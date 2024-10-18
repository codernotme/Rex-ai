import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="justify-center text-foreground">
          <h1 className="text-6xl font-bold">Rex-AI</h1>
          <p className="text-3xl">Personal Assistant</p>
        </div>
        <Card className="w-96 h-auto p-8 mx-auto justify-between bg-slate-900">
          <CardHeader>
            <p className="text-3xl">Coming Soon</p>
          </CardHeader>
          <CardBody>
            <p className="text-3xl">Coming Soon</p>
            <p className="text-3xl">stay tuned</p>
          </CardBody>
          <CardFooter>
            <Button>Get Started</Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
