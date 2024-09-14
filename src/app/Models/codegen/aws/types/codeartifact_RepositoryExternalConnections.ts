import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface codeartifact_RepositoryExternalConnections {
  // The name of the external connection associated with a repository.
  externalConnectionName?: string;

  //
  packageFormat?: string;

  //
  status?: string;
}

export function codeartifact_RepositoryExternalConnections_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "externalConnectionName",
      "The name of the external connection associated with a repository.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "packageFormat",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "status", "", () => [], false, false),
  ];
}
