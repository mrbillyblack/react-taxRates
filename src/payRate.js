import React, {useState} from 'react';

function TaxPay() {
    const [income, setIncome] = useState('');
    const [{pay, percentile}, setPay] = useState({pay: 0.00, percentile: 10});
    //const [tax, setTax] = useState();

    function calc() {
        let tax = [0.10, 0.12, 0.22, 0.24, 0.32, 0.35, 0.37];
        let level = [9700, 39475, 84200, 160725, 204100, 510300]
        let rev = 0;

        if (income < 9700){
            //just in one tax bracket
            rev = income * tax[0];
            //setPay(rev);
            setPay(state => ({
                pay: rev,
                percentile: (tax[0]* 100)
            }));
        }
        else if (income >= 9700 && income < 39500){
            rev = 9700 * 0.1
            rev += (income - 9700) * tax[1];
            //setPay(rev);
            setPay(state => ({
                pay: rev,
                percentile: (tax[1]* 100)
            }));
        }
        else if (income >= 39475 && income < 84200){
            for (let i = 0; i < 2; i++){
                rev += tax[i] * level[i]   
            }
            rev += (income - 39475) * tax[2];
            //setPay(rev);
            setPay(state => ({
                pay: rev,
                percentile: (tax[2]*100)
            }));
        }
        else if (income >= 84200 && income < 160725){
            for (let i = 0; i < 3; i++){
                rev += tax[i] * level[i]   
            }
            rev += (income - 84200) * tax[3];
            //setPay(rev);
            setPay(state => ({
                pay: rev,
                percentile: (tax[3]*100)
            }));
        }
        else if (income >= 160725 && income < 204100){
            for (let i = 0; i < 4; i++){
                rev += tax[i] * level[i]   
            }
            rev += (income - 160725) * tax[4];
            //setPay(rev);
            setPay(state => ({
                pay: rev,
                percentile: (tax[4]*100)
            }));
        }
        else if (income >= 204100 && income < 510300){
            for (let i = 0; i < 5; i++){
                rev += tax[i] * level[i]   
            }
            rev += (income - 204100) * tax[5];
            //setPay(rev);
            setPay(state => ({
                pay: rev,
                percentile: (tax[5]*100)
            }));
        }
        else if (income > 510300){
            for (let i = 0; i < 6; i++){
                rev += tax[i] * level[i]   
            }
            rev += (income - 510300) * tax[6];
            //setPay(rev);
            setPay(state => ({
                pay: rev,
                percentile: (tax[6]*100)
            }));
        }
        
        
    }
    return(
        <div>
            <h1>Your income is: ${income}.</h1>
            <h2 style={{color:'red'}}>You paid ${pay} this year. </h2>
            <h3 style={{color:'blue'}}>You fall into the {percentile}% bracket.</h3>
            <hr style={{color: '#000000'}}></hr>
            <input name="income" value={income} onChange={e => setIncome(e.target.value)}
            onKeyPress={e => {
                if (e.key === 'Enter'){
                    calc(income);

                }
            }}/>
            <button onClick={() => calc(income)} >Calculate My Taxes!</button>

        </div>
    )
}

export default TaxPay;