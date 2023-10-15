import Card from './Card'

const Tours = ({tours,removeTour})=> {

    // function removehandler(id) {
    //     console.log(id);
    //     removeTour(id);
    // }
return(
<div>
    <div className='container'>
        <h2 className='title'>plan with love</h2>
    </div>
    <div className='cards'>
         {
             tours.map((tour ) => {
                return <Card {...tour}  key={tour.id} removeTour={removeTour} ></Card>
             })
        }
    </div>
</div>
)




}

export default Tours; 