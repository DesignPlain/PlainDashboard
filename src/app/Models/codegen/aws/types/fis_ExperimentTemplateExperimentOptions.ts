import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface fis_ExperimentTemplateExperimentOptions {
  // Specifies the account targeting setting for experiment options. Supports `single-account` and `multi-account`.
  accountTargeting?: string;

  // Specifies the empty target resolution mode for experiment options. Supports `fail` and `skip`.
  emptyTargetResolutionMode?: string;
}

export function fis_ExperimentTemplateExperimentOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "accountTargeting",
      "Specifies the account targeting setting for experiment options. Supports `single-account` and `multi-account`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "emptyTargetResolutionMode",
      "Specifies the empty target resolution mode for experiment options. Supports `fail` and `skip`.",
      () => [],
      false,
      false,
    ),
  ];
}
