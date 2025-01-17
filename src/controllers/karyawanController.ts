import { Request, Response } from "express";
import prisma from "../../prisma/client";
import { CreateKaryawanDto } from "../dto/karyawan/createKaryawanDto";
import { UpdateKaryawanDto } from "../dto/karyawan/updateKaryawanDto";

export const getAllKaryawan = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const data = await prisma.karyawan.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    res
      .status(200)
      .json({ message: "Success collected data", total: data.length, data });
  } catch (error) {
    console.log("Error when collecting karyawan data: ", error);
    res.status(500).json({ message: "internal server error" });
  }
};

export const getKaryawanById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;

  try {
    const data = await prisma.karyawan.findUnique({
      where: { id_karyawan: Number(id) },
    });

    res.status(200).json({ message: "Success collected data", data });
  } catch (error) {
    console.log("Error when collection karyawan by id: ", error);
    res.status(500).json({ message: "internal server error" });
  }
};

export const createKaryawan = async (
  req: Request,
  res: Response
): Promise<void> => {
  const dto: CreateKaryawanDto = req.body;

  try {
    const data = await prisma.karyawan.create({
      data: {
        namaKaryawan: dto.namaKaryawan,
        nomorKaryawan: dto.nomorKaryawan,
        password: dto.password,
        username: dto.username,
      },
    });

    res.status(201).json({
      statusCode: res.statusCode,
      message: "Success created data",
      data,
    });
  } catch (error) {
    console.log("Error while create karyawan data : ", error);
    res
      .status(500)
      .json({ statusCode: res.statusCode, message: "internal server error" });
  }
};

export const updateKaryawan = async (
  req: Request,
  res: Response
): Promise<void> => {
  const dto: UpdateKaryawanDto = req.body;
  const { id } = req.params;

  try {
    const data = await prisma.karyawan.update({
      where: { id_karyawan: Number(id) },
      data: {
        namaKaryawan: dto.namaKaryawan,
        nomorKaryawan: dto.nomorKaryawan,
        password: dto.password,
        username: dto.username,
      },
    });

    res.status(200).json({ message: "Success updated data", data });
  } catch (error) {
    console.log("Error while updating karyawan data: ", error);
    res.status(500).json({ message: "internal server error" });
  }
};

export const updateKaryawanByNomorKaryawan = async (
  req: Request,
  res: Response
): Promise<void> => {
  const dto: UpdateKaryawanDto = req.body;
  const { nm } = req.params;
  try {
    const data = await prisma.karyawan.update({
      where: { nomorKaryawan: nm },
      data: {
        namaKaryawan: dto.namaKaryawan,
        nomorKaryawan: dto.nomorKaryawan,
        password: dto.password,
        username: dto.username,
      },
    });

    res.status(200).json({ message: "Success updated data", data });
  } catch (error) {
    console.log("Error while updating karyawan data: ", error);
    res.status(500).json({ message: "internal server error" });
  }
};

export const deleteKaryawan = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;

  try {
    const data = await prisma.karyawan.delete({
      where: { id_karyawan: Number(id) },
    });

    res.status(200).json({ message: "Success deleted data", data });
  } catch (error) {
    console.log("Error while deleting karyawan data: ", error);
    res.status(500).json({ message: "internal server error" });
  }
};
