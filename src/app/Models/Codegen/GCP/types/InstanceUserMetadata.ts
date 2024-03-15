export interface InstanceUserMetadata {
  // Number of additional Developer Users to allocate to the Looker Instance.
  AdditionalDeveloperUserCount?: number;

  // Number of additional Standard Users to allocate to the Looker Instance.
  AdditionalStandardUserCount?: number;

  // Number of additional Viewer Users to allocate to the Looker Instance.
  AdditionalViewerUserCount?: number;
}
