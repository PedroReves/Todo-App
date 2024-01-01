import 'material-symbols'

export default function Home() {
  return (
    <section className='h-screen flex flex-col items-center justify-center bg-lightGray'>
      <div className='bg-white rounded-xl'>
        <h3 className="text-3xl font-semibold text-center mt-7 pb-8">Todo App</h3>
        <form className='flex flex-row gap-x-6 px-10 pb-8'>
          <input type="text" name="InputTask" placeholder="Enter your Task..." required className='pl-4 border-transparent border-none outline-0 outline-none scursor-pointer rounded-xl bg-lightGray'/>
          <button type="submit" className="rounded-xl bg-grayishBlue text-white w-12 h-12 flex items-center justify-center"><span className="material-symbols-outlined">add</span></button>
        </form>
      </div>
    </section>
  )
}
