import React, { useState } from "react"


export default function TextField() {
  const [text, setText] = useState('');

  const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div>
      <label>
        Введите текст:
        <input type="text" value={text} onChange={handleInputChange} />
      </label>
      <p>Введенное значение: {text}</p>
    </div>
  );
}