import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ProductItem } from './product.model'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productItem: ProductItem[] = [
    new ProductItem(1, 'Laptop', 750, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5FpRKXeVbKWa1Wo75eOMva5FrE7QCREZgJj8iWNRZf9me2BcCRg'),
    new ProductItem(2,'Tesla X', 133000, 'http://st.motortrend.com/uploads/sites/5/2016/03/2016-Tesla-Model-X-P90D-front-three-quarter-doors-open.jpg'),
    new ProductItem(3,'Tesla S', 102000, 'https://media.ed.edmunds-media.com/tesla/model-s/2016/oem/2016_tesla_model-s_sedan_p90d_fq_oem_2_1280.jpg'),
    new ProductItem(4,'Tesla Y', 35000, 'https://www.tesla.com/sites/default/files/images/blogs/models_blog_post.jpg'),
  ]

  @Output() cartUpdated = new EventEmitter<{
    productId: number,
    productName: string,
    productPrice: number
  }>();

  constructor() { }

  ngOnInit() {
  }

  onCartUpdated(event) {
    const id = event.target.getAttribute('id');
    const index = this.productItem.findIndex(elem => elem.id == id);
    this.cartUpdated.emit({
        productId: this.productItem[index].id,
        productName: this.productItem[index].name,
        productPrice: this.productItem[index].price
      });
}


}
