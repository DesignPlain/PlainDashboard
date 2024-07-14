import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface container_AttachedClusterBinaryAuthorization {
  /*
Configure Binary Authorization evaluation mode.
Possible values are: `DISABLED`, `PROJECT_SINGLETON_POLICY_ENFORCE`.
*/
  evaluationMode?: string;
}

export function container_AttachedClusterBinaryAuthorization_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "evaluationMode",
      "Configure Binary Authorization evaluation mode.\nPossible values are: `DISABLED`, `PROJECT_SINGLETON_POLICY_ENFORCE`.",
      [],
      false,
      false,
    ),
  ];
}
