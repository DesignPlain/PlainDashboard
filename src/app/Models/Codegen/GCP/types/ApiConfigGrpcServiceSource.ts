export interface ApiConfigGrpcServiceSource {
  // Base64 encoded content of the file.
  Contents?: string;

  // The file path (full or relative path). This is typically the path of the file when it is uploaded.
  Path?: string;
}
