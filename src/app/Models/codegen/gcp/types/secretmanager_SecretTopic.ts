import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface secretmanager_SecretTopic {
  /*
The resource name of the Pub/Sub topic that will be published to, in the following format: projects/-/topics/-.
For publication to succeed, the Secret Manager Service Agent service account must have pubsub.publisher permissions on the topic.
*/
  name?: string;
}

export function secretmanager_SecretTopic_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The resource name of the Pub/Sub topic that will be published to, in the following format: projects/*/topics/*.\nFor publication to succeed, the Secret Manager Service Agent service account must have pubsub.publisher permissions on the topic.",
      () => [],
      true,
      false,
    ),
  ];
}
