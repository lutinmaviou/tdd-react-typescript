import React, { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import ButtonsWrapper from './components/ButtonsWrapper/ButtonsWrapper';
import Screen from './components/Screen/Screen';

function App() {

  const btnValues: string[] = [
    '%',
    'CE',
    'C',
    'Del',
    '+/-',
    'x²',
    'V¹',
    '/',
    '7',
    '8',
    '9',
    'X',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '0',
    ',',
    '=',
  ];


  return (
    <div className="App">
      <section className="container">
        <main>
          <Screen value={'0'} />
          <ButtonsWrapper>
            {btnValues.map((btn, i) => {
              return (
                <Button
                  key={i}
                  className={
                    btn === '='
                      ? 'equals'
                      : btn === '/' || btn === 'X' || btn === '-' || btn === '+'
                      ? 'signs'
                      : btn === '%' ||
                        btn === 'CE' ||
                        btn === 'C' ||
                        btn === '+/-' ||
                        btn === 'x²' ||
                        btn === 'V¹'
                      ? 'calc'
                      : btn === 'Del'
                      ? 'del'
                      : ''
                  }
                  value={btn}
                  title={
                    btn === '+'
                      ? 'addition'
                      : btn === '-'
                      ? 'substraction'
                      : btn === 'X'
                      ? 'multiplication'
                      : btn === '/'
                      ? 'division'
                      : ''
                  }
                />
              );
            })}
          </ButtonsWrapper>
        </main>
      </section>
    </div>
  );
}

export default App;
