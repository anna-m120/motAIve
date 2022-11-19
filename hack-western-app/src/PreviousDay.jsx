import './PreviousDay.css';

function PreviousDay() {
  return (
    <div>
      <div className="summary-text">
        Let's revisit some of your previous suggestions!
      </div>
      <div className='suggestion-box1'>
        <div className='suggestion-text'>
          Read at least 10 pages of a book every single day for the next week.
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
        Eat fibre. There is strong evidence that eating plenty of fibre is associated with a lower risk bowel cancer.
        Dietary fiber softens stool. A bulky stool is easier to pass, decreasing your chance of constipation. This is essential to live.
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
