export interface DeliveryPipelineSerialPipelineStageStrategyCanaryRuntimeConfigCloudRun {
  // Whether Cloud Deploy should update the traffic stanza in a Cloud Run Service on the user's behalf to facilitate traffic splitting. This is required to be true for CanaryDeployments, but optional for CustomCanaryDeployments.
  AutomaticTrafficControl?: boolean;

  // Optional. A list of tags that are added to the canary revision while the canary phase is in progress.
  CanaryRevisionTags?: Array<string>;

  // Optional. A list of tags that are added to the prior revision while the canary phase is in progress.
  PriorRevisionTags?: Array<string>;

  // Optional. A list of tags that are added to the final stable revision when the stable phase is applied.
  StableRevisionTags?: Array<string>;
}
