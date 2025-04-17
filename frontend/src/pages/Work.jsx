export default function Work() {
    return (
      <section className="w-full max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold mb-10">Selected Work</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="border border-gray-200 p-6 rounded-xl shadow-sm transition hover:shadow-md">
            <h3 className="text-xl font-semibold mb-2">Project Title</h3>
            <p className="text-sm text-gray-600">Brief description of the project goes here. You can also list the tools used.</p>
          </div>
        </div>
      </section>
    );
  }