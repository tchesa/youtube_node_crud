import { AppDataSource } from "../database/data-source";
import Category from "../entities/Category";

export default class DeleteCategoryService {
  async execute(id: string) {
    const repository = AppDataSource.getRepository(Category);

    if (!(await repository.findOneBy({ id }))) {
      throw new Error("category not found");
    }

    await repository.delete(id);
  }
}
