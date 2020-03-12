/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

/***** 
The project explained on my own word:
Objectif is to take a list of students name and content from the HTML/DOM,  manipulate the list by adding more elements and display the name 10 students per page.
*/

   // Declare the global constant to get information from the DOM
document.addEventListener('DOMContentLoaded', (e) => {
   const listOfStudents = document.querySelector('.student-list') 
   const tenStudentPerPage = 10;
   const page = document.querySelector('.page');
   /*
   I need to create a function call showPage that call 10 item or student name on the page when display 
   list parameter ... represent the actual list of student pass as argument
   page parameter ... represent the page number divided by the list
   */
   const list = listOfStudents.children;
   const showPage = (list, page) => {
      list = listOfStudents.children;
      // adding constant for the start and ending point
      const startPoint = (tenStudentPerPage * page) - 9;
      const endPoint = tenStudentPerPage * page;
      //numberOfPage = list / tenStudentPerPage;
      //console.log(list);
      for (let i = 0; i < list.length; i++) {
         if (i >= startPoint && i <= endPoint) {
            list[i].style.display = '';
         }  else {
            list[i].style.display = 'none';
         }
         /* my issue is with this here:
         if (i >= tenStudentPerPage) {
            list[i].style.display = 'none';
         } else if (i <= tenStudentPerPage) {
            list[i].style.display = '';
         }
         */
      }
   }
   showPage();
   /* 
   I need to create the second function name appendPageLinks to activate the links for page numbering at the bottom of the page. 
   */
   const appendPageLinks = (list) => {
      
      const div = document.createElement('div');
      div.className = 'pagination';
      const ul = document.createElement('ul');
      div.appendChild(ul);
      
      
      const numberOfPage = Math.ceil(list.length / tenStudentPerPage);
      
      for (let i = 0; i < numberOfPage; i++) {
         const li = document.createElement('li');
         const a = document.createElement('a');
         li.appendChild(a);
         ul.appendChild(li);
         //div.appendChild(ul);
         //div.className = 'pagination';
         a.href = '#';
         a.textContent = i+1;

         
         
         //a.className = 'active';
         //a.className = '';
      
         

         
         /*
         Add the active class name to the first pagination link initially.
         add an eventlistener on the page link when click at the bottom of the page 
         */
         a.addEventListener('click', (e) => {
            
            const paginationLink = document.getElementsByTagName('A'); 
            //a.className = 'active';
            
            for (let i = 0; i < paginationLink.length; i++) {
               paginationLink[i].className = '';
               e.target.paginationLink = 'active';
            }
            
            if (i === 0) {
            
               a.className = 'active';
               for (let i = 0; i < paginationLink.length; i++)
               paginationLink[i].className = '';
            } else {
               paginationLink[i].className = 'active';
            }
            
            
            // for (let i = 0; i > a.length; i ++) {
            //    if (i === 0) {
            //       a.className = 'active';
            //    }
            // }
            // a.className = '';
            // for (let i = 0; i > a.length; i++) {
            //    paginationLink[i].className = '';
            //    if (i === 0) {
            //       a.className = 'active';
            //    } else {
            //       paginationLink[i].className = 'active';
            //    }
            //    // else {
            //    //    paginationLink[i].className = 'active';
            //    // }
               
            // }     
            // for (let i = 0; i < paginationLink.length; i++) {
               

            //    if (i === 0) {
            //       a.className = 'active';  
            //    } else {
            //       paginationLink[i].className = '';
            //    }
            //    if (i === 0) {
            //       a.className = 'active';
            //    } else {
            //       paginationLink[i].className = 'active';
            //    }
            //    // } else {
                  
            //    //    a.className = '';  
            //    // } else {
            //    // //this activate the classList
            //    // //e.target.paginationLink = 'active'; 
            //    // a.className = 'active';  
            //    // }
            //    // }
            //    //e.target.paginationLink = 'active'; 
              
            //    // console.log(page);
            //    // console.log(paginationLink);
            //    console.log(a);
            // }
            showPage(list, e.target.textContent);
         });
      }
      page.appendChild(div);
   }
   // call both function 
   showPage(list, 1);
   appendPageLinks(list);
});
