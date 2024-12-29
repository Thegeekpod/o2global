import React from 'react'

const Privacy = () => {
  return (
    <>
    <div
      className="header_absolute cover-background ds s-overlay s-parallax"
      style={{ backgroundPosition: "50% -1px" }}
    >
      <section className="page_title ds s-py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="bold">Terms And Conditions</h1>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="https://inextwebs.com/o2globaltravel/public">Home</a>
                </li>
                <li className="breadcrumb-item active">Terms And Conditions</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
    <section>
      <div className="tncpp_div_1 py-5 my-5 bg-graphic">
        <div className="container">
          <div className="tncpp_div_2">
            <p className="top-subtitle">LOREM IPSUM IS SIMPLY DUMMY TEXT</p>
            <h3 className="section-heading">
              Terms And Conditions
              <span className="back">Privacy PolicyPriva</span>
            </h3>
            {/*<p>*/}
            {/*	Lorem Ipsum is simply dummy text of the printing <span class="underline">text of the printing and typesetting</span>Lorem Ipsum is simply dummy text of the printing.*/}
            {/*</p>*/}
            <p className="mt--5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </section>
  </>
  
  )
}

export default Privacy