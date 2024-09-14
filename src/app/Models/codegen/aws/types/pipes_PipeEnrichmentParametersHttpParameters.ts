import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface pipes_PipeEnrichmentParametersHttpParameters {
  //
  pathParameterValues?: string;

  //
  queryStringParameters?: Map<string, string>;

  //
  headerParameters?: Map<string, string>;
}

export function pipes_PipeEnrichmentParametersHttpParameters_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "headerParameters",
      "",
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "pathParameterValues",
      "",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "queryStringParameters",
      "",
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
