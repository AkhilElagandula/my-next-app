import Dashboard from "@/src/components/Dashboard";

export default function AboutPage() {
    return (
      <section className="p-6">
        <h1 className="text-2xl font-bold">About Us</h1>
        <Dashboard records={[]} />
      </section>
    );
  }