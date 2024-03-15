export interface DefaultObjectAccessControlProjectTeam {
  // The project team associated with the entity
  ProjectNumber?: string;

  /*
The team.
Possible values are: `editors`, `owners`, `viewers`.
*/
  Team?: string;
}
