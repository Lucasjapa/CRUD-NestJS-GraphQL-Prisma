import { Field, InputType, Int, PartialType } from "@nestjs/graphql";

@InputType()
export class CreateTodoInput {
    @Field()
    title: string;
}

@InputType()
export class UpdateTodoInput extends PartialType(CreateTodoInput) {
    @Field(() => Int)
    id: number;

    @Field()
    title: string;
}