import { Request, Response } from "express";
import prisma from "../../prisma/client";
import { CreateLogActivityDto } from "../dto/logActivity/CreateLogActivityDto";

export const getAllLogActivity = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const data = await prisma.logActivity.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        karyawan: {
          select: {
            nomorKaryawan: true,
            namaKaryawan: true,
          },
        },
      },
    });

    res
      .status(200)
      .json({ message: "Success collected data", total: data.length, data });
  } catch (error) {
    console.log("Error when collecting log activity data: ", error);
    res.status(500).json({ message: "internal server error" });
  }
};

export const getLogActivityById = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;

  try {
    const data = await prisma.logActivity.findUnique({
      where: { id_log_activity: Number(id) },
      include: { karyawan: true },
    });

    res.status(200).json({ message: "Success collected data", data });
  } catch (error) {
    console.log("Error when collection log activity by id: ", error);
    res.status(500).json({ message: "internal server error" });
  }
};

export const createLogActivity = async (
  req: Request,
  res: Response
): Promise<void> => {
  const dto: CreateLogActivityDto = req.body;

  try {
    const data = await prisma.logActivity.create({
      data: {
        operation: dto.operation,
        id_karyawan: dto.idKaryawan,
      },
    });

    res.status(201).json({ message: "Success created data", data });
  } catch (error) {
    console.log("Error while create log activity data : ", error);
    res.status(500).json({ message: "internal server error" });
  }
};
