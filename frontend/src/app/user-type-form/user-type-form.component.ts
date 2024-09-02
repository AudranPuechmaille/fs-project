import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserTypeService } from '../services/user-type.service';
import { UserType } from '../models/user-type.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-user-type-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './user-type-form.component.html',
  styleUrls: ['./user-type-form.component.css']
})
export class UserTypeFormComponent implements OnInit {
  userType: UserType = { type: '' };
  editMode = false;

  constructor(
    private userTypeService: UserTypeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const userTypeId = this.route.snapshot.paramMap.get('id');
    if (userTypeId) {
      this.editMode = true;
      this.userTypeService.getUserTypeById(+userTypeId).subscribe((type) => (this.userType = type));
    }
  }

  saveUserType() {
    if (this.editMode) {
      this.userTypeService.updateUserType(this.userType).subscribe(() => this.router.navigate(['/user-types']));
    } else {
      this.userTypeService.addUserType(this.userType).subscribe(() => this.router.navigate(['/user-types']));
    }
  }
  
  onSubmit() {
    if (this.userType.id) {
      this.userTypeService.updateUserType(this.userType).subscribe(() => this.router.navigate(['/user-types']));
    } else {
      this.userTypeService.addUserType(this.userType).subscribe(() => this.router.navigate(['/user-types']));
    }
  }
}
