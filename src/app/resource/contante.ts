import { Login } from "../model/entity/login";

export class Constante {
    public static API_URL: string = "http://192.168.1.2:8080";
    public static EMAIL: string = "email";
    public static login: Login = new Login();
    public static TOKEN: string = 'token';
    public static CONTA_ID: string = 'conta';
    public static EXP: string = 'exp';
    public static IAT: string = 'iat';
    public static PERFIL: string = 'perfil';
    public static USUARIO_ID: string = 'usuario';
    public static DISPOSITIVO_CHAVE: string = 'chave';
}