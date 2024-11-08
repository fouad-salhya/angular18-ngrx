import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  private userService = inject(UserService)

  ngOnInit(): void {
     this.userService.getUsers()
         .subscribe(
          {
          next: (res) => {
           console.log(res)
         },
         error: (err) => console.log(err.err)
        })
  }
}
