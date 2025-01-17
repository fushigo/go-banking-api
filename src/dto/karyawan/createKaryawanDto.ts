export class CreateKaryawanDto {
  nomorKaryawan!: string;
  namaKaryawan!: string;
  username!: string;
  password!: string;
  role!: "SuperAdmin" | "Admin" | "Karyawan";
}
