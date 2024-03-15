export interface TaskSparkInfrastructureSpecVpcNetwork {
  // The Cloud VPC network in which the job is run. By default, the Cloud VPC network named Default within the project is used.
  Network?: string;

  // List of network tags to apply to the job.
  NetworkTags?: Array<string>;

  // The Cloud VPC sub-network in which the job is run.
  SubNetwork?: string;
}
