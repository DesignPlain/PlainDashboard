export interface InstanceEventPublishConfig {
  // Option to enable Event Publishing.
  Enabled?: boolean;

  // The resource name of the Pub/Sub topic. Format: projects/{projectId}/topics/{topic_id}
  Topic?: string;
}
