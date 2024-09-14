import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  pubsub_TopicMessageStoragePolicy,
  pubsub_TopicMessageStoragePolicy_GetTypes,
} from "../types/pubsub_TopicMessageStoragePolicy";
import {
  pubsub_TopicSchemaSettings,
  pubsub_TopicSchemaSettings_GetTypes,
} from "../types/pubsub_TopicSchemaSettings";

export interface TopicArgs {
  /*
The resource name of the Cloud KMS CryptoKey to be used to protect access
to messages published on this topic. Your project's PubSub service account
(`service-{{PROJECT_NUMBER}}@gcp-sa-pubsub.iam.gserviceaccount.com`) must have
`roles/cloudkms.cryptoKeyEncrypterDecrypter` to use this feature.
The expected format is `projects/-/locations/-/keyRings/-/cryptoKeys/-`
*/
  kmsKeyName?: string;

  /*
A set of key/value label pairs to assign to this Topic.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

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
  messageRetentionDuration?: string;

  /*
Policy constraining the set of Google Cloud Platform regions where
messages published to the topic may be stored. If not present, then no
constraints are in effect.
Structure is documented below.
*/
  messageStoragePolicy?: pubsub_TopicMessageStoragePolicy;

  /*
Name of the topic.


- - -
*/
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
Settings for validating messages published against a schema.
Structure is documented below.
*/
  schemaSettings?: pubsub_TopicSchemaSettings;
}
export class Topic extends DS_Resource {
  /*
Name of the topic.


- - -
*/
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  /*
Settings for validating messages published against a schema.
Structure is documented below.
*/
  public schemaSettings?: pubsub_TopicSchemaSettings;

  /*
A set of key/value label pairs to assign to this Topic.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
Policy constraining the set of Google Cloud Platform regions where
messages published to the topic may be stored. If not present, then no
constraints are in effect.
Structure is documented below.
*/
  public messageStoragePolicy?: pubsub_TopicMessageStoragePolicy;

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
  public messageRetentionDuration?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
The resource name of the Cloud KMS CryptoKey to be used to protect access
to messages published on this topic. Your project's PubSub service account
(`service-{{PROJECT_NUMBER}}@gcp-sa-pubsub.iam.gserviceaccount.com`) must have
`roles/cloudkms.cryptoKeyEncrypterDecrypter` to use this feature.
The expected format is `projects/-/locations/-/keyRings/-/cryptoKeys/-`
*/
  public kmsKeyName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "kmsKeyName",
        "The resource name of the Cloud KMS CryptoKey to be used to protect access\nto messages published on this topic. Your project's PubSub service account\n(`service-{{PROJECT_NUMBER}}@gcp-sa-pubsub.iam.gserviceaccount.com`) must have\n`roles/cloudkms.cryptoKeyEncrypterDecrypter` to use this feature.\nThe expected format is `projects/*/locations/*/keyRings/*/cryptoKeys/*`",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "A set of key/value label pairs to assign to this Topic.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "messageRetentionDuration",
        "Indicates the minimum duration to retain a message after it is published\nto the topic. If this field is set, messages published to the topic in\nthe last messageRetentionDuration are always available to subscribers.\nFor instance, it allows any attached subscription to seek to a timestamp\nthat is up to messageRetentionDuration in the past. If this field is not\nset, message retention is controlled by settings on individual subscriptions.\nThe rotation period has the format of a decimal number, followed by the\nletter `s` (seconds). Cannot be more than 31 days or less than 10 minutes.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "messageStoragePolicy",
        "Policy constraining the set of Google Cloud Platform regions where\nmessages published to the topic may be stored. If not present, then no\nconstraints are in effect.\nStructure is documented below.",
        () => pubsub_TopicMessageStoragePolicy_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the topic.\n\n\n- - -",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "schemaSettings",
        "Settings for validating messages published against a schema.\nStructure is documented below.",
        () => pubsub_TopicSchemaSettings_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
