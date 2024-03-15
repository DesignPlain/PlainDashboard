export interface AwsNodePoolConfigAutoscalingMetricsCollection {
  // The frequency at which EC2 Auto Scaling sends aggregated data to AWS CloudWatch. The only valid value is "1Minute".
  Granularity?: string;

  // The metrics to enable. For a list of valid metrics, see https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_EnableMetricsCollection.html. If you specify granularity and don't specify any metrics, all metrics are enabled.
  Metrics?: Array<string>;
}
