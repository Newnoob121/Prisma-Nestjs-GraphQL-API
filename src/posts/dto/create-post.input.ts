import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {
  @Field(() => String, { description: 'title of a post' })
  title: string;

  @Field(() => String, { description: 'content of a post' })
  content: string;
}
