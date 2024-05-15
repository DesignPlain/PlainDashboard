import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Sourcerepo_RepositoryPubsubConfig {
  /*
Email address of the service account used for publishing Cloud Pub/Sub messages.
This service account needs to be in the same project as the PubsubConfig. When added,
the caller needs to have iam.serviceAccounts.actAs permission on this service account.
If unspecified, it defaults to the compute engine default service account.
*/
  ServiceAccountEmail?: string;

  // The identifier for this object. Format specified above.
  Topic?: string;

  /*
The format of the Cloud Pub/Sub messages.
- PROTOBUF: The message payload is a serialized protocol buffer of SourceRepoEvent.
- JSON: The message payload is a JSON string of SourceRepoEvent.
Possible values are: `PROTOBUF`, `JSON`.
*/
  MessageFormat?: string;
}

export function Sourcerepo_RepositoryPubsubConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "MessageFormat",
      "The format of the Cloud Pub/Sub messages.\n- PROTOBUF: The message payload is a serialized protocol buffer of SourceRepoEvent.\n- JSON: The message payload is a JSON string of SourceRepoEvent.\nPossible values are: `PROTOBUF`, `JSON`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ServiceAccountEmail",
      "Email address of the service account used for publishing Cloud Pub/Sub messages.\nThis service account needs to be in the same project as the PubsubConfig. When added,\nthe caller needs to have iam.serviceAccounts.actAs permission on this service account.\nIf unspecified, it defaults to the compute engine default service account.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Topic",
      "The identifier for this object. Format specified above.",
      [],
      true,
      false,
    ),
  ];
}
