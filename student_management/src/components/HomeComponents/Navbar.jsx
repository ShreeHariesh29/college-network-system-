import React from 'react'
import { HiOutlineUserCircle } from "react-icons/hi";
import { Link } from 'react-router-dom';





function Navbar() {




  return (
    <div className=' bg-cyan-500 md:flex justify-between ' >
        <nav className='flex'>
          <button><Link to="/login"><img className='h-[50px]' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAilBMVEUEstT///8ArtIArdEAstSk3ey05PDp+Puu4O6g2+rc8vdQwdz8//+Z2Onh9fmy4e685vExu9nG6vNgxt/U7/bx+/2O1ed9z+OF1Odsy+IoudjF6vPW8ff1/P7o+Pvg9flWxt+g4u+H2ep40+aV3uxEvdply+EAp86n4++66vN+1uhFw90kvdrU7fWiGg9NAAAONUlEQVR4nO2diXajOhKG0QKYzWERi1hskhjHvmTe//VGJbF4SbrTc3piyNXfp9sJYA4fVaoqLdCGoaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWl9efCf12PJroRN/+2gkcjXQs/ob+tdFlGxJu/TmgvjzC1/p7cRRK6b38tyJBgmYR/75Kwowm/XZrwT0+nCb9fN4TyJ1V50akAg08KG4Zjpk989Sl/XjphGeSGEWVCnmHID7ErEZ85NWiZ5XBIobZicVhRig1c7R5Ot3TCDn5OoDAJsCELlAKrqmcnyNGeUMOH3zgcCioNwuBzayjGxRNGiAEh69vIMHy7DxAj2ERBm6JI7KyJwZHbb1CFxdawZyg3SIx42yBvON1KCCsCv/hbTAWUYMnfXNQpwhxt3hIUg2X5myNMLAijt3h1hHKDvzNKZcOcXBKSkZCYirAj6yMk0Kx+MiHjEDWll7J7L50J1+ulQhBpdmWi2mFRbmfCsMwVYVFuFGEcQlBVp1sJYc1FOjAaIHUgakLH3RgJQfGQQxShD4cNp1sJ4dAOGysMRCVjIhZa3UTobipFGG9cRfhugcnV6dZCqGLplmBMDUHICTaMX2SLHGVrs+GYLaBQgUgz7PwklkYlCldC+NaL2CkIwzcw2pcJO4J2ZDjdsglbETIssKGf+gWeCDcToQuE1g0hk/lwaIgLJ/TsXSWYWnu3swXhPlaEQcrl7mgnvJenDklSC8NWEqS5gcM0wlmaDKdbNqFBiAyi4gO8lIxtS/1AxXZDboUNFMsfht2YrKId0rLzDI9yI0k6D/4aXZJEibBOkuAkoaXYxssuMbyy6wzPSDqjM0pe0qT06DpqGm66nDmsNlMeZ35ee+HG5k2AE9f10g317DCOe3t7dNtNnMdOnLbWWx3GGduHXj309xdO6NRWbHXciCl729Las8owit+MPMuS+s0gVhRHBvN61ptVFYaRe9y81bR2PJ49ByshrOq4qKNSETLPisKoyQgQpk8GPncV60U6aWLHiiurk4Rl7SRRt5LKWxCe2JtnG5eEzMBAuC+BMD5SQehy0wrYTPiaki1dxSgGN+Oe5e+KcAdeGoXd4KV7ET0FYUcZb13PDL148lJT2NVdRSw1ksyKLJHwDItapMKhzSMzsmMc7bZlJQidyLSPbBuFfWZ2VmKzaGeadpDYLllL1aa2YOlwmOJh8FT+xYMXGvPgKGyVg6XiG+PGpRP+blb+91P3Cyfk4Uear5c7QnKqfqP09ASTouIYZx02xNmHk9ZkPJTYn05sN8OA8CoJ/Ymw9D+fu19HH/93hO3ngKIXNZxuzYRw8Z/K+gmEagrmE21X0cf/HWHzC0J/FX383xBGvwBEaBV9fBz8kjD/JaG5it7T1fY7woLFg+YGGfJRq7ChYdBJhnFHONVspJsIA3J7uoUTzqL0nnCSNxPefnO1hNcl9g8kxNm0PBaGTn8gIdlNTFC8/AhC45pwOzE9aUJN+O369xKWmlATLkaaUBPenk4Tfr/+vYTRjyd814SrJ/z5XqoJfxAh0oTXp1sh4c/30vSnEk4U+59KyEcIWPP9h4T38wCPFDxN8QHhPJcY/BmhOc8HL0SAMj48eLl5mkGDYfw/I2QLI8zh6ck7QjpNacP09R8QWgiFy2qH8JRTSm8JZyd15drurxNW03TwYgTTneXtRpqODPJyv05IXDQ9P7MUwUqn7mYbmV94Ind9mZDC42D8m678i5LXlF9vw1OqQEyuuvy6DSNxv/rvuvYviuxvLxTPBCiXe75O6H3k8w8WpPzqMr5jb16hl6odXyaEyPxB7nmscIFQg+eLwpfrZoYm9XXCCp6+/Mar/5K6ec0W6BKQjWufw5op1cEvCe9d/nGajEYhM/CL7RcvjprAMRkFlz8RxrdNDmYd+/lUj9RFjocCzZrvOyVTts8vrYHLyZUHQj+/K88gCMvDxPnvyohvFs8JVhaAhphehZpCEVgXGynm/lSreIMB79wRarYYvkVLYfbzY4Nqgng1WO790h9BKh+yi/BjEHigmw0bJGFxX19Twx4qGkp32Sl9qJ9CxEypaisQHq5rSdz61yGRqq5G40lqQcjuDah2+KV6LFPcJDt6YMzpRfmIbNFWjFb1Wm+SGPYuWqb4bSpTC0D0pmXd14LUuseUtpLQR/75gYg0amx3J5yvJqr49m4OuHBRAh2ssKqqUFgyFMdHHf7I/2QBKNgjBKveYxQ+tB1SsmsJLT1ZY5FaXfknCsUNOOxd192/iJ92n/sel04qOsEWifCb5Tw2MWJwNFivJiIDNEr/kxuOS1nPPKPpX5+TjyMILHWvMMU71SOh2f/v6r8quex5C+tm0896dSTx0Q0hQs7H9o6Us8OLQ5YwkDGv9U0Uqv9R25qy/3MKOgy/1R8ZEWpSlwwPLYhs++A3tWJ4JEs9xwQpGqqtD4xYbiJ1jF+8gF6HJ5/MJLk/GEzIx6Fk+TrN/O6Yb9T4eEgmvLBTQ2TpjWEo7lKR9yRU1R6lXtSXWkj4N4eTWHi8aIXWXNYm38fzgeRrdjK/ZZmqs/y7TgEplEPOPaexXJUlT3hzQk+ZsBQGb9Tte2xHkWK48BZ5TSFLNtkSr8PpYIwtvXkaiA9jHO5V2oAhKFHnEahMaYD2H7v9d0qW11YvTRljVVJedPVxuR+JdhIxLngumVtpWtjbHGdPlf3mbmiFVhAdxcej+/pywLAx+2JoMMA6xg9K+MWzhimN7SgJ67igMfLkgzWVeqpkzukwYrcZAmlmITj3w4dNZTK0+SFw1aA3qeZgMzyIN457N1GpPDXtItizO78cDhVQxMMXxi9Ll+jRPvu8hPg+yTcg+onVI5PJJlM2Y+0mTAUZ4vRSD4g9Q/7zydqJyxZc7PV0fHk9v8INSGVjlD7KRUKVa/o3LRT2m8cnfTlyv7XjHoxZDr3CTMT7oSfRvJ7/iU8AycA0+/0OXtAjnLpG7OX1edcoE0PagNYn+suyE+n2xwbu3QIG3GSthjKe8s5ENbzyCiJJR9RQlB2//HN4Pp9P4qAiRM/nk/jz4qeiu2wf4pfdS/w8NFULUxGlduIEsmfMayu7aqIPlDRas+2Lg8gcGVEZxB6SxCmOLftw3p3F7y1Dp/MBWeeD74vqJ3TZ8bXYhmOnkcVytI5iuSEus+B6fPJxonKSMICiRZijNVRTHOJnFTbstLWsE5ilQuf6UD0L2gbWLLLzQUSasZGqJCm8G3pZdt/G0IrzJZjQmJcjMOqihg7j+T54n29VVV0JiwKzcDu7ieM4tRETdq9OZxFpqkM6A0IXTObJf2wbHvlmn3Swvl0yNIh2RpveV03xqAwqqE7xjADzpS+Hk4iUnjCUi+pTeEhTZXBfRZlhsqM041d0M7D1SMlKBhVBaLYupAoqRywUYhPPForGqYyiLSEhWNZ5dFLYATlGvo7ALVAGd2NJM4jSLb20r+BqoWcrnc2/entCnqBNWTXIr1uOXOHQ6FCn59MMKIxPZSYsnH7jhqKXuBAfBcnKxu2tjIPPwRiozN6XiLLS3vH393cP7sNeIMLedLag4HFlGI0ty1ySj0oNXXJeF8iWOcPAyeioUsdhBLwZW6U9dTbkfXAAUJbpmRP5kGv4gnwUJDMEd9unEMgkoixqBsZkGMfY9P34MHtaVjMgDKCC46I4TU4MosxmYYAqCDavqcMbuL5AmATLACQBuhFLBNvInxDD8RYcYQgEuppF3tURxKtFNUIlNSWaFW6vjCVLaYXQlNOYRO/a7+w/Q3/fjzYScFuKPAjFOHIKlFRwX27HQhYhAj0im/WskN7HDCh3JPZmBDSPRdszyxpf4OIXMg0a0GplWkxb7jjh9VzrcqTqrSqNNrkcdoJRbYqj7RgsEQx3JDLgDAMYcqscGZaDOT7UCZ68G97SGqEShQ4s2hVWxKIIfE6OapNgRqz5Hhopep0BY3i/F4V7kzYdkMPc8QeDjMsQxVDAWFnKvVp27TdyY1fPjG7fFsWxrYcIlEJKwJ3M80/i1qgKbml54lISEXFokRb8s43AjDj3x6Dqy0Hv1Fe1gElFkpgGxDPHlYhLBhQ+Cc0Imh5Tnojg/xYTjhioNjcmCvkZlqIzSSJ3iEKtxZ9sH/mLdVElOvQzbBE1/FqmghZyHS43I+Ngv9iDqsBQidIK09wym1DODz+a4Tca1mC0MA2V97JdhfJlgbgMZvOhsJPLMbmawQiCBnWH3IUqYOmAQkRkuy04qmnuh66TqRhxofpKqUPhRcMEAo5omaKeLfqIBfW8iGHhGmJji3o7HRpZE8ikgLFn2VWieDuF74s6tqmQCVnCfPSlf1kUEmPcR5VXhGPyA7sJw6n/MAiTduoZxyLoNj34dr68WvRTqRoF8cDhT06VqzQXtnK2U7gnLeb3uIjsoBqju4YmOAt30NeLc6v2Ylz5Q69wn5UCsrWmsbgmF6myOaJVeego+f9ZbG3OMmuHnPejP1Rp5jAdLBy59ou6heVwtSi5V+ShgyjpIMzUNvSmIt9t/WFBJgPSwDJTnvdWtJWl+AJmJ/4n4axRwxY7UVJHYRiLrL9FZppabJ9ndYQ4C6CNso+XDq1AUMmojJ7URRawskrbPOMujVvhnU4W76HGS+9XX65JRA3G1IGFupS1Z+GTed0ja9Nu2xQSRpORVYXQDzRmdlTtjknaO1ZRe69tw2DuDDUOXauDXop04ZT7BJmN2mE9TZrRtdtvFCmdi/mXQTVfvX9eChv51WqTZtPhRy+y+MsStVoZjEtPKk5/Gp8SJpGz8xk3yI/EU4KBpx+MB/rZdFpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWlpaWivXfwGfjfen75pLEAAAAABJRU5ErkJggg==" alt="" />
          </Link></button>
            
            <div>
            <ul className='flex pt-[6px] pl-[10px]'>
                <button className='hover:bg-slate-300 rounded-lg font-semibold'><li className='p-[5px]' ><Link to="/home">HOME</Link></li>
                </button>
                <button className='hover:bg-slate-300 rounded-lg font-semibold pl-[4px]'><li className='p-[5px]'> 
                <Link to="/academic">ACADEMIC</Link></li> </button>
                <button className='hover:bg-slate-300 rounded-lg font-semibold pl-[4px]'><li className='p-[5px]' ><Link to="/examination">EXAMINATION</Link></li>
                </button>
                <button className='hover:bg-slate-300 rounded-lg font-semibold pl-[5px]'><li  className='p-[5px]'><Link to="/result">RESULT</Link></li></button>
                <button className='hover:bg-slate-300 rounded-lg font-semibold pl-[5px] '><li  className='p-[5px]'><Link to="/library">LIBRARY</Link></li></button>
            </ul>
            </div>
            
        </nav>
        <div className='pt-[5px] '>
                <ul className='flex'>
                    <input className='rounded-lg pl-[8px]' placeholder='search' type="text" />
                    <li className='w-[70px]'></li>
                    <li className=' w-[70px]'> <Link to="/profile"><img src="/images/profile.png" alt="" /></Link> </li>
                </ul>
                
            </div>
            
    </div>
  )
}

export default Navbar