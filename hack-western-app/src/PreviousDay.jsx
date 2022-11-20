import './PreviousDay.css';

function PreviousDay() {
  return (
    <div>
      <div className="summary-text">
        Let's revisit some of your previous suggestions!
      </div>
      <div className='suggestion-box1'>
        <div className='suggestion-text'>
          Read at least 10 pages of a book every single day for the next week. Reading releases endorphines and stimulate brain activity.
          </div>
      </div>
      <div className='suggestion-box2'>
        <div className='suggestion-text'>
          Eat a banana to help ease your nauseau and headache. Bananas also help improve blood sugar levels and are full
          of antioxidants.
          </div>
      </div>
      <div className='suggestion-box1'>
        <div className='suggestion-text'>
          Stretch throughout the day! Taking stretch breaks can enable your 
          muscles to work most effectively, and improve your ability to do daily activities.
          </div>
      </div>
      <div className='suggestion-box3'>
        <div className='suggestion-text'>
        Reach out to someone you haven't spoken to in a while. Catching up with an old friend often brings back nostalgia
        and good memories that calm nerves through thinking about pleasant times. Don't be afraid to make that call!
        </div>
      </div>
      <div className='suggestion-box4'>
        <div className='suggestion-text'>
          Listen to your favourite music throughout the day to ease anxiety.
        </div>
      </div>
    </div>
  );
}

export default PreviousDay;
