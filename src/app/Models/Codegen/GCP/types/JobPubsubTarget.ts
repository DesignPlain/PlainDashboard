export interface JobPubsubTarget {
  /*
Attributes for PubsubMessage.
Pubsub message must contain either non-empty data, or at least one attribute.
*/
  Attributes?: Map<string, string>;

  /*
The message payload for PubsubMessage.
Pubsub message must contain either non-empty data, or at least one attribute.
A base64-encoded string.
*/
  Data?: string;

  /*
The full resource name for the Cloud Pub/Sub topic to which
messages will be published when a job is delivered. ~>--NOTE:--
The topic name must be in the same format as required by PubSub's
PublishRequest.name, e.g. `projects/my-project/topics/my-topic`.
*/
  TopicName?: string;
}
