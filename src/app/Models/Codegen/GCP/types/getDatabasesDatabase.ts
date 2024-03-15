export interface getDatabasesDatabase {
  /*
The ID of the project in which the instance belongs.

> --Note-- This datasource performs client-side sorting to provide consistent ordering of the databases.
*/
  Project?: string;

  //
  SelfLink?: string;

  /*
The charset value. See MySQL's
[Supported Character Sets and Collations](https://dev.mysql.com/doc/refman/5.7/en/charset-charsets.html)
and Postgres' [Character Set Support](https://www.postgresql.org/docs/9.6/static/multibyte.html)
for more details and supported values. Postgres databases only support
a value of 'UTF8' at creation time.
*/
  Charset?: string;

  /*
The collation value. See MySQL's
[Supported Character Sets and Collations](https://dev.mysql.com/doc/refman/5.7/en/charset-charsets.html)
and Postgres' [Collation Support](https://www.postgresql.org/docs/9.6/static/collation.html)
for more details and supported values. Postgres databases only support
a value of 'en_US.UTF8' at creation time.
*/
  Collation?: string;

  /*
The deletion policy for the database. Setting ABANDON allows the resource
to be abandoned rather than deleted. This is useful for Postgres, where databases cannot be
deleted from the API if there are users other than cloudsqlsuperuser with access. Possible
values are: "ABANDON", "DELETE". Defaults to "DELETE".
*/
  DeletionPolicy?: string;

  // The name of the Cloud SQL database instance in which the database belongs.
  Instance?: string;

  /*
The name of the database in the Cloud SQL instance.
This does not include the project ID or instance name.
*/
  Name?: string;
}