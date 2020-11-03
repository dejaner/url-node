import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUrlTable1604137119515 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'urls',
          columns: [
            {
              name: 'slug',
              type: 'text',
              isNullable: false,
              isPrimary: true
            },
            {
              name: 'target',
              type: 'text',
              isNullable: false
            },
            {
              name: 'created_at',
              type: 'timestamp',
              isNullable: false,
              default: () => 'CURRENT_TIMESTAMP'
            },
            {
              name: 'updated_at',
              type: 'timestamp',
              isNullable: true,
            }
          ]
        })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('urls')
    }

}
