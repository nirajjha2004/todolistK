function addtask(){
    const newtask=document.createElement('li')
    const taskList=document.getElementById('tasklist')
    taskList.appendChild(newtask)
    newtask.textContent=document.getElementById('inputTask').value
    document.getElementById('inputTask').value = ""
    deleteTask(newtask)
}
function deleteTask(newtask){
          const delbtn=document.createElement('button')
          delbtn.textContent="delete"
          newtask.appendChild(delbtn)
          delbtn.onclick=function(){
          newtask.remove()
          }
}