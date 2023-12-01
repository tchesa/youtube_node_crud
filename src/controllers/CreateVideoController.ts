import { Request, Response } from "express";
import CreateVideoService from "../services/CreateVideoService";

export default class CreateVideoController {
  async handle(request: Request, response: Response) {
    const { name, description, category_id, duration } = request.body;

    const service = new CreateVideoService();

    try {
      const video = await service.execute({
        name,
        description,
        category_id,
        duration,
      });
      return response.json(video);
    } catch (error) {
      return response.status(400).json(error?.message);
    }
  }
}
