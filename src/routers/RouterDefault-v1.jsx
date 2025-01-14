import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LayoutDefault from '@/layouts/LayoutDefault'
import LayoutBlank from '@/layouts/LayoutBlank'

import Main from '@/pages/main/index'
import Sub1 from '@/pages/sub1/index'
import Sub2 from '@/pages/sub2/index'

function RouterDefault() {
  return (
    <>
      <Routes>
        <Route element={<LayoutDefault />}>
          <Route path="/" element={<Main/>} />
          <Route path="/sub1" element={<Sub1/>} />
          <Route path="/sub2" element={<Sub2/>} />
        </Route>
      </Routes>
    </>
  )
}

export default RouterDefault
