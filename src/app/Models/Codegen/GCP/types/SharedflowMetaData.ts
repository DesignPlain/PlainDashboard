export interface SharedflowMetaData {
  // Time at which the API proxy was created, in milliseconds since epoch.
  CreatedAt?: string;

  // Time at which the API proxy was most recently modified, in milliseconds since epoch.
  LastModifiedAt?: string;

  // The type of entity described
  SubType?: string;
}
