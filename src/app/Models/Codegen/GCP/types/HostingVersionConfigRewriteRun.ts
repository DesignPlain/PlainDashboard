export interface HostingVersionConfigRewriteRun {
  // Optional. User-provided region where the Cloud Run service is hosted. Defaults to `us-central1` if not supplied.
  Region?: string;

  // User-defined ID of the Cloud Run service.
  ServiceId?: string;
}
