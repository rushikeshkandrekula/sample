import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 products :Array<product> =[
    {Name:'Iphone 11 pro',Price : 1500, Desc:'Mobile phone',
    productpath:'assets/pics/Iphone11.jpg'},
    {Name:'samsung M31',Price : 1400, Desc:'Mobile phone',
    productpath:'assets/pics/samsung3.jpg'},
    {Name:'oneplus',Price : 1800, Desc:'Mobile phone',
    productpath:'assets/pics/oneplus.jpg'},
    {Name:'realme pro',Price : 1300, Desc:'Mobile phone',
    productpath:'assets/pics/realme.jpg'},
    {Name:'hp',Price : 2500, Desc:'HP laptop',
    productpath:'assets/pics/hp.jpg'},
    {Name:'lenovo',Price : 2400, Desc:'Lenovo laptop',
    productpath:'assets/pics/lenovo.jpg'},
    {Name:'dell',Price : 2300, Desc:'Dell laptop',
    productpath:'assets/pics/dell.jpg'},
    {Name:'apple',Price : 2800, Desc:'Apple laptop',
    productpath:'assets/pics/apple.jpg'},
    {Name:'women dress',Price : 1000, Desc:'Women Dress',
    productpath:'assets/pics/women1.jpg'},
    {Name:'women fashion',Price : 900, Desc:' women saree',
    productpath:'assets/pics/women2.jpg'},
    {Name:'women tshirt',Price : 800, Desc:'women tshirt',
    productpath:'assets/pics/women3.jpg'},
    {Name:'women saree',Price : 700, Desc:'women saree',
    productpath:'assets/pics/women4.jpg'}

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
