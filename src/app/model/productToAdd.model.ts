import { Photo } from './photos.model';
import { Category } from './category.model';
import { Supplier } from './supplier.model';

export class ProductToAdd {
    constructor(
        public name?: string,
        public description?: string,
        public unitPrice?: number,
        public quantityPerUnit?: number,
        public top20 = false,
        public supplierId?: number,
        public categoryId?: number,
    ) { }
}
