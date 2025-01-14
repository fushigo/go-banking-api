import { Request, Response } from "express";
import prisma from "../../prisma/client";
import { CreateNasabahDto } from "../dto/nasabah/CreateNasabahDto";
import { UpdateNasabahDto } from "../dto/nasabah/UpdateNasabahDto";

export const getAllNasabah = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const data = await prisma.nasabah.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    res
      .status(200)
      .json({ message: "Success collected data", total: data.length, data });
  } catch (error) {
    console.log("Error when collecting nasabah data: ", error);
    res.status(500).json({ message: "internal server error" });
  }
};

export const getNasabahById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;

  try {
    const data = await prisma.nasabah.findUnique({
      where: { id_nasabah: Number(id) },
      include: {
        rekening: { include: { rekeningActivity: true } },
      },
    });

    res.status(200).json({ message: "Success collected data", data });
  } catch (error) {
    console.log("Error when collection nasabah by id: ", error);
    res.status(500).json({ message: "internal server error" });
  }
};

export const createNasabah = async (
  req: Request,
  res: Response
): Promise<void> => {
  const dto: CreateNasabahDto = req.body;

  try {
    const data = await prisma.nasabah.create({
      data: {
        nik: dto.nik,
        email: dto.email,
        namaLengkap: dto.namaLengkap,
        nomorTelepone: dto.nomorTelepone,
        jenisKelamin: dto.jenisKelamin,
      },
    });

    res.status(201).json({ message: "Success created data", data });
  } catch (error) {
    console.log("Error while create nasabah data : ", error);
    res.status(500).json({ message: "internal server error" });
  }
};

export const updateNasabah = async (
  req: Request,
  res: Response
): Promise<void> => {
  const dto: UpdateNasabahDto = req.body;
  const { id } = req.params;

  try {
    const data = await prisma.nasabah.update({
      where: { id_nasabah: Number(id) },
      data: {
        nik: dto.nik,
        email: dto.email,
        namaLengkap: dto.nik,
        nomorTelepone: dto.nomorTelepone,
        jenisKelamin: dto.jenisKelamin,
      },
    });

    res.status(200).json({ message: "Success updated data", data });
  } catch (error) {
    console.log("Error while updating nasabah data: ", error);
    res.status(500).json({ message: "internal server error" });
  }
};

export const deleteNasabah = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;

  try {
    const data = await prisma.nasabah.delete({
      where: { id_nasabah: Number(id) },
    });

    res.status(200).json({ message: "Success deleted data", data });
  } catch (error) {
    console.log("Error while deleting nasabah data: ", error);
    res.status(500).json({ message: "internal server error" });
  }
};

export const getNasabahByNik = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { nik } = req.params;

  try {
    const data = await prisma.nasabah.findUnique({
      where: { nik },
      include: { rekening: true },
    });

    res.status(200).json({ message: "Success collected data", data });
  } catch (error) {
    console.log("Error while collecting nasabah data ", error);
    res.status(500).json({ message: "internal server error" });
  }
};

export const deleteNasabahByNik = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { nik } = req.params;

  if (!nik) {
    res.status(400).json({
      statusCode: res.statusCode,
      message: "The 'nik' parameter is required.",
    });
    return;
  }

  try {
    const data = await prisma.nasabah.delete({
      where: { nik: nik.toString() },
    });

    res.status(200).json({
      statusCode: res.statusCode,
      message: "Success deleted data",
      data,
    });
  } catch (error) {
    console.log("Error while deleting nasabah data: ", error);
    res
      .status(500)
      .json({ statusCode: res.statusCode, message: "internal server error" });
  }
};
