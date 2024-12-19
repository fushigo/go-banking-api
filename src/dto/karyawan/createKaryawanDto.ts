export class CreateKaryawanDto {
  nomorKaryawan!: number;
  namaKaryawan!: string;
  username!: string;
  password!: string;
  role!: "SuperAdmin" | "Admin" | "Karyawan";
}
