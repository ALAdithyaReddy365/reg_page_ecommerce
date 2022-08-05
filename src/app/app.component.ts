import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerceapp-ui';
  searchText: any;
  users =[
    {id: 1, name:"Arvind", email:"arvindkarthik2000@gmail.com"},
    {id: 2,name:"Karthik",email:"karthik@gmail.com"},
    {id: 3, name:"usha", email:"usha@gmail.com"},
    {id: 4, name:"abhishek", email:"abhi@gmail.com"},
    {id: 5, name:"raju", email:"raju@gmail.com"}

   ];
}
