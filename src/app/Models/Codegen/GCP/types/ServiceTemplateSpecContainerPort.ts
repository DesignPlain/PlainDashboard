export interface ServiceTemplateSpecContainerPort {
  // Port number the container listens on. This must be a valid port number (between 1 and 65535). Defaults to "8080".
  ContainerPort?: number;

  // If specified, used to specify which protocol to use. Allowed values are "http1" (HTTP/1) and "h2c" (HTTP/2 end-to-end). Defaults to "http1".
  Name?: string;

  // Protocol for port. Must be "TCP". Defaults to "TCP".
  Protocol?: string;
}
