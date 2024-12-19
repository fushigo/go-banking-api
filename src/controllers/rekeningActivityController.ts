import { Request, Response } from "express";
import prisma from "../../prisma/client";
import { CreateRekeningActivityDto } from "../dto/rekeningActivity/CreateRekeningActivityDto";
import { UpdateRekeningActivityDto } from "../dto/rekeningActivity/UpdateRekeningActivityDto";

export const getAllRekeningActivity = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const data = await prisma.rekeningActivity.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    res
      .status(200)
      .json({ message: "Success collected data", total: data.length, data });
  } catch (error) {
    console.log("Error when collecting rekening activity data: ", error);
    res.status(500).json({ message: "internal server error" });
  }
};

export const getRekeningActivityById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;

  try {
    const data = await prisma.rekeningActivity.findUnique({
      where: { id_rekening_activity: Number(id) },
    });

    res.status(200).json({ message: "Success collected data", data });
  } catch (error) {
    console.log("Error when collection rekening activity by id: ", error);
    res.status(500).json({ message: "internal server error" });
  }
};

export const createRekeningActivity = async (
  req: Request,
  res: Response
): Promise<void> => {
  const dto: CreateRekeningActivityDto = req.body;

  try {
    const data = await prisma.rekeningActivity.create({
      data: {
        jenisActivity: dto.jenisActivity,
        jumlahDana: dto.jumlahDana,
        id_rekening: dto.idRekening,
      },
    });

    res.status(201).json({ message: "Success created data", data });
  } catch (error) {
    console.log("Error while create rekening activity data : ", error);
    res.status(500).json({ message: "internal server error" });
  }
};
