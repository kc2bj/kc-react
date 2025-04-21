export default function Home() {
  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-16">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
        {/* Profile Image */}
        <img
          src="/images/Kris_profile_photo_box.png"
          alt="Kris Celeste"
          className="w-32 h-32 rounded-full object-cover"
        />

        {/* Intro Text */}
        <div>
          <h1 className="text-4xl font-bold mb-4">Hi, I'm Kris.</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            I'm a frontend developer and UX/UI designer. I turn ideas into clean, functional, and beautiful digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
}