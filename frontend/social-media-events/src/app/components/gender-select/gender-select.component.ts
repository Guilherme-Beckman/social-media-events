import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Importe o FormsModule

@Component({
  selector: 'app-gender-select',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './gender-select.component.html',
  styleUrl: './gender-select.component.css'
})
export class GenderSelectComponent {
  selectedGender: string= '';
  isOtherSelected: boolean = false;
  customGender: string ='';

  onGenderChange(event: Event):void{
    const target = event.target as HTMLSelectElement;
    this.isOtherSelected = target.value === 'outro';
  }
}
