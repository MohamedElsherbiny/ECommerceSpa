export class ProductToUpdate {
    constructor(
        public id?: number,
        public name?: string,
        public description?: string,
        public unitPrice?: number,
        public quantityPerUnit?: number,
        public top20 = false,
        public supplierId?: number,
        public categoryId?: number,
    ) { }
}
