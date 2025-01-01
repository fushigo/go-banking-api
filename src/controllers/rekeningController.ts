import { Request, Response } from "express";
import prisma from "../../prisma/client";
import { CreateRekeningDto } from "../dto/rekening/CreateRekeningDto";
import { UpdateRekeningDto } from "../dto/rekening/UpdateRekeningDto";
import { CreateNasabahDto } from "../dto/nasabah/CreateNasabahDto";

export const getAllRekening = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const data = await prisma.rekening.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    res
      .status(200)
      .json({ message: "Success collected data", total: data.length, data });
  } catch (error) {
    console.log("Error when collecting rekening data: ", error);
    res.status(500).json({ message: "internal server error" });
  }
};

export const getRekeningById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;

  try {
    const data = await prisma.rekening.findUnique({
      where: { id_rekening: Number(id) },
      include: { rekeningActivity: true },
    });

    res.status(200).json({ message: "Success collected data", data });
  } catch (error) {
    console.log("Error when collection rekening by id: ", error);
    res.status(500).json({ message: "internal server error" });
  }
};

export const createRekening = async (
  req: Request,
  res: Response
): Promise<void> => {
  const dto: CreateRekeningDto = req.body;

  try {
    const data = await prisma.rekening.create({
      data: {
        nomorRekening: dto.nomorRekening,
        jenisTabungan: dto.jenisTabungan,
        totalDana: dto.totalDana,
        bonusBunga: dto.bonusBunga,
        id_nasabah: dto.idNasabah!,
        pin: Number(dto.pin),
      },
    });

    res.status(201).json({ message: "Success created data", data });
  } catch (error) {
    console.log("Error while create rekening data : ", error);
    res.status(500).json({ message: "internal server error" });
  }
};

export const updateRekening = async (
  req: Request,
  res: Response
): Promise<void> => {
  const dto: UpdateRekeningDto = req.body;
  const { id } = req.params;

  try {
    const data = await prisma.rekening.update({
      where: { id_rekening: Number(id) },
      data: {
        nomorRekening: dto.nomorRekening,
        jenisTabungan: dto.jenisTabungan,
        totalDana: dto.totalDana,
        bonusBunga: dto.bonusBunga,
        id_nasabah: dto.idNasabah,
        pin: Number(dto.pin),
      },
    });

    res.status(200).json({ message: "Success updated data", data });
  } catch (error) {
    console.log("Error while updating rekening data: ", error);
    res.status(500).json({ message: "internal server error" });
  }
};

export const deleteRekening = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;

  try {
    const data = await prisma.rekening.delete({
      where: { id_rekening: Number(id) },
    });

    res.status(200).json({ message: "Success deleted data", data });
  } catch (error) {
    console.log("Error while deleting rekening data: ", error);
    res.status(500).json({ message: "internal server error" });
  }
};

//GET REKENING BY NOREK
export const getRekeningByNomorRekening = async (
  req: Request,
  res: Response
): Promise<void> => {
  if (req.method != "POST") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  const { norek } = req.params;
  try {
    const data = await prisma.rekening.findUnique({
      where: { nomorRekening: Number(norek) },
      include: { rekeningActivity: true },
    });

    res.status(200).json({ message: "Success collected data", data });
  } catch (error) {
    console.log("Error while collecting rekening data: ", error);
    res.status(500).json({ message: "internal server error" });
  }
};

// CREATE REKENING INCLUDE NASABAH
export const createRekeningIncUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      nasabahDto,
      rekeningDto,
    }: { nasabahDto: CreateNasabahDto; rekeningDto: CreateRekeningDto } =
      req.body;

    const data = await prisma.nasabah.create({
      data: {
        email: nasabahDto.email,
        jenisKelamin: nasabahDto.jenisKelamin,
        namaLengkap: nasabahDto.namaLengkap,
        nik: nasabahDto.nik,
        nomorTelepone: nasabahDto.nomorTelepone,
        rekening: {
          create: {
            nomorRekening: rekeningDto.nomorRekening,
            jenisTabungan: rekeningDto.jenisTabungan,
            pin: Number(rekeningDto.pin),
            bonusBunga: rekeningDto.bonusBunga,
            totalDana: rekeningDto.totalDana,
          },
        },
      },
    });

    res
      .status(201)
      .json({ statusCode: 201, message: "Success created data", data });
  } catch (error) {
    console.log("Error while creating rekening data: ", error);
    res.status(500).json({ statusCode: 500, message: "internal server error" });
  }
};
