import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Graduate } from 'src/app/Entities/Graduate';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewAllComponent implements OnInit {

  @Input() graduatesList !: Graduate[];
  @Output() selectedGraduate = new EventEmitter<Graduate>();
  constructor() { }

  ngOnInit() {
  }

  sendGraduate(value: Graduate) {
    this.selectedGraduate.emit(value);
  }

}

