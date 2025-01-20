export class CreateRekeningDto {
  nomorRekening!: string;
  jenisTabungan?: "GoSilver" | "GoPlatinum" | "GoPriority";
  totalDana!: number;
  bonusBunga!: number;
  idNasabah?: number;
  pin?: number;
}
