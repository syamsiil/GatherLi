import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity({ name: "card" })
export class Card {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column({ nullable: true })
  image: string;

  @Column({ nullable: true })
  title: string;

  @ManyToOne(() => User, (user) => user.card, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  user: User;
}
