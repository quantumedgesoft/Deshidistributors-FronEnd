import React from 'react'

const PageRouteBanner = ({PageName}) => {
  return (
    <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">{PageName}</h1>
        <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item "><a className='text-white' href="/">Home</a></li>
            <li className="breadcrumb-item active text-white">{PageName}</li>
        </ol>
    </div>
  )
}

export default PageRouteBanner
