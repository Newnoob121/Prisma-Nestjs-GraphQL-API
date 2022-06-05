import { CreatePostInput } from './create-post.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePostInput extends PartialType(CreatePostInput) {
  @Field(() => Int, {
    description: 'Example field (placeholder)',
  })
  id: number;

  isPublished: boolean;

  title: string;

  content: string;
}
