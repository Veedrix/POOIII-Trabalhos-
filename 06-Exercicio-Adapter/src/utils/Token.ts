export default class Token{
    private _token: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lIjoiVml0b3IgU2lxdWVpcmEiLCJkaXNjaXBsaW5hIjoiUE9PMyIsInR1cm1hIjoyfQ.dbipNnHkFTTAiyh_lk5ShsSlDTd0DRyjJISh1hDkGDw";

    get token(): string {
        return this._token; 
    }
}