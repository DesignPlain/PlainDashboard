import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface batch_JobDefinitionEksPropertiesPodPropertiesContainersSecurityContext {
  //
  readOnlyRootFileSystem?: boolean;

  //
  runAsGroup?: number;

  //
  runAsNonRoot?: boolean;

  //
  runAsUser?: number;

  //
  privileged?: boolean;
}

export function batch_JobDefinitionEksPropertiesPodPropertiesContainersSecurityContext_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "readOnlyRootFileSystem",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.Number, "runAsGroup", "", [], false, false),
    new DynamicUIProps(InputType.Bool, "runAsNonRoot", "", [], false, false),
    new DynamicUIProps(InputType.Number, "runAsUser", "", [], false, false),
    new DynamicUIProps(InputType.Bool, "privileged", "", [], false, false),
  ];
}
