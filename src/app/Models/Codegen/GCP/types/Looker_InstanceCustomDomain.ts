import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Looker_InstanceCustomDomain {
  // Domain name
  Domain?: string;

  /*
(Output)
Status of the custom domain.
*/
  State?: string;
}

export function Looker_InstanceCustomDomain_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Domain",
      "Domain name",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "State",
      "(Output)\nStatus of the custom domain.",
      [],
      false,
      false,
    ),
  ];
}
