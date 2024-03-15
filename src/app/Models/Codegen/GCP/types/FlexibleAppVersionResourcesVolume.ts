export interface FlexibleAppVersionResourcesVolume {
  // Volume size in gigabytes.
  SizeGb?: number;

  // Underlying volume type, e.g. 'tmpfs'.
  VolumeType?: string;

  // Unique name for the volume.
  Name?: string;
}
