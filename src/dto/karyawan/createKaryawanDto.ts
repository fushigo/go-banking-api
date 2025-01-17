export class CreateKaryawanDto {
  nomorKaryawan!: string | undefined;
  namaKaryawan!: string | undefined;
  username!: string | undefined;
  password!: string | undefined;
  role!: "SuperAdmin" | "Admin" | "Karyawan" | undefined;
}
