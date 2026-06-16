const moments = ['Morning assembly', 'Inquiry labs', 'Sports and arts', 'Reflection circles']

export function DayInSchoolStory() {
  return (
    <section className="bg-[#efe5d4] px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a77e3e]">
            Life at school
          </p>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#0b2a20] md:text-5xl">
            A day that feels structured, warm, energetic, and deeply human.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {moments.map((moment) => (
            <div key={moment} className="rounded-3xl border border-[#caa66a]/20 bg-[#fbf7ef] p-7">
              <p className="text-xl font-semibold text-[#0b2a20]">{moment}</p>
              <p className="mt-3 text-sm leading-7 text-[#52665e]">
                A rhythm where children learn, move, make friends, and discover their own voice.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
