import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import Questions from "./question";
import "./quiz.css";

const Quiz = ({ questions, setquestions, score, setscore }) => {

    const [currques, setcurrques] = useState(0);
    var op = []
    const location = useLocation();
    var name = location.state.name;
    console.log("name:", name);
    const [option1, setoption1] = useState();
    const [option2, setoption2] = useState();
    const [option3, setoption3] = useState();
    const [option4, setoption4] = useState();
    const [options, setoptions] = useState();

    useEffect(() => {
        setoption1(questions && questions[currques].correctans);
        setoption2(questions && questions[currques].i1);
        setoption3(questions && questions[currques].i2);
        setoption4(questions && questions[currques].i3);
        setoptions(questions && questions[currques].i4);

    }, [questions, currques]);

    const func = () => {
        op.push(option1, option2, option3, option4);
        op.sort(() => .5 - Math.random());
        console.log("options:", op);
    }
    // const click = () => {
    //     op.length = 0
    //     setcurrques(currques+1);
    // }
    //     console.log("op:",op);
    return (
        <div style={{ padding: 10 }} className="quiz">
            {questions ? <>
                <div className="quizInfo">
                    <span>{questions[currques].category}</span>

                    <span>score : {score}</span>
                    {func()}
                </div>

                <Questions
                    currques={currques} setcurrques={setcurrques}
                    score={score} setscore={setscore}
                    questions={questions} setquestions={setquestions} option={op}
                    correct={questions[currques]?.correctans}
                    name={name} category={questions[currques].category} />

            </>
                : null}


        </div>
    );
}

export default Quiz;