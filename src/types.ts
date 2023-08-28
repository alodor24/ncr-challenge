export type AccountData = {
  e: string;
  n: string;
  t: string;
  saldo: string;
  moneda: string;
  tipo_letras: string;
};

export type ResponseData = {
  cuentas: AccountData[];
  cuestas: {
    id: number;
    nombre: string;
  }[];
};
