import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { forwardRef, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLConfig } from './configurations/GraphQLConfig';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useClass: GraphQLConfig,
    }),
    forwardRef(() => PostsModule),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
