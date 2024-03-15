export interface getFoldersFolder {
  // The timestamp of when the folder was created
  CreateTime?: string;

  // The timestamp of when the folder was requested to be deleted (if applicable)
  DeleteTime?: string;

  // The display name of the folder
  DisplayName?: string;

  // Entity tag identifier of the folder
  Etag?: string;

  // The id of the folder
  Name?: string;

  // The parent id of the folder
  Parent?: string;

  // The lifecycle state of the folder
  State?: string;

  // The timestamp of when the folder was last modified
  UpdateTime?: string;
}
