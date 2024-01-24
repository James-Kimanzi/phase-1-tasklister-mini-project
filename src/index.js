//
document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector ('form');
    form.addEventListener('submit', (e) =>{
  e.preventDefault();
  buildTaskForm (e.target['new-task-description'].value);
  form.reset()
  });


  const buildTaskForm = (task) => {
  let p = document.createElement ('p');
  let btn = document.createElement ('button');
  btn.addEventListener('click', handleDelete);
  btn.textContent= 'X';
  p.textContent =  `${task}  `;
  p.appendChild(btn);
  document.querySelector('#tasks').appendChild(p);
  };

  const handleDelete = (e) => {
    e.target.parentNode.remove()
  };
  
});