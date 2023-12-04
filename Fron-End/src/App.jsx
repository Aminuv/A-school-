import { BrowserRouter, Routes, Route } from 'react-router-dom'




export default function App() {
  return (
   <BrowserRouter>
     <Header  />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path ="/sing-in" element={<SingIn />} />
          <Route path ="/sin-up" element={<SingUp />} />
          <Route path ="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}