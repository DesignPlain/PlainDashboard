import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Cloudrun_ServiceTemplateSpecContainerEnvFromSecretRefLocalObjectReference {
  // Name of the referent.
  Name?: string;
}

export function Cloudrun_ServiceTemplateSpecContainerEnvFromSecretRefLocalObjectReference_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Name",
      "Name of the referent.",
      [],
      true,
      false,
    ),
  ];
}
