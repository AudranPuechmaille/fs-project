import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { UserTypeService } from '../services/user-type.service';
import { User } from '../models/user.model';
import { UserType } from '../models/user-type.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  user: User = { firstName: '', lastName: '', userType: {} as UserType };
  userTypes: UserType[] = [];
  editMode = false;

  constructor(
    private userService: UserService,
    private userTypeService: UserTypeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userTypeService.getUserTypes().subscribe((types) => (this.userTypes = types));

    const userId = this.route.snapshot.paramMap.get('id');
    if (userId) {
      this.editMode = true;
      this.userService.getUserById(+userId).subscribe((user) => (this.user = user));
    }
  }

  saveUser() {
    if (this.editMode) {
      this.userService.updateUser(this.user).subscribe(() => this.router.navigate(['/users']));
    } else {
      this.userService.addUser(this.user).subscribe(() => this.router.navigate(['/users']));
    }
  }
  
  onSubmit() {
    if (this.user.id) {
      this.userService.updateUser(this.user).subscribe(() => this.router.navigate(['/users']));
    } else {
      this.userService.addUser(this.user).subscribe(() => this.router.navigate(['/users']));
    }
  }
}
