import React, { useState } from 'react'

export default function LiftingStateComponent() {
    const [amount, setAmount] = useState(0.0);
  return (
    <div>LiftingStateComponent</div>
  )
}

function ChildrenA(){
    return <>
    </>
}
