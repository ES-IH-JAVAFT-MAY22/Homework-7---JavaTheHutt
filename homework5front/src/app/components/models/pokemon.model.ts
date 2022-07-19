export class Pokemon {

  constructor(
    private _name: string,
    private _photo: string,
    private _type: string,
    private _hp: number,
    private _attack: number,
    private _defense: number,
    private _specialAttack: number,
    private _specialDefense: number,
    private _speed: number
  ) {}
  public get hp(): number {
    return this._hp;
  }
  public set hp(value: number) {
    this._hp = value;
  }
  public get attack(): number {
    return this._attack;
  }
  public set attack(value: number) {
    this._attack = value;
  }
  public get defense(): number {
    return this._defense;
  }
  public set defense(value: number) {
    this._defense = value;
  }
  public get specialAttack(): number {
    return this._specialAttack;
  }
  public set specialAttack(value: number) {
    this._specialAttack = value;
  }
  public get specialDefense(): number {
    return this._specialDefense;
  }
  public set specialDefense(value: number) {
    this._specialDefense = value;
  }
  public get speed(): number {
    return this._speed;
  }
  public set speed(value: number) {
    this._speed = value;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  public get photo(): string {
    return this._photo;
  }
  public set photo(value: string) {
    this._photo = value;
  }

  public get type(): string {
    return this._type;
  }
  public set type(value: string) {
    this._type = value;
  }

}
