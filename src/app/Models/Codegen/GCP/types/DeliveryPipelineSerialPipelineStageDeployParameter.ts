export interface DeliveryPipelineSerialPipelineStageDeployParameter {
  // Optional. Deploy parameters are applied to targets with match labels. If unspecified, deploy parameters are applied to all targets (including child targets of a multi-target).
  MatchTargetLabels?: Map<string, string>;

  // Required. Values are deploy parameters in key-value pairs.
  Values?: Map<string, string>;
}
