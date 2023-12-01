import { AppDataSource } from "../database/data-source";
import Category from "../entities/Category";
import Video from "../entities/Video";

type VideoRequest = {
  name: string;
  description: string;
  duration: number;
  category_id: string;
};

export default class CreateVideoService {
  async execute({ name, description, duration, category_id }: VideoRequest) {
    const repository = AppDataSource.getRepository(Video);
    const cateogryRepository = AppDataSource.getRepository(Category);

    if (!(await cateogryRepository.findOneBy({ id: category_id }))) {
      throw new Error("category not found");
    }

    const video = repository.create({
      name,
      description,
      duration,
      category_id,
    });

    await repository.save(video);

    return video;
  }
}
