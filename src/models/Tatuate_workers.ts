import {BaseEntity, Entity, PrimaryGeneratedColumn, Column,OneToMany, CreateDateColumn,UpdateDateColumn}
     from "typeorm";
  import { Appointment } from "./Appointments";
  
  @Entity("tatuate_workers")
  export class Tatuate_workers {
    @PrimaryGeneratedColumn()
    id!: number;
  
    @Column()
    nickname!: string;
  
    @Column()
    first_name!: string;
    
    @Column()
    last_name!: string;
  
    @Column()
    email!: string;
  
    @Column()
    password!: string;
  
    @CreateDateColumn()
    created_at?: Date;
  
    @UpdateDateColumn()
    updated_at?: Date;
  
   @Column()
    active?: Number;
  
     @OneToMany(() => Appointment, (appointment) => appointment.user)
     appointments?: Appointment[];
  }
  