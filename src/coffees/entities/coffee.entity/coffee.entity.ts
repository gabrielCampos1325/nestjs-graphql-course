import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import * as GraphQlTypes from '../../../graphql';
import { Flavor } from '../flavor.entity/flavor.entity';

@Entity()
export class Coffee implements GraphQlTypes.Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @JoinTable()
  @ManyToMany(() => Flavor, (flavor: Flavor) => flavor.coffees, {
    cascade: true,
  })
  flavors: Flavor[];

  @CreateDateColumn()
  createdAt?: Date | null;

  @Column({ nullable: true })
  type: GraphQlTypes.CoffeeType;
}
