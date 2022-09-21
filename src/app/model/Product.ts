export class ProductModel {
  productName: string;
  listOfActions: ActionModel[];

  constructor(_productName: string, _listOfActions: ActionModel[]) {
    this.productName = _productName;
    this.listOfActions = _listOfActions;
  }
}

export class ActionModel {
  start: Date = new Date();
  end: Date = new Date();
  title: string = '';
  description: string = '';
  type: string = '';

  constructor( _start: Date, _end: Date, _title: string, _description: string, _type: string) {
    this.start = _start;
    this.end = _end;
    this.title = _title;
    this.description = _description;
    this.type = _type;
  }
}
