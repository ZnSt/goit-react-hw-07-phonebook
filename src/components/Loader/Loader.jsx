import React from 'react'
import { Oval } from 'react-loader-spinner';
import { LoaderContaner } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderContaner>
        <Oval
          height={80}
          width={80}
          color="#000000"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
    </LoaderContaner>
  )
}
