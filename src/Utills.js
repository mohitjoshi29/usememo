import React from 'react'


export default function createTodos() {
    const todos=[];
    for(let i=0;i<50;i++){
        todos.push({
            id:i,
            text:'Todo'+ (i+1),
            completed:Math.random()>0.5
        });
    }
  return todos
}

export function filterTodos(todos,tab){
    console.log('[ARTIFICAIALLY SLOW]Filtering'+todos.length+ ' todos for "' + tab+ '" tab.')
    let startTime=performance.now();
    while(performance.now()-startTime<500){

    }
    return todos.filter(todos=>{
        if(tab==='all'){
            return true;
        }
        else if(tab==='active'){
            return !todos.completed;
        }
        else if(tab==='completed'){
            return todos.completed;
        }
    })
}