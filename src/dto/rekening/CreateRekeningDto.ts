export class CreateRekeningDto {
  nomorRekening!: number;
  jenisTabungan?: "GoSilver" | "GoPlatinum" | "GoPriority";
  totalDana!: number;
  bonusBunga!: number;
  idNasabah!: number | undefined;
  pin!: number;
}
