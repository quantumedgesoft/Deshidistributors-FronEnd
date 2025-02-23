import React from 'react'

const PageRouteBanner = ({pageTitle}) => {
  return (
    <div class="container-fluid page-header py-5">
        <h1 class="text-center text-white display-6">{pageTitle}</h1>
        <ol class="breadcrumb justify-content-center mb-0">
            <li class="breadcrumb-item"><a href="/">Home</a></li>
            <li class="breadcrumb-item active text-white">{pageTitle}</li>
        </ol>
    </div>
  )
}

export default PageRouteBanner
