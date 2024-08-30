
// <----sidebar---->
const sidemenu = document.getElementById('sidemenu');

const openmenu=()=> {
  sidemenu.style.right = '0';
}
const closemenu=()=> {
  sidemenu.style.right = '-200px';
}

// <----about---->
const showContent=(section, element)=> {

  const contents = document.querySelectorAll(".sub-contents");
  contents.forEach(content => {
    content.classList.remove("active-sub");
  });

  const selectedContent = document.getElementById(section);
  if (selectedContent) {
    selectedContent.classList.add("active-sub");
  }

  const links = document.querySelectorAll(".sub-links");
  links.forEach(link => {
    link.classList.remove("active-link");
  });

  element.classList.add("active-link");
}

// <----email validation---->

  const validateName=()=>{
    const name = document.getElementById('name').value;
    const regexName = /^([a-zA-Z ]{3,30})$/;
    const validName = regexName.test(name)
    if(validName){
      document.getElementById('name-error').innerText = ''
      return true
    }else{
      document.getElementById('name-error').innerHTML = 'Please enter a valid name'
      return false
    }
  }

  const validateEmail=()=>{
    const email = document.getElementById('email').value;
    const regexEmail = /^([a-zA-Z0-9\._-]+)@([a-zA-Z0-9-_]{2,8})\.([a-zA-Z]{2,6})(\.[a-zA-Z]{2,4})?$/;
    const validEmail = regexEmail.test(email)
    if(validEmail){
      document.getElementById('email-error').innerText = ''
      return true
    }else{
      document.getElementById('email-error').innerHTML = 'Please enter a valid email'
      return false
    }
  }

  const validateMessage=()=>{
    const message = document.getElementById('message').value;
    const minLength = 10;
    if (message.length >= minLength) {
      document.getElementById('message-error').innerText = ''
      return true
    }else {
      document.getElementById('message-error').innerHTML = 'Must be at least 10 characters long.'
      return false
    }
  }


  const validate=()=>{
    const name = validateName()
    const email = validateEmail()
    const message = validateMessage()

    if (name && email && message) {
      setTimeout(() => {
        document.getElementById('feedback').innerHTML = "Thanks for your message! I’ll get back to you soon.";
        document.getElementById('contactForm').reset();
    }, 1000);
      return false
    }else {
      document.getElementById('feedback').innerHTML = 'Please fill out all required fields correctly.';
      return false;
    }
  }


// <---filter functionality---->

const filterProjects=(category)=> {
  const projects = document.querySelectorAll(".card");

  projects.forEach(project => {
    if (category === 'all' || project.getAttribute("data-category") === category) {
      project.style.display = "flex"; 
    } else {
      project.style.display = "none";
    }
  });
}


  