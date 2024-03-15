import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { TopicMessageStoragePolicy } from "../types/TopicMessageStoragePolicy";
import { TopicSchemaSettings } from "../types/TopicSchemaSettings";

export interface TopicArgs {
  /*
A set of key/value label pairs to assign to this Topic.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
Indicates the minimum duration to retain a message after it is published
to the topic. If this field is set, messages published to the topic in
the last messageRetentionDuration are always available to subscribers.
For instance, it allows any attached subscription to seek to a timestamp
that is up to messageRetentionDuration in the past. If this field is not
set, message retention is controlled by settings on individual subscriptions.
The rotation period has the format of a decimal number, followed by the
letter `s` (seconds). Cannot be more than 31 days or less than 10 minutes.
*/
  MessageRetentionDuration?: string;

  /*
Policy constraining the set of Google Cloud Platform regions where
messages published to the topic may be stored. If not present, then no
constraints are in effect.
Structure is documented below.
*/
  MessageStoragePolicy?: TopicMessageStoragePolicy;

  /*
Name of the topic.


- - -
*/
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Settings for validating messages published against a schema.
Structure is documented below.
*/
  SchemaSettings?: TopicSchemaSettings;

  /*
The resource name of the Cloud KMS CryptoKey to be used to protect access
to messages published on this topic. Your project's PubSub service account
(`service-{{PROJECT_NUMBER}}@gcp-sa-pubsub.iam.gserviceaccount.com`) must have
`roles/cloudkms.cryptoKeyEncrypterDecrypter` to use this feature.
The expected format is `projects/-/locations/-/keyRings/-/cryptoKeys/-`
*/
  KmsKeyName?: string;
}
export class Topic extends Resource {
  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
The resource name of the Cloud KMS CryptoKey to be used to protect access
to messages published on this topic. Your project's PubSub service account
(`service-{{PROJECT_NUMBER}}@gcp-sa-pubsub.iam.gserviceaccount.com`) must have
`roles/cloudkms.cryptoKeyEncrypterDecrypter` to use this feature.
The expected format is `projects/-/locations/-/keyRings/-/cryptoKeys/-`
*/
  public KmsKeyName?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
Settings for validating messages published against a schema.
Structure is documented below.
*/
  public SchemaSettings?: TopicSchemaSettings;

  /*
A set of key/value label pairs to assign to this Topic.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
Indicates the minimum duration to retain a message after it is published
to the topic. If this field is set, messages published to the topic in
the last messageRetentionDuration are always available to subscribers.
For instance, it allows any attached subscription to seek to a timestamp
that is up to messageRetentionDuration in the past. If this field is not
set, message retention is controlled by settings on individual subscriptions.
The rotation period has the format of a decimal number, followed by the
letter `s` (seconds). Cannot be more than 31 days or less than 10 minutes.
*/
  public MessageRetentionDuration?: string;

  /*
Policy constraining the set of Google Cloud Platform regions where
messages published to the topic may be stored. If not present, then no
constraints are in effect.
Structure is documented below.
*/
  public MessageStoragePolicy?: TopicMessageStoragePolicy;

  /*
Name of the topic.


- - -
*/
  public Name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "A set of key/value label pairs to assign to this Topic.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "MessageRetentionDuration",
        "Indicates the minimum duration to retain a message after it is published\nto the topic. If this field is set, messages published to the topic in\nthe last messageRetentionDuration are always available to subscribers.\nFor instance, it allows any attached subscription to seek to a timestamp\nthat is up to messageRetentionDuration in the past. If this field is not\nset, message retention is controlled by settings on individual subscriptions.\nThe rotation period has the format of a decimal number, followed by the\nletter `s` (seconds). Cannot be more than 31 days or less than 10 minutes.",
      ),
      new DynamicUIProps(
        InputType.String,
        "MessageStoragePolicy",
        "Policy constraining the set of Google Cloud Platform regions where\nmessages published to the topic may be stored. If not present, then no\nconstraints are in effect.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "Name of the topic.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "SchemaSettings",
        "Settings for validating messages published against a schema.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "KmsKeyName",
        "The resource name of the Cloud KMS CryptoKey to be used to protect access\nto messages published on this topic. Your project's PubSub service account\n(`service-{{PROJECT_NUMBER}}@gcp-sa-pubsub.iam.gserviceaccount.com`) must have\n`roles/cloudkms.cryptoKeyEncrypterDecrypter` to use this feature.\nThe expected format is `projects/*/locations/*/keyRings/*/cryptoKeys/*`",
      ),
    ];
  }
}
