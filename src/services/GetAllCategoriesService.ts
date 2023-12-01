import Category from "../entities/Category";
import { AppDataSource } from "../database/data-source";

export class GetAllCategoriesService {
  async execute(): Promise<Category[]> {
    const repository = AppDataSource.getRepository(Category);

    const categories = await repository.find();

    return categories;
  }
}
