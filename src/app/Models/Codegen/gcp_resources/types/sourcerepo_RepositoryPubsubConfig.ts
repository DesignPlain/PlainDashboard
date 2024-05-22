import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface sourcerepo_RepositoryPubsubConfig {
  // The identifier for this object. Format specified above.
  topic?: string;

  /*
The format of the Cloud Pub/Sub messages.
- PROTOBUF: The message payload is a serialized protocol buffer of SourceRepoEvent.
- JSON: The message payload is a JSON string of SourceRepoEvent.
Possible values are: `PROTOBUF`, `JSON`.
*/
  messageFormat?: string;

  /*
Email address of the service account used for publishing Cloud Pub/Sub messages.
This service account needs to be in the same project as the PubsubConfig. When added,
the caller needs to have iam.serviceAccounts.actAs permission on this service account.
If unspecified, it defaults to the compute engine default service account.
*/
  serviceAccountEmail?: string;
}

export function sourcerepo_RepositoryPubsubConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "topic",
      "The identifier for this object. Format specified above.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "messageFormat",
      "The format of the Cloud Pub/Sub messages.\n- PROTOBUF: The message payload is a serialized protocol buffer of SourceRepoEvent.\n- JSON: The message payload is a JSON string of SourceRepoEvent.\nPossible values are: `PROTOBUF`, `JSON`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "serviceAccountEmail",
      "Email address of the service account used for publishing Cloud Pub/Sub messages.\nThis service account needs to be in the same project as the PubsubConfig. When added,\nthe caller needs to have iam.serviceAccounts.actAs permission on this service account.\nIf unspecified, it defaults to the compute engine default service account.",
      [],
      false,
      false,
    ),
  ];
}
