import AuthImg2 from '../../assests/auth-2.webp'

export const Home = () => {
  return (
    <div className='bg-slate-300 lg:h-[67vh] h-[75vh]'>
      <div className='grid lg:grid-cols-12'>
       <div className='mt-20 grid lg:col-span-6 '>
         <img src={AuthImg2} className='w-full h-full' alt=''/>
       </div>
        <div className='lg:col-span-6 my-auto mx-auto '>
          <h2 className='text-center lg:text-5xl text-2xl uppercase text-violet-500 lg:leading-[60px] font-extrabold' style={{ fontFamily: 'Rampart One, sans-serif' }}>WelCome To <br/> Login & Registration<br/> Authentication System <br/>Using REQRES API</h2>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}
