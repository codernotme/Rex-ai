import { Button } from "@nextui-org/button";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="justify-center text-foreground">
          <h1 className="text-6xl font-bold">Rex-AI</h1>
          <p className="text-3xl">Personal Assistant</p>
        </div>
        <Card className="w-96 h-auto p-8 mx-auto justify-between bg-default-100">
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
