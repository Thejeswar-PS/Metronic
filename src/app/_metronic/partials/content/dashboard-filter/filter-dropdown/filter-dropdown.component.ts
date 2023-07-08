import { Component, HostBinding, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DashboardService } from 'src/app/core/services/dashboard.service';

@Component({
  selector: 'app-filter-dropdown',
  templateUrl: './filter-dropdown.component.html',
  styleUrls: ['./filter-dropdown.component.scss']
})
export class FilterDropdownComponent implements OnInit {
  @HostBinding('class') class =
  'menu menu-sub menu-sub-dropdown w-250px w-md-300px';
  @HostBinding('attr.data-kt-menu') dataKtMenu = 'true';

  accountManagers : any = [
    {
        "text": " DC Group as Subcntr",
        "value": "77"
    },
    {
        "text": "Account House",
        "value": "76"
    },
    {
        "text": "Alaina Price",
        "value": "51"
    },
  ]
;
  quotefilterForm = this.fb.group({
    Department : ['A'],
    AccountManager : ['All'],
    DateRange : ['CY']
  });
  constructor(private dashboardService: DashboardService, private fb: FormBuilder) { }

  ngOnInit() {
    this.LoadAccountManager();

    this.quotefilterForm.valueChanges.subscribe(data => {
      if (this.quotefilterForm.valid) {
          this.OnFilterDataChange();
      }
  });
  }

  LoadAccountManager()
  {
    let dept = this.quotefilterForm.value.AccountManager as string;

    this.dashboardService.getAccountManagers(dept).subscribe(data  => {
      this.accountManagers = data;
      });
  }

  OnFilterDataChange()
  {

  }
}
