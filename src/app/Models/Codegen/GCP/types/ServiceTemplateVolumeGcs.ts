export interface ServiceTemplateVolumeGcs {
  // GCS Bucket name
  Bucket?: string;

  // If true, mount the GCS bucket as read-only
  ReadOnly?: boolean;
}
