import { AppDataSource } from "../database/data-source";
import Video from "../entities/Video";

export default class GetAllVideosService {
  async execute(): Promise<Video[]> {
    const repository = AppDataSource.getRepository(Video);

    return await repository.find({
      relations: ["category"],
    });
  }
}
