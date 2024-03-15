export interface getServiceTemplateSpecContainerPort {
  // The name of the Cloud Run Service.
  Name?: string;

  // Protocol for port. Must be "TCP". Defaults to "TCP".
  Protocol?: string;

  // Port number the container listens on. This must be a valid port number (between 1 and 65535). Defaults to "8080".
  ContainerPort?: number;
}
