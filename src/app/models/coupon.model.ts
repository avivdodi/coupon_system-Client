export class Coupon {
    constructor(
        public id?: number,
        public title?: string,
        public description?: string,
        public price?: number,
        public amount?: number,
        public category?: string,
        public startDate?: Date,
        public endDate?: Date,
        public companyId?: number,
        public imageURL?: string) {
    }
}
