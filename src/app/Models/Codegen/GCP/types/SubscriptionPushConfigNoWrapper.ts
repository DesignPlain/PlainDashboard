export interface SubscriptionPushConfigNoWrapper {
  /*
When true, writes the Pub/Sub message metadata to
`x-goog-pubsub-<KEY>:<VAL>` headers of the HTTP request. Writes the
Pub/Sub message attributes to `<KEY>:<VAL>` headers of the HTTP request.
*/
  WriteMetadata?: boolean;
}
