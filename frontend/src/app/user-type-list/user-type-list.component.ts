import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { UserTypeService } from '../services/user-type.service';
import { UserType } from '../models/user-type.model';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-user-type-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatButtonModule
  ],
  templateUrl: './user-type-list.component.html',
  styleUrls: ['./user-type-list.component.css']
})
export class UserTypeListComponent {
  userTypes: UserType[] = [];
  displayedColumns: string[] = ['type', 'actions'];

  constructor(private userTypeService: UserTypeService, private router: Router) {
    this.userTypeService.getUserTypes().subscribe((types) => (this.userTypes = types));
  }

  deleteUserType(id: number) {
    this.userTypeService.deleteUserType(id).subscribe(() => {
      this.userTypes = this.userTypes.filter((type) => type.id !== id);
    });
  }

  editUserType(userType: UserType) {
    this.router.navigate(['/user-type-form', userType.id]);
  }
}
