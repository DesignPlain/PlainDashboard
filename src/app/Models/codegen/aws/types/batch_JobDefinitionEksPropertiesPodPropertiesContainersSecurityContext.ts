import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface batch_JobDefinitionEksPropertiesPodPropertiesContainersSecurityContext {
  //
  privileged?: boolean;

  //
  readOnlyRootFileSystem?: boolean;

  //
  runAsGroup?: number;

  //
  runAsNonRoot?: boolean;

  //
  runAsUser?: number;
}

export function batch_JobDefinitionEksPropertiesPodPropertiesContainersSecurityContext_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "runAsUser",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "privileged",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "readOnlyRootFileSystem",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "runAsGroup",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "runAsNonRoot",
      "",
      () => [],
      false,
      false,
    ),
  ];
}
