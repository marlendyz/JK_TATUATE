import "reflect-metadata";
import { DataSource } from "typeorm";

// -----------------------------------------------------------------------------

export const AppDataSource = new DataSource({
   type: "mysql",
   host: "localhost",
   port: 3307,
   username: "root",
   password: "root",
   database: "JK_TATUATE",
   // entities: ["src/models/*.ts"],
   entities: [`${__dirname}/../models/**/*{.js,.ts}`],
   // migrations: ["src/migrations/*.ts"],
   migrations: [`${__dirname}/migrations/**/*{.js,.ts}`],
   synchronize: false,
   logging: false,
});

//  src/models/**/*.ts

// - src
//   - models
//     - entity1.ts
//     - entity2.ts
//   - other
//     - nested
//       - models
//         - entity3.ts
