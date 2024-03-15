export interface StandardAppVersionDeploymentFile {
  // The identifier for this object. Format specified above.
  Name?: string;

  // SHA1 checksum of the file
  Sha1Sum?: string;

  // Source URL
  SourceUrl?: string;
}
