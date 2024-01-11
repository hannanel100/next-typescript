import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post as PostEntity } from './entities/post.entity';
export interface Post {
  id: number;
  title: string;
  content: string;
  authorId: number;
}
@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostEntity)
    private postsRepository: Repository<PostEntity>,
  ) {}
  private lastPostId = 0;
  private posts: Post[] = [];
  async create(createPostDto: CreatePostDto): Promise<PostEntity> {
    const newPost = await this.postsRepository.save(createPostDto);
    return newPost;
  }

  findAll() {
    return this.postsRepository.find();
  }

  async findOne(id: number): Promise<PostEntity> {
    const post = await this.postsRepository.findOneBy({ id });
    if (!post) throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
    return post;
  }

  async update(id: number, updatePostDto: UpdatePostDto): Promise<PostEntity> {
    await this.postsRepository.update(id, updatePostDto);
    const post = await this.postsRepository.findOneBy({ id });
    if (!post) throw new HttpException('Post not found', HttpStatus.NOT_FOUND);

    return post;
  }

  async remove(id: number): Promise<string> {
    const deletedPost = await this.postsRepository.delete(id);
    if (!deletedPost.affected)
      throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
    return 'Post deleted successfully';
  }
}
