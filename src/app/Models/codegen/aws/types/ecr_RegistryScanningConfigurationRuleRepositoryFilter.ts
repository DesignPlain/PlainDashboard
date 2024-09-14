import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ecr_RegistryScanningConfigurationRuleRepositoryFilter {
  //
  filter?: string;

  //
  filterType?: string;
}

export function ecr_RegistryScanningConfigurationRuleRepositoryFilter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "filter", "", () => [], true, false),
    new DynamicUIProps(
      InputType.String,
      "filterType",
      "",
      () => [],
      true,
      false,
    ),
  ];
}
