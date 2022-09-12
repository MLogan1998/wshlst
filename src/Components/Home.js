import { React } from 'react';

import { useUserAuth } from '../Context/UserAuthContext';

export const Home = () => {
  const { logOut } = useUserAuth();

  const handleLogOut = async () => {
    try{
      await logOut();
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div className="home">
      <div className='home__content'>
        <div className='home__content--image'>
          <img src="https://i.imgur.com/oncDm4e.png" alt="Wishlist" />
        </div>
        <div className='home__content--text'>
          <p><span className="highlighted-text emphasized">Welcome to wishlist.</span> The app for budgeting your fun money. Create a wishlist to keep track of <span className="highlighted-text emphasized">everything you want,</span> and how much it costs.</p>
        </div>
      </div>
      <div className='home__content'>
        <div className='home__content--image'>
          <img src="https://i.imgur.com/P23TxvT.png" alt="Piggy Bank" />
        </div>
        <div className='home__content--text'>
          <p>Deposit funds into your Piggy Bank. Know how much you have <span className="highlighted-text emphasized">saved towards your goals.</span> Watch your fun money grow, and your <span className="highlighted-text emphasized">wishlist become a reality.</span></p>
        </div>
      </div>
      <div className='home__content'>
      <div className='home__content--image'>
          <img src="https://i.imgur.com/WGbatc0.png" alt="Transactions" />
        </div>
        <div className='home__content--text'>
          <p>Keep track of every transaction you make. Look back on your <span className="highlighted-text emphasized">history of deposits and purchases.</span></p>
        </div>
      </div>
    </div>
  )
}
