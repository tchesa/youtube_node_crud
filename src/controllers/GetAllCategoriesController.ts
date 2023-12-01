import { Request, Response } from "express";
import { GetAllCategoriesService } from "../services/GetAllCategoriesService";

export default class GetAllCategoriesController {
  async handle(_: Request, response: Response) {
    const service = new GetAllCategoriesService();

    const categories = await service.execute();

    return response.json(categories);
  }
}
