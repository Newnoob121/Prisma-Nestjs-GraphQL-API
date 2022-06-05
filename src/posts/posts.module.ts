import { PrismaService } from './../prisma.service';
import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';

@Module({
  providers: [PostsResolver, PostsService, PrismaService],
  exports: [PostsService],
})
export class PostsModule {}
