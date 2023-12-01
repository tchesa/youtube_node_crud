import Category from "../entities/Category";
import { AppDataSource } from "../database/data-source";

export type CategoryRequest = {
  name: string;
  description: string;
};

export class CreateCategoryService {
  async execute({ name, description }: CategoryRequest): Promise<Category> {
    const repository = AppDataSource.getRepository(Category);

    if (await repository.findOneBy({ name })) {
      throw new Error("category already exists");
    }

    const category = repository.create({ name, description });

    await repository.save(category);

    return category;
  }
}
