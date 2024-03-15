export interface getJobTemplateTemplateContainerPort {
  // Port number the container listens on. This must be a valid TCP port number, 0 < containerPort < 65536.
  ContainerPort?: number;

  // The name of the Cloud Run v2 Job.
  Name?: string;
}
