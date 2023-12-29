import type { Knex } from 'knex';

const TableName = {
  POST_REACTIONS: 'post_reactions'
};

const ColumnName = {
  IS_DISLIKE: 'is_dislike'
};

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable(TableName.POST_REACTIONS, table => {
    table.boolean(ColumnName.IS_DISLIKE).notNullable().defaultTo(false);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable(TableName.POST_REACTIONS, table => {
    table.dropColumn(ColumnName.IS_DISLIKE);
  });
}
