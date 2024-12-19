export class CreateRekeningDto {
  nomorRekening!: number;
  jenisRekening!: "Tabungan" | "Giro" | "Deposito";
  jenisTabungan?: "GoSilver" | "GoPlatinum" | "GoPriority";
  totalDana!: number;
  bonusBunga!: number;
  idNasabah!: number;
  pin!: number;
}
