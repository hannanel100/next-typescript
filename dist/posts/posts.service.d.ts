import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Repository } from 'typeorm';
import { Post as PostEntity } from './entities/post.entity';
export interface Post {
    id: number;
    title: string;
    content: string;
    authorId: number;
}
export declare class PostsService {
    private postsRepository;
    constructor(postsRepository: Repository<PostEntity>);
    private lastPostId;
    private posts;
    create(createPostDto: CreatePostDto): Promise<PostEntity>;
    findAll(): Promise<PostEntity[]>;
    findOne(id: number): Promise<PostEntity>;
    update(id: number, updatePostDto: UpdatePostDto): Promise<PostEntity>;
    remove(id: number): Promise<string>;
}
