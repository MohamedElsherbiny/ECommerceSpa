import { Photo } from './photos.model';
import { Category } from './category.model';
import { Supplier } from './supplier.model';

export class Product {
    constructor(
        public id?: number,
        public name?: string,
        public description?: string,
        public unitPrice?: number,
        public quantityPerUnit?: number,
        public top20?: boolean,
        public supplier?: Supplier,
        public supplierId?: number,
        public category?: Category,
        public categoryId?: number,
        public photos?: Photo[]
    ) { }
}
