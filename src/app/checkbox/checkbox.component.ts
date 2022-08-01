import { ThisReceiver } from '@angular/compiler';
import {
  AfterViewInit,
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit(): void {}
  curr:any
  data = [
    { name: '0-0', parentId: null },
    {
      name: '0-1',
      parentId: null,
    },
    {
      name: '0-2',
      parentId: null,
    },
    {
      name: '0-0-0',
      parentId: '0-0',
    },
    {
      name: '0-0-0-0',
      parentId: '0-0-0',
    },
    {
      name: '0-0-0-1',
      parentId: '0-0-0',
    },
    {
      name: '0-0-0-2',
      parentId: '0-0-0',
    },
    {
      name: '0-0-1-0',
      parentId: '0-0-1',
    },
    {
      name: '0-0-1-1',
      parentId: '0-0-1',
    },
    {
      name: '0-0-1-2',
      parentId: '0-0-1',
    },
    {
      name: '0-0-2',
      parentId: '0-0',
    },
    {
      name: '0-1-0',
      parentId: '0-1',
    },
    {
      name: '0-0-1',
      parentId: '0-0',
    },
  ];

  ngAfterViewInit(): void {
    // sorting data
    this.data.sort((a: any, b: any) => (a.name < b.name ? -1 : 1));

    this.data.forEach((el) => {
      // id for input checkbox
      const inpId = `inp${el.name}`;
      // id for ul
      const ulId = `ul${el.name}`;
      // create li
      const li = document.createElement('li');
      li.setAttribute('style', 'list-style: none');
      // create checkbox
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.setAttribute('id', inpId);
      checkbox.setAttribute('name', ulId);
      checkbox.addEventListener('click',function(event){
        const target = event.target as HTMLInputElement
        const checkStatus = target.checked
        const allChild = document.getElementById(target.name)?.getElementsByTagName('input') as HTMLCollection
        for(let i=0;i<allChild.length;i++){
          const childId = allChild.item(i)?.id
          if(childId){
            const childInput = document.getElementById(childId) as HTMLInputElement
            childInput.checked = checkStatus
          }
        }

      })
      // create label
      const label = document.createElement('label');
      label.setAttribute('for', inpId);
      label.innerText = el.name;
      // create ul
      const ul = document.createElement('ul');
      ul.setAttribute('id', ulId);
      // append checkbox, label and ul into the li
      li.append(checkbox, label, ul);
      // append li to parent ul
      if (el.parentId == null) {
        document.getElementById('list')!.appendChild(li);
      } else {
        document.getElementById(`ul${el.parentId}`)!.appendChild(li);
      }
    });
  }
}
