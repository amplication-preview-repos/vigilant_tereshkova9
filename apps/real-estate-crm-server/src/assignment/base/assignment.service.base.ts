/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Assignment as PrismaAssignment,
  Agent as PrismaAgent,
  Property as PrismaProperty,
} from "@prisma/client";

export class AssignmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AssignmentCountArgs, "select">
  ): Promise<number> {
    return this.prisma.assignment.count(args);
  }

  async assignments(
    args: Prisma.AssignmentFindManyArgs
  ): Promise<PrismaAssignment[]> {
    return this.prisma.assignment.findMany(args);
  }
  async assignment(
    args: Prisma.AssignmentFindUniqueArgs
  ): Promise<PrismaAssignment | null> {
    return this.prisma.assignment.findUnique(args);
  }
  async createAssignment(
    args: Prisma.AssignmentCreateArgs
  ): Promise<PrismaAssignment> {
    return this.prisma.assignment.create(args);
  }
  async updateAssignment(
    args: Prisma.AssignmentUpdateArgs
  ): Promise<PrismaAssignment> {
    return this.prisma.assignment.update(args);
  }
  async deleteAssignment(
    args: Prisma.AssignmentDeleteArgs
  ): Promise<PrismaAssignment> {
    return this.prisma.assignment.delete(args);
  }

  async getAgent(parentId: string): Promise<PrismaAgent | null> {
    return this.prisma.assignment
      .findUnique({
        where: { id: parentId },
      })
      .agent();
  }

  async getProperty(parentId: string): Promise<PrismaProperty | null> {
    return this.prisma.assignment
      .findUnique({
        where: { id: parentId },
      })
      .property();
  }
}
