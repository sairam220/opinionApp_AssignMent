import {Component} from 'react'
import SideNavBar from '../Carousel'
import {BiDollar}from 'react-icons/bi'
import Recharts from '../ActivityChart'
import {AiFillBank,AiOutlineLike} from 'react-icons/ai'
import {MdOutlineLocalOffer} from 'react-icons/md'
import {FiUsers} from 'react-icons/fi'
import Piechart from '../PieChart'
import NavBar from '../Header'
import './index.css'


class Home extends Component{
    render(){
        return(
            <div className='home-container'>
                
                <SideNavBar/>
                <div className='flex'>
                <NavBar/>
                <div className='row'>
                    <div className='card-1'>
                        <div className='bank-icon'>
                            <AiFillBank className='icon1'/>
                        </div>
                        <div className='description-card'>
                        <h1 className='revenue-heading'>Total Revenues</h1>
                        <h2 className='revenue-heading'> <BiDollar className='icon2'/>2,129,340</h2>
                        </div>
                    </div>
                    <div className='card-2'>
                    <div className='bank-icon'>
                            <MdOutlineLocalOffer className='icon1'/>
                        </div>
                        <div className='description-card'>
                        <h1 className='revenue-heading'>Total Transactions</h1>
                        <h2 className='revenue-heading'>1,520</h2>
                        </div>
                        
                    </div>
                    <div className='card-3'>
                    <div className='bank-icon'>
                            <AiOutlineLike className='icon1'/>
                        </div>
                        <div className='description-card'>
                        <h1 className='revenue-heading'>Total Likes</h1>
                        <h2 className='revenue-heading'> 9,721</h2>
                        </div>
                        
                    </div>
                    <div className='card-4'>

                    <div className='bank-icon'>
                            <FiUsers className='icon1'/>
                        </div>
                        <div className='description-card'>
                        <h1 className='revenue-heading'>Total Users</h1>
                        <h2 className='revenue-heading'> 822</h2>
                        </div>
                    </div>

                </div>
                <Recharts/>
                <div className='bottom-cards'>
                <Piechart/>
                <div className='time-card'>
                    <div className='space-between'>
                    <h3>Today's Schedule</h3>
                    <p className='para'>See all ></p>
                    </div>

                    <div className='main-card'>
                         <hr className='hr-1'/>
                         <div className='description'>
                            <h4 className='para'>Meeting with Supplier from Kutu Balli</h4>
                            <p className='para'>14.00-15.00</p>
                            <p className='para'>at Sunset Road,Kutu,Bali</p>
                         </div>
                    </div>

                    <div className='main-card'>
                         <hr className='hr-2'/>
                         <div className='description'>
                            <h4 className='para'>Chesk Operation at Giga Factory1</h4>
                            <p className='para'>14.00-15.00</p>
                            <p className='para'>at Sunset Road,Kutu,Bali</p>
                         </div>
                    </div>

                </div>
                </div>
                </div>

            </div>
        )
    }
}

export default Home