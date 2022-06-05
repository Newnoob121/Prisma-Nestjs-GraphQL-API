import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { PrismaService } from '../prisma.service';
import { Post } from '@prisma/client';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}
  /**
   * It uses the Prisma client to create a new post
   * @param {CreatePostInput} createPostInput - CreatePostInput
   * @returns The newly created post.
   */
  async create(createPostInput: CreatePostInput): Promise<Post> {
    return await this.prisma.post.create({ data: createPostInput });
  }

  async findAllPosts(): Promise<Post[]> {
    return await this.prisma.post.findMany();
  }

  async findPostById(id: number) {
    return await this.prisma.post.findUnique({ where: { id } });
  }

  async updatePost(id: number, updatePostInput: UpdatePostInput) {
    return await this.prisma.post.update({
      where: { id },
      data: updatePostInput,
    });
  }

  async remove(id: number) {
    return await this.prisma.post.delete({
      where: { id },
    });
  }
}
