
function win(a,b){

    if(a=='stone')
    {
        if(b=='paper'||b=='stone')
            return 0
        else
            return 1
    }
    else if(a=='paper')
    {
        if(b=='paper'||b=='scissors')
            return 0
        else
            return 1
    }
    else
    {
        if(b=='scissors'||b=='stone')
            return 0
        else
            return 1
    }


}


module.exports=(req,res)=>{

    let choices=[]
    let options=['stone','paper','scissors']
    for(let i=0;i<50;i++)
    {
        choices.push({
            player1:options[Math.floor(Math.random() * 3) ],
            player2:options[Math.floor(Math.random() * 3) ],
            player3:options[Math.floor(Math.random() * 3) ],
            player4:options[Math.floor(Math.random() * 3) ]
        })
    }
    let result={};
    let position=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]
    for(let i=0;i<50;i++)
    {
        let str=`iteration${i+1}`
        let start=0
        for(let j in choices[i])
        {
            let end=0
            for(let k in choices[i])
            {


                position[start][end]+=win(choices[i][j],choices[i][k])

                end++;
            }
            start++;


        }

        let resultItr={
            choice:choices[i],
            standings:JSON.parse(JSON.stringify(position))
        }
        result[str]=resultItr



    }
    res.status(200).json(result)
}

