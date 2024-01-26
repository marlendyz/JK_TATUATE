import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";
import { Tatuate_workers } from "./Tatuate_workers";

@Entity("appointments")
export class Appointment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  user_id!: number;
  @Column()
  tatuate_workers_id!: number;
  @Column()
  appointment_date!: Date;

  @ManyToOne(() => User, (user) => user.appointments)
  @JoinColumn({ name: "user_id" })
  user!: User;

  @ManyToOne(
    () => Tatuate_workers,
    (tatuate_workers) => tatuate_workers.appointments
  )
  @JoinColumn({ name: "tatuate_workers_id" })
  tatuate_workers!: Tatuate_workers;
}
