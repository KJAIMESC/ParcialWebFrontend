export class Celular {
    constructor(
        public id?: number | null,
        public marca?: string | null,
        public fechaDeCompra?: Date | null,
        public anoLanzamiento?: Date | null,
        public precio?: number | null,
        public sistemaOperativo?: string | null,
        public gama?: string | null
    ){}
}
