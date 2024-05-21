import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface secretmanager_getSecretsSecretTopic {
  // The resource name of the Pub/Sub topic that will be published to.
  name?: string;
}

export function secretmanager_getSecretsSecretTopic_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The resource name of the Pub/Sub topic that will be published to.",
      [],
      true,
      false,
    ),
  ];
}
