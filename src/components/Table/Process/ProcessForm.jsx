"use client"

import UseWindowSize from '../../../Hooks/UseWindowSize'

const ProcessForm = ({ onValChange, formObject, onFormSubmit }) => {
  const [windowWidth, setWindowWidth] = UseWindowSize();

  const inputStyle = {
    border: '2px solid grey',
    borderRadius: '5px',
    padding: '2px 10px',
    outline: 'none',
    backgroundColor: '#ddd',
  }

  const label = {
    fontWeight: '700',
    
    margin: '20px',
  }

  const labelInput = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: '20px 20px 20px 0px',
    padding: '20px 0 20px 20px',

    fontSize: '20px',
  }

  const reslabelInput = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: '20px 0 20px 20px',
    fontSize: '16px',
  }

  

  const outerWrapper = {
    display: 'flex',
    flexDirection: 'row', //'flex-direction': 'column',
    flexWrap: 'wrap',
    width: '70%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  }

  const resOuterWrapper = {
    display: 'flex',
    flexDirection: 'column', //'flex-direction': 'column',
    flexWrap: 'wrap',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  }

  const outer = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }

  const formBtn = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px 0 20px 0'
  }

  const resformBtn = {
    display: 'flex',
    flexDirection: 'cloumn',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px 0 20px 0'
  }

  const innerWrapper = {
    display: 'flex',
    flexDirection: 'row',
    margin: '30px 0px',
    width: '40%', 
    justifyContent: 'space-between',
  }

  const resInnerWrapper = {
    display: 'flex',
    flexDirection: 'column',
    margin: '10px 0px',
    width: '100%',
    justifyContent: 'center',
    padding: '10px'
  }

  
  return (

    <>
      <div style={outer}>

        <div style={windowWidth > 600 ? outerWrapper : resOuterWrapper} className='outerWrapper'>

          {/* 1st */}
          <div>
            {/* lableInput */}
            <div style={windowWidth > 600 ? labelInput : reslabelInput}>
              <div >
                <label for="processId" style={label}>Process ID</label>
              </div>
              <div >
                <input style={inputStyle}
                  type="text"
                  className="form-control"
                  placeholder=""
                  onChange={onValChange}
                  value={formObject.processId}
                  name="processId"
                />
              </div>
            </div>
            {/* lableInput */}
            <div style={windowWidth > 600 ? labelInput : reslabelInput}>
              <div>
                <label for="processDescription" style={label}>Process Description</label>
              </div>
              <div>
                <input style={inputStyle}
                  type="text"
                  className="form-control"
                  placeholder=""
                  onChange={onValChange}
                  value={formObject.processDescription}
                  name="processDescription"
                />
              </div>
            </div>
          </div>

          <div>
            {/* lableInput */}
            <div style={windowWidth > 600 ? labelInput : reslabelInput}>
              <div >
                <label for="perPcTime" style={label}>Per Pc Time</label>
              </div>
              <div >
                <input style={inputStyle}
                  type="text"
                  className="form-control"
                  placeholder=""
                  onChange={onValChange}
                  value={formObject.perPcTime}
                  name="perPcTime"
                />
              </div>
            </div>
            {/* lableInput */}
            <div style={windowWidth > 600 ? labelInput : reslabelInput}>
              <div>
                <label for="status" style={label}>status</label>
              </div>
              <div>
                <input style={inputStyle}
                  type="text"
                  className="form-control"
                  placeholder=""
                  onChange={onValChange}
                  value={formObject.status}
                  name="status"
                />
              </div>
            </div>
          </div>

        </div>



        <div style={windowWidth > 600 ? outerWrapper : resOuterWrapper} className='outerWrapper'>
          <div style={windowWidth > 600 ? innerWrapper : resInnerWrapper}>
            <div style={windowWidth > 600 ? formBtn : resformBtn}>
              <input
                type="text"
                onClick={onFormSubmit}
                name="btn"
                value="Add Data"
              />
            </div>

            <div style={windowWidth > 600 ? formBtn : resformBtn}>
              <input
                type="text"
                name="btn"
                value="Clear Data"
              />
            </div>
          </div>
        </div>
      </div>




      <style jsx>{`
                /* CSS for table */
                input[name='btn']{
                    width: 60%;
                    padding: 10px 10px;
                    background-color: #D8CFC4;
                    font-size:16px;
                    border-radius: 5px;
                    font-weight: 500;
                    text-align: center;
                }
                input[name='btn']:hover{
                    background-color:#E15465;
                    color: #fff;
                    font-size:16px;
                    border-radius: 5px;
                    font-weight: 500;
                }
                
                
            `}</style>

    </>

  );
}

/*

processId: "",
  processDescription: "",
  perPcTime: "",
  status: "",
*/
export default ProcessForm;