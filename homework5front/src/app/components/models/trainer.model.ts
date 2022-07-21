export class Trainer {
  

    constructor(
      private _name: string,
      private _age: number,
      private _hobby: string,
      private _photo: string,
    
    ) {}

    public get photo(): string {
        return this._photo;
    }
    public set photo(value: string) {
        this._photo = value;
    }
    public get hobby(): string {
        return this._hobby;
    }
    public set hobby(value: string) {
        this._hobby = value;
    }
    public get age(): number {
        return this._age;
    }
    public set age(value: number) {
        this._age = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public toJSON(): any {
        return {
            hobby: this.hobby,
            name: this.name,
            age: this.age,
            photo: this.photo
        };

    }
}

    