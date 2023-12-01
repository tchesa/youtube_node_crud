import { Request, Response } from "express";
import UpdateCategoryService from "../services/UpdateCategoryService";

export default class UpdateCategoryController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { name, description } = request.body;

    const service = new UpdateCategoryService();

    try {
      const category = await service.execute({ id, name, description });
      return response.json(category);
    } catch (error) {
      return response.status(400).json(error.message);
    }
  }
}
