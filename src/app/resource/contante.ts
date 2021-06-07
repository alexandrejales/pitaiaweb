import { Login } from '../model/entity/login';

export class Constantes {
    public static API_URL = 'http://192.168.1.2:8080';
    public static EMAIL = 'email';
    public static login: Login = new Login();
    public static TOKEN = 'token';
    public static CONTA_ID = 'conta';
    public static EXP = 'exp';
    public static IAT = 'iat';
    public static PERFIL = 'perfil';
    public static USUARIO_ID = 'usuario';
    public static DISPOSITIVO_CHAVE = 'chave';

    // Pontos de quebras de tela
    public static BREAKPOINT_XS: 0;
    public static BREAKPOINT_SM: 576;
    public static BREAKPOINT_MD: 768;
    public static BREAKPOINT_LG: 992;
    public static BREAKPOINT_XL: 1200;
    public static BREAKPOINT_XXL: 1400;
}
