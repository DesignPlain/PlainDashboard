import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Secretmanager_SecretTopic {
  /*
The resource name of the Pub/Sub topic that will be published to, in the following format: projects/-/topics/-.
For publication to succeed, the Secret Manager Service Agent service account must have pubsub.publisher permissions on the topic.
*/
  Name?: string;
}

export function Secretmanager_SecretTopic_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The resource name of the Pub/Sub topic that will be published to, in the following format: projects/*/topics/*.\nFor publication to succeed, the Secret Manager Service Agent service account must have pubsub.publisher permissions on the topic.",
      [],
      true,
      false,
    ),
  ];
}
