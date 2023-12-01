import { AppDataSource } from "../database/data-source";
import Category from "../entities/Category";
import { CategoryRequest } from "./CreateCategoryService";

type CategoryUpdateRequest = CategoryRequest & {
  id: string;
};

export default class UpdateCategoryService {
  async execute({
    id,
    name,
    description,
  }: CategoryUpdateRequest): Promise<Category> {
    const repository = AppDataSource.getRepository(Category);

    const category = await repository.findOneBy({ id });

    if (!category) {
      throw new Error("category does not exist");
    }

    category.name = name || category.name;
    category.description = description || category.description;

    return await repository.save(category);
  }
}
