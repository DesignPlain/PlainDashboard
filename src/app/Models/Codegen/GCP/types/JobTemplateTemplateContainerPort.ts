export interface JobTemplateTemplateContainerPort {
  // Port number the container listens on. This must be a valid TCP port number, 0 < containerPort < 65536.
  ContainerPort?: number;

  // If specified, used to specify which protocol to use. Allowed values are "http1" and "h2c".
  Name?: string;
}
