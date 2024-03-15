export interface getProjectProject {
  // The optional user-assigned display name of the project.
  Name?: string;

  // The numeric identifier of the project.
  Number?: string;

  // An optional reference to a parent resource.
  Parent?: Map<string, string>;

  // The project id of the project.
  ProjectId?: string;

  // Creation time in RFC3339 UTC "Zulu" format.
  CreateTime?: string;

  // A set of key/value label pairs assigned on a project.
  Labels?: Map<string, string>;

  // The Project lifecycle state.
  LifecycleState?: string;
}
