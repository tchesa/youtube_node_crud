import { Request, Response } from "express";
import GetAllVideosService from "../services/GetAllVideosService";

export default class GetAllVideosController {
  async handle(_: Request, response: Response) {
    const service = new GetAllVideosService();

    const videos = await service.execute();

    return response.json(videos);
  }
}
