export interface getServiceTemplateVolumeSecretItem {
  // The Cloud Secret Manager secret version. Can be 'latest' for the latest value or an integer for a specific version
  Version?: string;

  // Integer octal mode bits to use on this file, must be a value between 01 and 0777 (octal). If 0 or not set, the Volume's default mode will be used.
  Mode?: number;

  // The relative path of the secret in the container.
  Path?: string;
}
