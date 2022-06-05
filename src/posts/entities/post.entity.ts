import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Post {
  @Field(() => Int, {
    description: 'Example field (placeholder)',
  })
  id: number;

  @Field(() => String, { description: 'title of a post' })
  title: string;

  @Field(() => String, { description: 'content of a post' })
  content: string;

  @Field(() => Boolean, { description: 'is published', nullable: true })
  isPublished: boolean;

  @Field(() => Date, { description: 'created at' })
  createdAt: string;
}
