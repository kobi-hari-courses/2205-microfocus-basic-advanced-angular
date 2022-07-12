export class Credentials {
    public readonly secret!: string;

    constructor(private username: string, private password: string) {
        this.secret = encodeURI(username + password);
        console.log('A credentials instance was constructed');
        
    }
}