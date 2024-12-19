export class CreateRekeningActivityDto {
  jenisActivity!: "DanaKeluar" | "DanaMasuk";
  jumlahDana!: number;
  idRekening!: number;
}
