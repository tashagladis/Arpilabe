export  class Personne {
      PMID : Number;
     get PMId(): Number {
          return this.PMID;
      }
      set id(value: boolean) {
          this.id = value;
      }
      Email : string;
      get email(): string {
          return this.Email;
      }
      set email(value: string) {
          this.Email = value;
      }
       Phone : string;
      get phone(): string {
          return this.Phone;
      }
      set phone(value: string) {
          this.Phone = value;
      }
      Lastname : string;
     
      get lastname(): string {
          return this.Lastname;
      }
      set lastname(value: string) {
          this.Lastname = value;
      }
     Firstname : string;
      get firstname(): string {
          return this.Firstname;
      }
      set firstname(value: string) {
          this.Firstname = value;
      }
       Birthday : Date;
      get birthday(): Date {
          return this.Birthday;
      }
      set birthday(value: Date) {
          this.birthday= value;
      }
      Departement : string;
      get departement(): string {
          return this.Departement;
      }
      set departement(value: string) {
          this.departement= value;
      }
      Note : string;
      get note(): string {
          return this.Note;
      }
      set note(value: string) {
          this.Note= value;
      }

     constructor(_id: number, _email: string, _phone: string,
     _lastanme: string,_firstname: string, _departement: string, _note: string, _birthday: Date ) {
          this.PMID = _id;
          this.Email = _email;
          this.Phone = _phone;
          this.Lastname = _lastanme;
          this.Firstname = _firstname;
          this.Birthday = _birthday;
          this.Departement = _departement;
          this.Note = _note;
        }
}
