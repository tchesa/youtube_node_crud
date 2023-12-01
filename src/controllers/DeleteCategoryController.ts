import { Request, Response } from "express";
import DeleteCategoryService from "../services/DeleteCategoryService";

export default class DeleteCategoryController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new DeleteCategoryService();

    try {
      await service.execute(id);
    } catch (error) {
      return response.status(400).json(error?.message);
    }

    return response.json();
  }
}
